import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
import { Paragraph } from '@/components/Paragraph';
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
    <main className="flex-1">
      <Container className="py-10">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-300">
          <Link
            href="/projects"
            className="hover:opacity-80 transition-opacity"
          >
            ← Projects
          </Link>
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h1>

        <div className="mt-6 border-t border-b border-black/10 dark:border-white/15 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <MetaBlock label="Type" value={project.type} />
            <MetaBlock label="Year" value={String(project.year)} />
            <MetaBlock label="Description" value={project.description} />
          </div>
        </div>

        <div className="mt-8 relative w-full aspect-[16/9] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt ?? project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Project Overview
          </h2>
          <Paragraph className="mt-3 max-w-3xl">{project.overview}</Paragraph>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Key Features
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.keyFeatures.map((feature, idx) => (
              <article key={`${feature.title}-${idx}`} className="w-full">
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt ?? feature.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-zinc-600 dark:text-zinc-300">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-900 dark:text-zinc-50">
        {label}
      </div>
      <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        {value}
      </div>
    </div>
  );
}
