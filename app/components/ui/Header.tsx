import { Link } from "@remix-run/react";
import { Main } from "./Main";
import ModeToggle from "./ModeToggle";

export function Header() {
  return (
    <header className="py-2">
      <Main className="flex flex-row items-center justify-between">
        <Link to={"/"} className="flex flex-row items-center gap-1">
          <img src="/logo.png?v=1" alt="website logo" className="h-8" />
          <span className="font-mono font-bold tracking-widest">REMIX APP</span>
        </Link>
        <div className="flex flex-row gap-2">
          <ModeToggle />
        </div>
      </Main>
    </header>
  );
}
