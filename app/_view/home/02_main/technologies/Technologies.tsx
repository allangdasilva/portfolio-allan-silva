import { technologiesCopy } from '@/app/data/technologies';

export default function Technologies() {
  const copy = technologiesCopy;

  return (
    <section className="bg-primary text-secondary lg:py-31 relative py-24">
      <div className="gap-x-base px-base grid grid-cols-4 gap-y-3 overflow-hidden lg:grid-cols-12 lg:gap-y-0">
        <div className="max-w-component col-span-full col-start-3 w-full lg:col-start-1 lg:row-start-1">
          <h2 className="type-base font-serif italic">
            <span>“</span> Tecnologias
          </h2>
        </div>
        <div className="col-span-full lg:row-start-1">
          <ul className="gap-x-base grid grid-cols-4 lg:grid-cols-12">
            {copy.map((current, index) => (
              <li
                key={index}
                className="type-2xl after:border-secondary relative col-span-full py-4 after:absolute after:left-0 after:top-0 after:h-full after:w-[calc(100%+32px)] after:border-b-2 first:pt-0 lg:col-start-7 lg:py-6 lg:even:col-start-6"
              >
                {current}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
