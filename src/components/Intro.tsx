import Image from 'next/image';
import { TwoPaneWrapper } from '@/components/TwoPaneWrapper';
import { Quote } from '@/components/Quote';

export const Intro = () => {
  return (
    <TwoPaneWrapper
      left={
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Your trusted building partner
          </h1>

          <div className="relative w-full h-full overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800">
            <Image
              src={'/images/index-hero.2e391830a0091286404a.jpg'}
              alt={'houses image'}
              fill
              className="object-cover"
            />
          </div>
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
