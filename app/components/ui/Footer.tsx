import { Main } from "./Main";

export function Footer() {
  return (
    <footer className="absolute bottom-0 w-full self-end py-4">
      <Main className="flex flex-col items-center justify-between text-sm text-muted">
        <span className="">
          Created by{" "}
          <a href="https://gus.sh" target="_blank" rel="noopener noreferrer" className="text-accent">
            gus.sh~
          </a>
        </span>
      </Main>
    </footer>
  );
}
