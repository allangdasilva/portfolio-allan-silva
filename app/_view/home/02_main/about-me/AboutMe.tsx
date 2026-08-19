import { aboutMeCopy } from '@/app/data/about-me';

export default function AboutMe() {
  const copy = aboutMeCopy;

  return (
    <section className="bg-primary text-secondary px-base lg:py-31 relative py-24">
      <div className="max-w-component gap-x-base grid grid-cols-4 gap-y-3 lg:grid-cols-12">
        <div className="col-span-full col-start-3 lg:col-start-8 lg:justify-self-end">
          <h2 className="type-base font-serif italic">
            <span aria-hidden>“</span> Sobre mim
          </h2>
        </div>

        <div className="col-span-full flex flex-col gap-3 lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:gap-4">
          {copy.map((current, index) => (
            <p key={index} className="type-lg max-w-[64ch]">
              {current}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
