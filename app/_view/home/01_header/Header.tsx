import Menu from './menu/Menu';

export default function Header() {
  return (
    <header className="p-base pointer-events-none fixed inset-x-0 top-0 z-30 mix-blend-difference">
      <div className="max-w-component flex w-full justify-end">
        <Menu />
      </div>
    </header>
  );
}
