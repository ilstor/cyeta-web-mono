import type { ReactNode } from 'react';

type TwoPaneWrapperProps = {
  left: ReactNode;
  right: ReactNode;
};

export const TwoPaneWrapper = ({ left, right }: TwoPaneWrapperProps) => (
  <section className="w-full bg-white/60 dark:bg-white/10 py-6 flex-col px-6">
    <div className="w-full min-h-64 bg-white/60 dark:bg-white/10 flex">
      <div className="flex flex-1 items-stretch gap-6">
        <div className="flex flex-1 items-stretch gap-6">
          <div className="w-1/2 min-w-0 flex">{left}</div>
          <div className="w-1/2 min-w-0 flex">{right}</div>
        </div>
      </div>
    </div>
  </section>
);
