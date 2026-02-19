import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/components/Article';
import { Divider } from '@/components/Divider';
import { TwoPaneWrapper } from '@/components/TwoPaneWrapper';
import { Project } from '@/types/sanity.types';
import { Paragraph } from '@/components/Paragraph';
import { urlFor } from '@/sanity/url-for';

type ProjectsProps = {
  projects: Project[];
};

export const LatestProjects = ({ projects }: ProjectsProps) => {
  return (
    <Article title="Latest projects">
      <div className="flex flex-col">
        {projects.map((project, idx) => (
          <div key={project.slug.current}>
            {idx > 0 ? <Divider /> : null}
            <ProjectRow project={project} flip={idx % 2 === 1} />
          </div>
        ))}
      </div>
    </Article>
  );
};

const ProjectRow = ({ project, flip }: { project: Project; flip: boolean }) => {
  const imageSrc = urlFor(project.image)?.url() || '';
  const image = (
    <div className="relative w-full h-full min-h-64 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
      <Image
        src={imageSrc}
        alt={project.imageAlt ?? project.title}
        fill
        className="object-cover"
      />
    </div>
  );

  const content = (
    <div className="w-full flex flex-col gap-3">
      {project.location ? <Paragraph>{project.location}</Paragraph> : null}

      <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {project.title}
      </h3>

      <Paragraph>{project.description}</Paragraph>

      <div className="pt-2">
        <Link
          href={`/projects/${project.slug.current}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:opacity-80"
        >
          View more
          <span aria-hidden className="text-base leading-none">
            →
          </span>
        </Link>
      </div>
    </div>
  );

  return (
    <section className="py-8">
      <TwoPaneWrapper left={image} right={content} flip={flip} />
    </section>
  );
};
