import TextBody from '@/app/_components/common/TextBody';
import TitleSection from '@/app/_components/common/TitleSection';
import { aboutMeCopy } from '@/app/data/about-me';

export default function AboutMe() {
  const copy = aboutMeCopy;

  return (
    <section className="bg-primary px-base lg:py-31 relative py-24">
      {/* wrapper max-w */}
      <div className="max-w-component gap-x-base grid grid-cols-4 gap-y-3 lg:grid-cols-12 lg:gap-y-0">
        {/* title */}
        <div className="col-span-full col-start-3 lg:col-start-8 lg:justify-self-end">
          <TitleSection className="type-base text-secondary">
            Sobre mim
          </TitleSection>
        </div>

        {/* description */}
        <div className="col-span-full col-start-1 flex flex-col gap-y-3 lg:col-end-8 lg:row-start-1 lg:gap-y-4">
          {copy.map((current, index) => (
            <TextBody key={index} className="text-secondary">
              {current}
            </TextBody>
          ))}
        </div>
      </div>
    </section>
  );
}
