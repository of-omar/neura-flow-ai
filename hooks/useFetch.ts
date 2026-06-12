/**
 * useFetch Hook
 * Generic data fetching hook with loading, error, and data states
 */

'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ApiResponse, AsyncState } from '@/lib/types';

export interface UseFetchOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  skip?: boolean;
  dependencies?: any[];
}

export function useFetch<T>(
  fetcher: () => Promise<ApiResponse<T>>,
  options?: UseFetchOptions<T>
): AsyncState<T> & { refetch: () => Promise<void> } {
  const [state, setState] = useState<AsyncState<T>>({
    loading: true,
    data: undefined,
    error: undefined,
  });

  const isMountedRef = useRef(true);

  const fetchData = useCallback(async () => {
    setState({ loading: true, error: undefined, data: undefined });

    try {
      const response = await fetcher();

      if (!isMountedRef.current) return;

      if (response.success && response.data) {
        setState({ loading: false, data: response.data, error: undefined });
        options?.onSuccess?.(response.data);
      } else {
        const error = new Error(
          response.error?.message || 'Failed to fetch data'
        );
        setState({ loading: false, error, data: undefined });
        options?.onError?.(error);
      }
    } catch (error) {
      if (!isMountedRef.current) return;

      const err = error instanceof Error ? error : new Error(String(error));
      setState({ loading: false, error: err, data: undefined });
      options?.onError?.(err);
    }
  }, [fetcher, options]);

  useEffect(() => {
    isMountedRef.current = true;

    if (!options?.skip) {
      fetchData();
    }

    return () => {
      isMountedRef.current = false;
    };
  }, options?.dependencies || [fetchData, options?.skip]);

  const refetch = useCallback(async () => {
    await fetchData();
  }, [fetchData]);

  return { ...state, refetch };
}
