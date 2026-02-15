import Image from 'next/image';
import { notFound } from 'next/navigation';
import { allProjects } from '@/data/projects';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
        {project.title}
      </h1>

      {project.location ? (
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
          {project.location}
        </p>
      ) : null}

      <div className="mt-6 relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt ?? project.title}
          fill
          className="object-cover"
        />
      </div>

      <p className="mt-6 text-sm leading-6 text-zinc-600 dark:text-zinc-300 max-w-3xl">
        {project.description}
      </p>
    </main>
  );
}
