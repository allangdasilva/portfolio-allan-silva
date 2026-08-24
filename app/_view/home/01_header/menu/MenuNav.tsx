import TextFade from '@/app/_components/motion/TextFade';
import { navHashCopy } from '@/app/data/nav';
import * as Dialog from '@radix-ui/react-dialog';

export default function MenuNav() {
  const copy = navHashCopy;

  return (
    <nav>
      <ul className="flex flex-col gap-y-4 lg:gap-y-6">
        {copy.map(({ name, href }, index) => (
          <li key={index}>
            <TextFade direction="up" delay={0.2 + index / 10}>
              <Dialog.Close asChild>
                <a href={href} className="type-2xl text-primary uppercase">
                  {name}
                </a>
              </Dialog.Close>
            </TextFade>
          </li>
        ))}
      </ul>
    </nav>
  );
}
