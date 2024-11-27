import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/*.json$',
          '/*?*'  // Blockera URL:er med query parametrar
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      }
    ],
    sitemap: 'https://bergkulla.ax/sitemap.xml',
    host: 'https://bergkulla.ax'
  }
} 
