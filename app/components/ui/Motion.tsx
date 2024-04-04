import { AnimatePresence, motion } from "framer-motion";
import { HTMLProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type MotionProps = HTMLProps<HTMLDivElement> & {
  children: ReactNode;
};

export function Motion({ children, ...props }: MotionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="maindiv"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={twMerge("", props.className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
