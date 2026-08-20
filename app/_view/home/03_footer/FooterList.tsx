import ExternalLinkSvg from '@/app/_components/svgs/ExternalLinkSvg';

interface Props {
  copy: {
    href: string;
    title: string;
    icon?: () => React.JSX.Element;
  }[];
}

export default function FooterList({ copy }: Props) {
  return (
    <ul className="flex flex-col items-end gap-y-3 lg:gap-y-4">
      {copy.map(({ href, title, icon: Icon }, index) => (
        <li key={index}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-start justify-end gap-x-1 lg:gap-x-2"
          >
            <span className="type-lg text-primary">{title}</span>
            {Icon ? <Icon /> : <ExternalLinkSvg />}
          </a>
        </li>
      ))}
    </ul>
  );
}
