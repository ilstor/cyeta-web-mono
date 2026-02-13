import Image from 'next/image';
import type { ReactNode } from 'react';
import { Article } from '@/components/Article';

type ArticleWithImageProps = {
  imagePosition?: 'left' | 'right';
  imageFileName: string;
  imageAlt?: string;
  children: ReactNode;
};

export const ArticleWithImage = ({
  imagePosition = 'left',
  imageFileName,
  imageAlt = 'Article image',
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
    <Article left={image} right={text} />
  ) : (
    <Article left={text} right={image} />
  );
};
