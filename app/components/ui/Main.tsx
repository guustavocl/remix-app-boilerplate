import { HTMLProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type MainProps = HTMLProps<HTMLDivElement> & {
  children: ReactNode;
};

export function Main({ children, ...props }: MainProps) {
  return <main className={twMerge("container mx-auto", props.className)}>{children}</main>;
}
