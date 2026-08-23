import TitleSection from '@/app/_components/common/TitleSection';
import TextFade from '@/app/_components/motion/TextFade';
import { portfolioCopy } from '@/app/data/portfolio';
import PortfolioCard from './PortfolioCard';

export default function Portfolio() {
  const copy = portfolioCopy;

  return (
    <section className="bg-primary relative">
      {/* title */}
      <div className="px-base gap-x-base grid grid-cols-4 py-4 lg:grid-cols-12 lg:py-6">
        <div className="col-span-full col-start-3 lg:col-start-7">
          <TextFade direction="up">
            <TitleSection className="text-secondary type-3xl">
              Portfolio
            </TitleSection>
          </TextFade>
        </div>
      </div>

      {/* cards */}
      <div className="relative col-span-full">
        {copy.map((current, index) => (
          <PortfolioCard
            key={current.id}
            card={current}
            isLast={copy.length === index + 1}
          />
        ))}
      </div>
    </section>
  );
}
