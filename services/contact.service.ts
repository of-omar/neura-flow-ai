import { ContactFormData } from '@/lib/types'
import { BaseService, ApiResponse } from './base.service'

interface ContactSubmissionResponse {
  id: string
  message: string
  timestamp: string
}

class ContactService extends BaseService {
  /**
   * Submit a contact form
   */
  async submitContactForm(data: ContactFormData): Promise<ApiResponse<ContactSubmissionResponse>> {
    try {
      // Validate form data
      if (!data.name || !data.email || !data.message) {
        return {
          success: false,
          error: 'Missing required fields',
          statusCode: 400,
        }
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        return {
          success: false,
          error: 'Invalid email address',
          statusCode: 400,
        }
      }

      // Simulate API call and delay
      await new Promise((resolve) => setTimeout(resolve, 800))

      return {
        success: true,
        data: {
          id: `contact-${Date.now()}`,
          message: 'Your message has been sent successfully. We will get back to you soon!',
          timestamp: new Date().toISOString(),
        },
        timestamp: new Date().toISOString(),
      }
    } catch (error) {
      return this.handleError(error, 'Failed to submit contact form')
    }
  }

  /**
   * Subscribe to newsletter
   */
  async subscribeNewsletter(email: string): Promise<ApiResponse<{ message: string }>> {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return {
          success: false,
          error: 'Invalid email address',
          statusCode: 400,
        }
      }

      await new Promise((resolve) => setTimeout(resolve, 500))

      return {
        success: true,
        data: {
          message: 'Successfully subscribed to our newsletter!',
        },
        timestamp: new Date().toISOString(),
      }
    } catch (error) {
      return this.handleError(error, 'Failed to subscribe to newsletter')
    }
  }
}

export const contactService = new ContactService()
