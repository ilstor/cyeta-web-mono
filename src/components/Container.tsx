import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-350 py-6 px-6 sm:px-12 ${className}`}>
      {children}
    </div>
  );
};
