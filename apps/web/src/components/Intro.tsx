import Image from 'next/image';
import { TwoPaneWrapper } from '@/components/TwoPaneWrapper';
import { Quote } from '@/components/Quote';
import { Paragraph } from '@/components/Paragraph';

export const Intro = () => {
  return (
    <TwoPaneWrapper
      left={
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Your trusted building partner
          </h1>

          <Paragraph>
            At Cyeta Limited, our commitment to excellence is evident in our
            track record of success. With a portfolio boasting over 30 completed
            projects, we have a proven history of turning our clients’ visions
            into reality.
          </Paragraph>

          <div className="relative w-full h-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
            <Image
              src={'/images/index-hero.2e391830a0091286404a.jpg'}
              alt={'houses image'}
              fill
              className="object-cover"
            />
          </div>

          <Paragraph>
            From custom homes and stunning renovations to innovative commercial
            spaces, each project is a testament to our dedication to quality
            craftsmanship and meticulous attention to detail. We take pride in
            the trust our clients place in us, and we look forward to adding
            your project to our growing list of successes.
          </Paragraph>
        </div>
      }
      right={
        <div className="w-full">
          <Quote />
        </div>
      }
    />
  );
};
