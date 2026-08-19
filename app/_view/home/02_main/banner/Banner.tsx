import bannerAllan from '@/app/images/banner-allan-coding.svg';
import Image from 'next/image';

export default function Banner() {
  return (
    <div
      className="bg-primary relative overflow-hidden py-4 lg:py-6"
      aria-hidden="true"
    >
      <Image src={bannerAllan} alt="Banner" width={1689} height={328} />
    </div>
  );
}
