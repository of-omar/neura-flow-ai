import { PricingPlan } from '@/lib/types'
import { pricingPlans } from '@/lib/data/pricing'
import { BaseService, ApiResponse } from './base.service'

class PricingService extends BaseService {
  /**
   * Fetch all pricing plans
   */
  async getAllPlans(): Promise<ApiResponse<PricingPlan[]>> {
    try {
      await new Promise((resolve) => setTimeout(resolve, 300))
      return {
        success: true,
        data: pricingPlans,
        timestamp: new Date().toISOString(),
      }
    } catch (error) {
      return this.handleError(error, 'Failed to fetch pricing plans')
    }
  }

  /**
   * Get a specific pricing plan
   */
  async getPlan(id: string): Promise<ApiResponse<PricingPlan | null>> {
    try {
      const plan = pricingPlans.find((p) => p.id === id)
      if (!plan) {
        return {
          success: false,
          error: 'Pricing plan not found',
          statusCode: 404,
        }
      }
      return {
        success: true,
        data: plan,
        timestamp: new Date().toISOString(),
      }
    } catch (error) {
      return this.handleError(error, 'Failed to fetch pricing plan')
    }
  }

  /**
   * Compare features between plans
   */
  async compareFeatures(): Promise<ApiResponse<Record<string, unknown>>> {
    try {
      const comparison = pricingPlans.reduce(
        (acc, plan) => {
          acc[plan.name] = plan.features
          return acc
        },
        {} as Record<string, unknown>,
      )

      return {
        success: true,
        data: comparison,
        timestamp: new Date().toISOString(),
      }
    } catch (error) {
      return this.handleError(error, 'Failed to compare features')
    }
  }
}

export const pricingService = new PricingService()
