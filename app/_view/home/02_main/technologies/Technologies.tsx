import TitleSection from '@/app/_components/common/TitleSection';
import TextFade from '@/app/_components/motion/TextFade';
import { technologiesCopy } from '@/app/data/technologies';

export default function Technologies() {
  const copy = technologiesCopy;

  return (
    <section id="technologies" className="bg-primary lg:py-31 relative py-24">
      {/* wrapper grid/px-base */}
      <div className="gap-x-base px-base grid grid-cols-4 gap-y-3 overflow-hidden lg:grid-cols-12 lg:gap-y-0">
        {/* title max-w/lg:row-start-1 */}
        <div className="max-w-component gap-x-base pointer-events-none z-10 col-span-full grid w-full grid-cols-4 lg:row-start-1">
          <div className="col-span-full col-start-3 lg:col-start-1 lg:col-end-6">
            <TextFade direction="up">
              <TitleSection className="type-base text-secondary pointer-events-auto w-fit">
                Tecnologias
              </TitleSection>
            </TextFade>
          </div>
        </div>

        {/* list lg:row-start-1 */}
        <div className="col-span-full lg:row-start-1">
          <ul className="gap-x-base grid grid-cols-4 lg:grid-cols-12">
            {copy.map((current, index) => (
              <li
                key={index}
                className="relative col-span-full py-4 first:pt-0 lg:col-start-7 lg:py-6 lg:even:col-start-6"
              >
                <span className="border-secondary pointer-events-none absolute left-0 top-0 h-full w-[calc(100%+32px)] border-b-2"></span>
                <TextFade direction="up">
                  <span className="type-2xl text-secondary">{current}</span>
                </TextFade>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
