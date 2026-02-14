// src/components/Projects.tsx
import Image from 'next/image';
import { Article } from '@/components/Article';
import { Divider } from '@/components/Divider';

type Project = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  location?: string;
};

type ProjectsProps = {
  projects?: Project[];
};

export const Projects = ({
  projects = [
    {
      title: 'Residential Deck Construction',
      description:
        'Short project description goes here. Replace this with the final copy from the design/content.',
      imageSrc: '/images/project-1.jpg',
      imageAlt: 'Residential deck construction',
      location: 'Auckland',
    },
    {
      title: 'Luxury New Build Home in Kumeu, Auckland',
      description:
        'Short project description goes here. Replace this with the final copy from the design/content.',
      imageSrc: '/images/project-2.jpg',
      imageAlt: 'Luxury new build home',
      location: 'Kumeu, Auckland',
    },
    {
      title: 'Renovation & Extension',
      description:
        'Short project description goes here. Replace this with the final copy from the design/content.',
      imageSrc: '/images/project-3.jpg',
      imageAlt: 'Renovation project',
      location: 'Auckland',
    },
  ],
}: ProjectsProps) => {
  return (
    <Article title="Latest projects">
      <div className="flex flex-col">
        {projects.map((project, idx) => (
          <div key={`${project.title}-${idx}`}>
            {idx > 0 ? <Divider /> : null}
            <ProjectRow project={project} />
          </div>
        ))}
      </div>
    </Article>
  );
};

function ProjectRow({ project }: { project: Project }) {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt ?? project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-3">
          {project.location ? (
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              {project.location}
            </p>
          ) : null}

          <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {project.title}
          </h3>

          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {project.description}
          </p>

          <div className="pt-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:opacity-80"
            >
              View more
              <span aria-hidden className="text-base leading-none">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
