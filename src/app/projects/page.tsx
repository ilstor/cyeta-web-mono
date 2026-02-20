'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Paragraph } from '@/components/Paragraph';
import { loadProjects } from '@/sanity/load-projects';
import { urlFor } from '@/sanity/url-for';
import { useEffect, useState } from 'react';
import { Project } from '@/types/sanity.types';

export default function ProjectsPortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadProjects().then((loadedProjects) => {
      setProjects(loadedProjects);
    });
  }, []);

  return (
    <main className="flex-1">
      <Container className="py-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          Projects
        </h1>

        <Paragraph className="mt-3 max-w-2xl">
          On this page you can get acquainted with all the projects of our
          organization
        </Paragraph>

        <section className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {projects.map((project) => {
              const href = `/projects/${project.slug.current}`;
              const imageSrc = urlFor(project.image)?.url() || '';
              return (
                <article key={project.slug.current} className="w-full">
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                    <Image
                      src={imageSrc}
                      alt={project.imageAlt ?? project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    <Link
                      href={href}
                      className="block w-full hover:opacity-95 transition-opacity"
                      aria-label={`Open project: ${project.title}`}
                    >
                      {project.title}
                    </Link>
                  </h3>
                </article>
              );
            })}
          </div>
        </section>
      </Container>
    </main>
  );
}
