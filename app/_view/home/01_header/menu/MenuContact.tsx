import { HoverUnderline } from '@/app/_components/common/HoverUnderline';
import TextFade from '@/app/_components/motion/TextFade';
import { navContactCopy, navSocialCopy } from '@/app/data/nav';
import { motion } from 'motion/react';

export default function MenuContact() {
  const contactCopy = navContactCopy;
  const socialCopy = navSocialCopy;

  return (
    <div className="flex flex-col gap-y-4 lg:gap-y-6">
      <TextFade direction="down" delay={0.2} className="flex flex-col gap-y-1">
        {contactCopy.map(({ name, href }, index) => (
          <motion.a
            initial="initial"
            whileHover="hover"
            whileFocus="hover"
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="type-xs text-primary relative"
          >
            <HoverUnderline className="h-px" />
            {name}
          </motion.a>
        ))}
      </TextFade>

      <TextFade
        direction="down"
        delay={0.3}
        className="flex gap-x-2 lg:gap-x-4"
      >
        {socialCopy.map(({ icon: Icon, href }, index) => (
          <motion.a
            key={index}
            initial="initial"
            whileHover="hover"
            whileFocus="hover"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block"
          >
            <HoverUnderline className="h-px" />
            <Icon className="w-6 lg:w-8" />
          </motion.a>
        ))}
      </TextFade>
    </div>
  );
}
