import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Paragraph } from '@/components/Paragraph';
import { allProjects } from '@/data/projects';

export default function ProjectsPortfolioPage() {
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
            {allProjects.map((project) => (
              <article key={project.slug} className="w-full">
                <Link
                  href={`/projects/${project.slug}`}
                  className="block w-full"
                  aria-label={`Open project: ${project.title}`}
                >
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt ?? project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>

                <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:opacity-80 transition-opacity"
                  >
                    {project.title}
                  </Link>
                </h3>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
