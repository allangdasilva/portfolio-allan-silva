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
        <li key={index} className="w-fit">
          <a
            href={href}
            className={`text-secondary type-lg flex items-start gap-x-1 lg:gap-x-2 ${!isLeft && 'justify-end'} ${!isCompleted && 'pointer-events-none opacity-50'}`}
            aria-label={`Baixar certificado de ${title}`}
            download={isCompleted && `Certificado-${title}.pdf`}
          >
            {isLeft ? (
              <React.Fragment>
                {hours}h, {title}
                <DownloadSvg />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <DownloadSvg />
                {title}, {hours}h
              </React.Fragment>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
