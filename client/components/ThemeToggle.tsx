"use client";

import * as React from "react";
import { Moon, Sun, Computer } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export const ThemeToggle = (props: React.HTMLAttributes<HTMLButtonElement>) => {
	const { theme, setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" {...props}>
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent side="top" align="end">
				<DropdownMenuItem
					onClick={() => setTheme("light")}
					className={cn(theme === "light" && "bg-accent")}
				>
					<Sun className="h-4 w-4 mr-2" />
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme("dark")}
					className={cn(theme === "dark" && "bg-accent")}
				>
					<Moon className="h-4 w-4 mr-2]" />
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme("system")}
					className={cn(theme === "system" && "bg-accent")}
				>
					<Computer className="h-4 w-4 mr-2" />
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
