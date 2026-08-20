import { ImageProps } from '@/app/data/portfolio';
import Image from 'next/image';

interface Props {
  card: {
    id: number;
    title: string;
    description: string;
    stack: string[];
    image: ImageProps;
  };
}

export default function PortfolioCard({ card }: Props) {
  const {
    title,
    description,
    stack,
    image: { src, alt, width, height },
  } = card;

  return (
    <div className="px-base sticky top-0 min-h-dvh pt-12">
      <div className="z-1 absolute inset-0">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="bg-secondary/70 absolute inset-0"></div>
      </div>

      <div className="max-w-component z-2 relative flex flex-col gap-4 lg:gap-6">
        <div className="gap-x-base grid grid-cols-4 gap-y-2 lg:grid-cols-12 lg:gap-y-3">
          <h3 className="type-xl col-span-full">{title}</h3>
          <p className="type-lg col-span-full max-w-[64ch] lg:col-end-8">
            {description}
          </p>
        </div>

        <div className="gap-x-base grid grid-cols-4 lg:grid-cols-12">
          <div className="col-span-full flex flex-wrap gap-x-1 gap-y-2 lg:col-end-8 lg:gap-x-2 lg:gap-y-3">
            {stack.map((current, index) => (
              <span
                key={index}
                className="type-sm border-primary whitespace-nowrap rounded-full border px-2"
              >
                {current}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
