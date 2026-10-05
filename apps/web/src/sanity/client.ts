import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: '7vus9ews',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});
