import Image from 'next/image';
import { TwoPaneWrapper } from '@/components/TwoPaneWrapper';
import { Article } from '@/components/Article';

type WhyChooseUsProps = {
  imageLeftFileName?: string;
  imageRightFileName?: string;
  rightIntroText?: string;
};

const defaultRightIntroText =
  'Experience the difference when you choose our services, where we place a premium on speed and time efficiency. We recognize that our customers are eager to witness the transformative results and invite friends and family to celebrate their upgraded homes. That’s why we prioritize efficiency at every step of the project, ensuring you can enjoy the results sooner and share the joy of your home’s transformation with loved ones.';

export const WhyChooseUs = ({
  imageLeftFileName = '/images/why-choose-us-1.5bd329528e2e3f7e7e13.jpg',
  imageRightFileName = '/images/why-choose-us-2.c6d2be20cb4fb744b039.jpg',
  rightIntroText = defaultRightIntroText,
}: WhyChooseUsProps) => {
  const left = (
    <div className="w-full">
      <div className="flex flex-col gap-6">
        <WhyItem
          title="Experience"
          text="With 5+ years in the industry in New Zealand and more than 10+ years overseas, we have a wealth of experience that ensures your project is in capable hands."
        />
        <WhyItem
          title="Skilled Team"
          text="Our team consists of highly skilled professionals who take pride and responsibility in their work. We have the expertise to deliver exceptional results."
        />
        <WhyItem
          title="Quality Craftsmanship"
          text="We believe in quality above all else. From the materials we use to the final finishing touches, our commitment towards your needs are unwavering."
        />
        <WhyItem
          title="Customer-Centric Approach"
          text="Your satisfaction is our priority. We work closely with you at every step, listening to your ideas and preferences, to ensure your vision becomes a reality."
        />
      </div>
    </div>
  );

  const right = (
    <div className="w-full">
      <div className="mb-4">
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          {rightIntroText}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <ImageCard fileName={imageLeftFileName} alt="Why choose us image 1" />
        <ImageCard fileName={imageRightFileName} alt="Why choose us image 2" />
      </div>
    </div>
  );

  return (
    <Article title="Why choose us">
      <TwoPaneWrapper left={left} right={right} />
    </Article>
  );
};

const WhyItem = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h3>
      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        {text}
      </p>
    </div>
  );
};

const ImageCard = ({ fileName, alt }: { fileName: string; alt: string }) => {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
      <Image src={fileName} alt={alt} fill className="object-cover" />
    </div>
  );
};
