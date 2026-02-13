import type { ReactNode } from 'react';

type ArticleProps = {
  left: ReactNode;
  right: ReactNode;
};

export const Article = ({ left, right }: ArticleProps) => (
  <section className="w-full min-h-128 rounded-xl bg-white/60 dark:bg-white/10 border border-black/10 dark:border-white/15 p-6 flex">
    <div className="flex flex-1 items-stretch gap-6">
      <div className="w-1/2 min-w-0 flex">{left}</div>
      <div className="w-1/2 min-w-0 flex">{right}</div>
    </div>
  </section>
);
