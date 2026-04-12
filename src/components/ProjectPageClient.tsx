'use client';

import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { loadProject } from '@/sanity/load-projects';
import { urlFor } from '@/sanity/url-for';
import type { Project } from '@/types/sanity.types';
import { CommonProjectPage } from '@/components/CommonProjectPage';

export const ProjectPageClient = () => {
  const params = useParams<{ slug: string }>();
  const slug = useMemo(() => params?.slug, [params]);

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (!slug) return;

      setLoading(true);
      try {
        const loaded = await loadProject(slug);
        if (!cancelled) setProject(loaded ?? null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const heroImageSrc = project?.image ? urlFor(project.image)?.url() || '' : '';

  return (
    <CommonProjectPage
      loading={loading}
      project={project}
      heroImageSrc={heroImageSrc}
    />
  );
};
