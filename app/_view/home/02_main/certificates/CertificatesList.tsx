import DownloadSvg from '@/app/_components/svgs/DownloadSvg';
import React from 'react';

interface Props {
  copy: {
    title: string;
    hours: number;
    isCompleted: boolean;
  }[];
  isLeft?: true;
}

export default function CertificatesList({ copy, isLeft }: Props) {
  return (
    <ul className="flex flex-col gap-y-3 lg:gap-y-4">
      {copy.map((current, index) => (
        <li key={index}>
          <a
            href="#"
            className={`text-secondary type-lg flex items-start gap-x-1 lg:gap-x-2 ${!isLeft && 'justify-end'}`}
          >
            {isLeft ? (
              <React.Fragment>
                {current.hours}h, {current.title}
                <DownloadSvg />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <DownloadSvg />
                {current.title}, {current.hours}h
              </React.Fragment>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
