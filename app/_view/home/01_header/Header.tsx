export default function Header() {
  return (
    <header className="p-base pointer-events-none fixed inset-x-0 top-0 z-10 mix-blend-difference">
      <div className="max-w-384 mx-auto flex w-full justify-end">
        <button
          type="button"
          className="type-xl text-primary pointer-events-auto cursor-pointer mix-blend-difference"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
