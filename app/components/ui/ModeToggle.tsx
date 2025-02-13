import { MoonStar, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "~/components/shadcn-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/shadcn-ui/dropdown-menu";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState("system");

  //this is only here cause of hydrations errors
  useEffect(() => {
    setSelectedTheme(theme || "system");
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          id="mode-toggle-btn"
          variant="ghost"
          size="icon"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {selectedTheme === "system" ? (
            <SunMoon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
          ) : (
            <>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonStar className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-90 dark:scale-100" />
            </>
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
