import { Feature } from '@/lib/types'
import { features } from '@/lib/data/features'
import { BaseService, ApiResponse } from './base.service'

class FeaturesService extends BaseService {
  /**
   * Fetch all features
   */
  async getAllFeatures(): Promise<ApiResponse<Feature[]>> {
    try {
      await new Promise((resolve) => setTimeout(resolve, 300))
      return {
        success: true,
        data: features,
        timestamp: new Date().toISOString(),
      }
    } catch (error) {
      return this.handleError(error, 'Failed to fetch features')
    }
  }

  /**
   * Get features by category
   */
  async getFeaturesByCategory(category: string): Promise<ApiResponse<Feature[]>> {
    try {
      const categoryFeatures = features.filter((f) => f.category === category)
      return {
        success: true,
        data: categoryFeatures,
        timestamp: new Date().toISOString(),
      }
    } catch (error) {
      return this.handleError(error, 'Failed to fetch features by category')
    }
  }

  /**
   * Get a single feature
   */
  async getFeature(id: string): Promise<ApiResponse<Feature | null>> {
    try {
      const feature = features.find((f) => f.id === id)
      if (!feature) {
        return {
          success: false,
          error: 'Feature not found',
          statusCode: 404,
        }
      }
      return {
        success: true,
        data: feature,
        timestamp: new Date().toISOString(),
      }
    } catch (error) {
      return this.handleError(error, 'Failed to fetch feature')
    }
  }
}

export const featuresService = new FeaturesService()
