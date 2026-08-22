import TextFade from '@/app/_components/motion/TextFade';
import DownloadSvg from '@/app/_components/svgs/DownloadSvg';
import React from 'react';

interface Props {
  copy: {
    title: string;
    href: string | undefined;
    hours: number;
    isCompleted: boolean;
  }[];
  isLeft?: true;
}

export default function CertificatesList({ copy, isLeft }: Props) {
  return (
    <ul
      className={`flex flex-col gap-y-3 lg:gap-y-4 ${!isLeft && 'items-end'}`}
    >
      {copy.map(({ hours, title, href, isCompleted }, index) => (
        <li key={index}>
          <a
            href={href}
            className={`${!isCompleted && 'pointer-events-none opacity-50'}`}
            aria-label={`Baixar certificado de ${title}`}
            download={isCompleted && `Certificado ${title}.pdf`}
          >
            <TextFade
              direction="up"
              className={`flex max-w-fit items-start gap-x-1 lg:gap-x-2 ${!isLeft && 'justify-end'}`}
            >
              {isLeft ? (
                // left
                <React.Fragment>
                  <span className="text-secondary type-lg">
                    {hours}h, {title}
                  </span>
                  <DownloadSvg />
                </React.Fragment>
              ) : (
                // right
                <React.Fragment>
                  <DownloadSvg />
                  <span className="text-secondary type-lg">
                    {title}, {hours}h
                  </span>
                </React.Fragment>
              )}
            </TextFade>
          </a>
        </li>
      ))}
    </ul>
  );
}
