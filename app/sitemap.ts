import { MetadataRoute } from 'next';
import { PROJECTS_DATA } from '@/lib/data/projects';
import { SERVICES_DATA } from '@/lib/data/services';
import { AREAS_WE_SERVE } from '@/lib/data/areas';

/**
 * PRODUCTION SITEMAP GENERATOR
 * Generates a comprehensive sitemap for Singhs Interiors.
 * Includes static landing pages and dynamic deep-links for projects, services, and locations.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elitecontractors.com';

  // 1. Static Base Routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/enquiry',
    '/get-quote',
    '/areas',
    '/testimonials'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Dynamic Project Routes (High Priority for Portfolio)
  const projectRoutes = PROJECTS_DATA.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 3. Dynamic Service Routes (Critical for Commercial Intent)
  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // 4. Dynamic Area Landing Pages (Critical for Local Mumbai SEO)
  const areaRoutes = AREAS_WE_SERVE.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...areaRoutes
  ];
}
