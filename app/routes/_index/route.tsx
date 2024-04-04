import type { MetaFunction } from "@remix-run/node";
import { Main } from "~/components/ui/Main";
import { HeroSection } from "./ui/HeroSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix App boilerplate" },
    {
      name: "description",
      content: "Just an Remix app boilerplate",
    },
  ];
};

export default function Index() {
  return (
    <Main className="center h-full py-12 max-sm:pb-24 md:py-24">
      <HeroSection />
    </Main>
  );
}
