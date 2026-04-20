import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return [
    { url: `${base}/`, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/homepage`, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/careers`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: 'monthly' },
  ];
}