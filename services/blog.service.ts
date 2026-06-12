import { BlogPost } from '@/lib/types'
import { blogPosts } from '@/lib/data/blog'
import { BaseService, ApiResponse } from './base.service'

class BlogService extends BaseService {
  /**
   * Fetch all blog posts
   */
  async getAllPosts(): Promise<ApiResponse<BlogPost[]>> {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      return {
        success: true,
        data: blogPosts,
        timestamp: new Date().toISOString(),
      }
    } catch (error) {
      return this.handleError(error, 'Failed to fetch blog posts')
    }
  }

  /**
   * Get a single blog post by slug
   */
  async getPostBySlug(slug: string): Promise<ApiResponse<BlogPost | null>> {
    try {
      const post = blogPosts.find((p) => p.slug === slug)

      if (!post) {
        return {
          success: false,
          error: 'Blog post not found',
          statusCode: 404,
        }
      }

      return {
        success: true,
        data: post,
        timestamp: new Date().toISOString(),
      }
    } catch (error) {
      return this.handleError(error, 'Failed to fetch blog post')
    }
  }

  /**
   * Search blog posts by title or content
   */
  async searchPosts(query: string): Promise<ApiResponse<BlogPost[]>> {
    try {
      const lowerQuery = query.toLowerCase()
      const results = blogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerQuery) ||
          post.excerpt.toLowerCase().includes(lowerQuery) ||
          post.content.toLowerCase().includes(lowerQuery),
      )

      return {
        success: true,
        data: results,
        timestamp: new Date().toISOString(),
      }
    } catch (error) {
      return this.handleError(error, 'Failed to search blog posts')
    }
  }

  /**
   * Get posts by category
   */
  async getPostsByCategory(category: string): Promise<ApiResponse<BlogPost[]>> {
    try {
      const posts = blogPosts.filter((p) => p.category === category)

      return {
        success: true,
        data: posts,
        timestamp: new Date().toISOString(),
      }
    } catch (error) {
      return this.handleError(error, 'Failed to fetch posts by category')
    }
  }

  /**
   * Get featured/latest posts
   */
  async getFeaturedPosts(limit = 3): Promise<ApiResponse<BlogPost[]>> {
    try {
      const featured = blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit)

      return {
        success: true,
        data: featured,
        timestamp: new Date().toISOString(),
      }
    } catch (error) {
      return this.handleError(error, 'Failed to fetch featured posts')
    }
  }
}

export const blogService = new BlogService()
