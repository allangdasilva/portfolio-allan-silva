import TextFade from '@/app/_components/motion/TextFade';
import { navContactCopy, navSocialCopy } from '@/app/data/nav';

export default function MenuContact() {
  const contactCopy = navContactCopy;
  const socialCopy = navSocialCopy;

  return (
    <div className="flex flex-col gap-y-4 lg:gap-y-6">
      <div className="flex flex-col gap-y-1">
        {contactCopy.map(({ name, href }, index) => (
          <TextFade key={index} direction="up" delay={0.5 + index / 10}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="type-xs text-primary"
            >
              {name}
            </a>
          </TextFade>
        ))}
      </div>

      <ul className="flex gap-x-2 lg:gap-x-4">
        {socialCopy.map(({ icon: Icon, href }, index) => (
          <li key={index}>
            <TextFade direction="up" delay={0.7 + index / 10}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="w-6 lg:w-8" />
              </a>
            </TextFade>
          </li>
        ))}
      </ul>
    </div>
  );
}
