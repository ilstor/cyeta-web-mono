import { Divider } from '@/components/Divider';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Intro } from '@/components/Intro';
import { MegaDivider } from '@/components/MegaDivider';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Article } from '@/components/Article';
import { Projects } from '@/components/Projects';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 grid place-items-center">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <Intro />
              <MegaDivider />
              <WhyChooseUs />
              <Divider />
              <Projects />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
