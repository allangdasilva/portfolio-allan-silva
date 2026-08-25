import menuBg from '@/app/_images/menu-bg.webp';
import Image from 'next/image';

export default function MenuBg() {
  return (
    <div
      aria-hidden="true"
      className="bg-tertiary absolute left-0 top-0 hidden h-full w-full max-w-[calc(50%+(var(--spacing-base)/2))] lg:block"
    >
      <Image
        src={menuBg}
        alt=" "
        className="h-full w-full object-cover"
        width={1919}
        height={1080}
      />
    </div>
  );
}
