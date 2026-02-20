'use client';
import { Divider } from '@/components/Divider';
import { Intro } from '@/components/Intro';
import { MegaDivider } from '@/components/MegaDivider';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { LatestProjects } from '@/components/LatestProjects';
import { Container } from '@/components/Container';
import { loadProjects } from '@/sanity/load-projects';
import { useEffect, useState } from 'react';
import { Project } from '@/types/sanity.types';

export default function Home() {
  console.log('Reading staic props');
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadProjects().then((loadedProjects) => {
      console.log('Loaded projects', loadedProjects);
      setProjects(loadedProjects);
    });
  }, []);

  console.log('Static props read', projects);
  return (
    <main className="flex-1 grid place-items-center">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <div className="w-full">
            <Container>
              <Intro />
            </Container>
            <MegaDivider />
            <Container>
              <WhyChooseUs />
            </Container>
            <Divider />
            <Container>
              <LatestProjects projects={projects} />
            </Container>
          </div>
        </div>
      </div>
    </main>
  );
}
