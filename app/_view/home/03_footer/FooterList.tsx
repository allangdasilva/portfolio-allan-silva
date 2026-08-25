import { HoverUnderline } from '@/app/_components/common/HoverUnderline';
import ExternalLinkSvg from '@/app/_components/svgs/ExternalLinkSvg';
import { motion } from 'motion/react';
import React, { SVGProps } from 'react';

interface Props {
  copy: {
    href: string;
    title: string;
    icon?: ({ ...props }: SVGProps<SVGSVGElement>) => React.JSX.Element;
  }[];
}

export default function FooterList({ copy }: Props) {
  return (
    <ul className="flex flex-col items-end gap-y-3 lg:gap-y-4">
      {copy.map(({ href, title, icon: Icon }, index) => (
        <li key={index}>
          <motion.a
            href={href}
            initial="initial"
            whileHover="hover"
            whileFocus="hover"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-start justify-end gap-x-1 lg:gap-x-2"
          >
            <HoverUnderline className="-bottom-1 h-px" />
            <span className="type-lg text-primary">{title}</span>
            {Icon ? <Icon className="w-2 lg:w-3" /> : <ExternalLinkSvg />}
          </motion.a>
        </li>
      ))}
    </ul>
  );
}
