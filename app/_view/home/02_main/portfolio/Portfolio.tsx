import { portfolioCopy } from '@/app/data/portfolio';
import PortfolioCard from './PortfolioCard';

export default function Portfolio() {
  const copy = portfolioCopy;

  return (
    <section className="bg-primary text-primary relative">
      <div className="flex flex-col">
        <div className="px-base gap-x-base grid grid-cols-4 py-4 lg:grid-cols-12 lg:py-6">
          <h2 className="type-3xl text-secondary col-span-full col-start-3 font-serif italic lg:col-start-7">
            <span>“</span> Portfólio
          </h2>
        </div>

        <div className="relative col-span-full ">
          {copy.map((current) => (
            <PortfolioCard key={current.id} card={current} />
          ))}
        </div>
      </div>
    </section>
  );
}
