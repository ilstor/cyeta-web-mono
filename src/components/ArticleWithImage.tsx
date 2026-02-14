import Image from 'next/image';
import type { ReactNode } from 'react';
import { TwoPaneWrapper } from '@/components/TwoPaneWrapper';

type ArticleWithImageProps = {
  imagePosition?: 'left' | 'right';
  imageFileName: string;
  imageAlt?: string;
  children: ReactNode;
};

export const ArticleWithImage = ({
  imagePosition = 'left',
  imageFileName,
  imageAlt = 'ArticleWithImage image',
  children,
}: ArticleWithImageProps) => {
  const imageSrc = imageFileName.startsWith('/')
    ? imageFileName
    : `/images/${imageFileName}`;

  const image = (
    <div className="relative w-full h-full overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
    </div>
  );

  const text = <div className="w-full">{children}</div>;

  return imagePosition === 'left' ? (
    <TwoPaneWrapper left={image} right={text} />
  ) : (
    <TwoPaneWrapper left={text} right={image} />
  );
};
