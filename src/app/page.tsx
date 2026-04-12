import { Divider } from '@/components/Divider';
import { Intro } from '@/components/Intro';
import { MegaDivider } from '@/components/MegaDivider';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { LatestProjects } from '@/components/LatestProjects';
import { Container } from '@/components/Container';
import { loadProjects } from '@/sanity/load-projects';

export default async function Home() {
  const projects = await loadProjects();

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
