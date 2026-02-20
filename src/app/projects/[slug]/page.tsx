import { loadProjects } from '@/sanity/load-projects';
import { ProjectPageClient } from '@/components/ProjectPageClient';

export async function generateStaticParams() {
  const projects = await loadProjects();
  return projects.map((p) => ({ slug: p.slug.current }));
}

export default function ProjectPage() {
  return <ProjectPageClient />;
}
