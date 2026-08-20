import TextBody from '@/app/_components/common/TextBody';
import { ImageProps } from '@/app/data/portfolio';
import Image from 'next/image';

interface Props {
  card: {
    id: number;
    title: string;
    href: string;
    description: string;
    stack: string[];
    image: ImageProps;
  };
}

export default function PortfolioCard({ card }: Props) {
  const {
    title,
    href,
    description,
    stack,
    image: { src, alt, width, height },
  } = card;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-base sticky top-0 block min-h-dvh pt-12"
    >
      {/* background */}
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

      {/* wrapper max-w */}
      <div className="max-w-component z-2 relative flex flex-col gap-y-4 lg:gap-y-6">
        {/* card title/description */}
        <div className="gap-x-base grid grid-cols-4 gap-y-2 lg:grid-cols-12 lg:gap-y-3">
          <div className="col-span-full">
            <h3 className="type-xl text-primary">{title}</h3>
          </div>
          <div className="col-span-full lg:col-end-8">
            <TextBody className="text-primary">{description}</TextBody>
          </div>
        </div>

        {/* stacks */}
        <div className="gap-x-base grid grid-cols-4 lg:grid-cols-12">
          <div className="col-span-full flex flex-wrap gap-x-1 gap-y-2 lg:col-end-8 lg:gap-x-2 lg:gap-y-3">
            {stack.map((current, index) => (
              <span
                key={index}
                className="type-sm border-primary text-primary whitespace-nowrap rounded-full border px-2 py-0.5"
              >
                {current}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
