import { HoverUnderline } from '@/app/_components/common/HoverUnderline';
import TextFade from '@/app/_components/motion/TextFade';
import { navHashCopy } from '@/app/_data/nav';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'motion/react';

export default function MenuNav() {
  const copy = navHashCopy;

  return (
    <nav>
      <TextFade
        direction="down"
        staggerChildren={0.1}
        className="flex flex-col gap-y-4 lg:gap-y-6"
      >
        {copy.map(({ name, href }, index) => (
          <div key={index}>
            <Dialog.Close asChild>
              <motion.a
                initial="initial"
                whileHover="hover"
                whileFocus="hover"
                href={href}
                className="type-2xl text-primary relative uppercase"
              >
                <HoverUnderline />
                {name}
              </motion.a>
            </Dialog.Close>
          </div>
        ))}
      </TextFade>
    </nav>
  );
}
