import { loadProject, loadProjects } from '@/sanity/load-projects';
import { urlFor } from '@/sanity/url-for';
import { CommonProjectPage } from '@/components/CommonProjectPage';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await loadProjects();
  return projects.map((p) => ({ slug: p.slug.current }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = await loadProject(slug);
  console.log('before', project);
  // if (!project) notFound();

  const imageSrc = urlFor(project.image)?.url() || '';

  return (
    <CommonProjectPage
      loading={false}
      project={project}
      heroImageSrc={imageSrc}
    />
  );
}
