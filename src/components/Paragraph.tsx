import type { ReactNode } from 'react';

type ParagraphProps = {
  children: ReactNode;
  className?: string;
  muted?: boolean;
};

export const Paragraph = ({
  children,
  className = '',
  muted = true,
}: ParagraphProps) => {
  return (
    <p
      className={[
        'text-lg leading-6',
        muted
          ? 'text-zinc-600 dark:text-zinc-300'
          : 'text-zinc-900 dark:text-zinc-50',
        'mt-4 first:mt-0',
        className,
      ].join(' ')}
    >
      {children}
    </p>
  );
};
