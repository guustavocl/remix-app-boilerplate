import * as React from "react";

import { cn } from "~/lib/utils";
import { Button } from "./button";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  buttonText: string;
  onClick?: () => void;
}

const InputButton = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, buttonText, onClick, ...props }, ref) => {
    return (
      <div className="relative flex flex-row">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            "hover:cursor-text",
            className,
          )}
          ref={ref}
          {...props}
        />
        <Button
          variant="secondary"
          className="text-md absolute right-0 rounded-none rounded-r-md border border-l-0 border-input active:brightness-75"
          onClick={onClick}
        >
          {buttonText || "Secondary"}
        </Button>
      </div>
    );
  },
);
InputButton.displayName = "InputButton";

export { InputButton };
