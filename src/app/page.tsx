import { Divider } from '@/components/Divider';
import { Intro } from '@/components/Intro';
import { MegaDivider } from '@/components/MegaDivider';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { LatestProjects } from '@/components/LatestProjects';

export default function Home() {
  return (
    <main className="flex-1 grid place-items-center">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <div className="w-full">
            <Intro />
            <MegaDivider />
            <WhyChooseUs />
            <Divider />
            <LatestProjects />
          </div>
        </div>
      </div>
    </main>
  );
}
