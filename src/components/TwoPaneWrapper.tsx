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
  const first = flip ? right : left;
  const second = flip ? left : right;

  return (
    <section className="w-full bg-white/60 dark:bg-white/10 flex-col">
      <div className="w-full min-h-64 bg-white/60 dark:bg-white/10 flex">
        <div className="flex flex-1 items-stretch gap-6">
          <div className="flex flex-1 items-stretch gap-6">
            <div className="w-1/2 min-w-0 flex">{first}</div>
            <div className="w-1/2 min-w-0 flex">{second}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
