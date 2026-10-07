import type { ReactNode } from 'react';

type Article = {
  title?: string;
  children: ReactNode;
};

export const Article = ({ title, children }: Article) => (
  <div>
    {title ? (
      <div>
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {title}
        </h2>
      </div>
    ) : null}
    <div>{children}</div>
  </div>
);
