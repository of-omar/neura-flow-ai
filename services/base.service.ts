/**
 * Base Service Layer
 * Shared utilities for all API services with error handling and retry logic
 */

import { ApiResponse } from '@/lib/types';
import { API_CONFIG } from '@/lib/constants';

export interface ServiceError extends Error {
  code: string;
  statusCode?: number;
  originalError?: Error;
}

/**
 * Create a custom service error
 */
export function createServiceError(
  message: string,
  code: string,
  statusCode?: number,
  originalError?: Error
): ServiceError {
  const error = new Error(message) as ServiceError;
  error.code = code;
  error.statusCode = statusCode;
  error.originalError = originalError;
  return error;
}

/**
 * Generic API request handler with error handling and retry logic
 */
export async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  const url = `${API_CONFIG.baseUrl}${endpoint}`;
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < API_CONFIG.retryAttempts; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);

      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw createServiceError(
          errorData.message || `HTTP ${response.status}`,
          'HTTP_ERROR',
          response.status
        );
      }

      const data = await response.json();
      return {
        success: true,
        data,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      // Don't retry on client errors (4xx)
      if (error instanceof Error && 'statusCode' in error && error.statusCode && error.statusCode >= 400 && error.statusCode < 500) {
        break;
      }

      // Wait before retrying
      if (attempt < API_CONFIG.retryAttempts - 1) {
        await new Promise((resolve) =>
          setTimeout(resolve, API_CONFIG.retryDelay * Math.pow(2, attempt))
        );
      }
    }
  }

  return {
    success: false,
    error: {
      code: 'SERVICE_ERROR',
      message: lastError?.message || 'An error occurred while fetching data',
    },
    timestamp: new Date().toISOString(),
  };
}

/**
 * GET request
 */
export function get<T>(endpoint: string): Promise<ApiResponse<T>> {
  return apiRequest<T>(endpoint, {
    method: 'GET',
  });
}

/**
 * POST request
 */
export function post<T>(
  endpoint: string,
  data?: Record<string, any>
): Promise<ApiResponse<T>> {
  return apiRequest<T>(endpoint, {
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined,
  });
}

/**
 * PUT request
 */
export function put<T>(
  endpoint: string,
  data?: Record<string, any>
): Promise<ApiResponse<T>> {
  return apiRequest<T>(endpoint, {
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
  });
}

/**
 * DELETE request
 */
export function del<T>(endpoint: string): Promise<ApiResponse<T>> {
  return apiRequest<T>(endpoint, {
    method: 'DELETE',
  });
}

/**
 * PATCH request
 */
export function patch<T>(
  endpoint: string,
  data?: Record<string, any>
): Promise<ApiResponse<T>> {
  return apiRequest<T>(endpoint, {
    method: 'PATCH',
    body: data ? JSON.stringify(data) : undefined,
  });
}

/**
 * Handle API response and extract data or throw error
 */
export async function handleApiResponse<T>(response: ApiResponse<T>): Promise<T> {
  if (!response.success || !response.data) {
    throw createServiceError(
      response.error?.message || 'Unknown error',
      response.error?.code || 'UNKNOWN_ERROR'
    );
  }
  return response.data;
}

/**
 * Format query parameters for URLs
 */
export function buildQueryString(params: Record<string, any>): string {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((v) => searchParams.append(key, String(v)));
      } else {
        searchParams.set(key, String(value));
      }
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : '';
}
