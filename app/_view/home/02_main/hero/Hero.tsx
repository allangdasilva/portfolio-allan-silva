export default function Hero() {
  return (
    <section className="bg-tertiary text-primary p-base sticky top-0 flex min-h-dvh">
      {/* wrapper max-w */}
      <div className="max-w-component relative flex w-full flex-1 flex-col justify-between">
        {/* header */}
        <header className="z-1 relative">
          <h1 className="type-xl flex flex-col gap-y-1 lg:gap-y-2">
            <span>Allan Silva</span>
            <span>Front end & UI/UX</span>
          </h1>
        </header>

        {/* banner */}
        <div className="absolute top-1/2 z-0 grid w-full -translate-y-1/2">
          <div className="max-w-133.5 h-75 w-full place-self-center bg-red-500 "></div>
        </div>

        {/* high-light */}
        <div className="z-1 relative">
          <p className="type-3xl uppercase [text-align-last:justify]">
            THE ART OF CODING
          </p>
        </div>
      </div>
    </section>
  );
}
