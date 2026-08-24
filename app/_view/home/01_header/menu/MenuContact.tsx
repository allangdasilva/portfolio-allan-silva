import TextFade from '@/app/_components/motion/TextFade';
import { navContactCopy, navSocialCopy } from '@/app/data/nav';

export default function MenuContact() {
  const contactCopy = navContactCopy;
  const socialCopy = navSocialCopy;

  return (
    <div className="flex flex-col gap-y-4 lg:gap-y-6">
      <TextFade direction="down" delay={0.2} className="flex flex-col gap-y-1">
        {contactCopy.map(({ name, href }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="type-xs text-primary"
          >
            {name}
          </a>
        ))}
      </TextFade>

      <TextFade
        direction="down"
        delay={0.3}
        className="flex gap-x-2 lg:gap-x-4"
      >
        {socialCopy.map(({ icon: Icon, href }, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">
            <Icon className="w-6 lg:w-8" />
          </a>
        ))}
      </TextFade>
    </div>
  );
}
