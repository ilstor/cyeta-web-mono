import type { ReactNode } from 'react';

type TwoPaneWrapperProps = {
  left: ReactNode;
  right: ReactNode;
  flip?: boolean;
};

export const TwoPaneWrapper = ({
  left,
  right,
  flip = false,
}: TwoPaneWrapperProps) => {
  return (
    <section className="w-full bg-white/60 dark:bg-white/10">
      <div className="w-full min-h-64 bg-white/60 dark:bg-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
          <div className={`min-w-0 ${flip ? 'sm:order-2' : 'sm:order-1'}`}>
            {left}
          </div>
          <div className={`min-w-0 ${flip ? 'sm:order-1' : 'sm:order-2'}`}>
            {right}
          </div>
        </div>
      </div>
    </section>
  );
};
