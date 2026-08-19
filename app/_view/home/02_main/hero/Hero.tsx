export default function Hero() {
  return (
    <div className="bg-tertiary text-primary p-base sticky top-0 flex min-h-dvh">
      <div className="max-w-component relative flex w-full flex-1 flex-col justify-between">
        <header className="z-1 relative">
          <h1 className="type-xl flex flex-col gap-1 lg:gap-2">
            <div>Allan Silva</div>
            <div>Front end & UI/UX</div>
          </h1>
        </header>

        <div className="absolute top-1/2 z-0 grid w-full -translate-y-1/2">
          <div className="max-w-133.5 h-75 w-full place-self-center bg-red-500 "></div>
        </div>

        <div className="z-1 relative">
          <p className="type-3xl uppercase [text-align-last:justify]">
            THE ART OF CODING
          </p>
        </div>
      </div>
    </div>
  );
}
