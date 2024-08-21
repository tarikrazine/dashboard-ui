"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";

function NavItem({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={clsx(
            "flex items-center justify-center gap-2 rounded-lg p-3 text-zinc-600 transition-colors hover:bg-muted hover:text-foreground lg:justify-start",
            {
              "bg-muted text-foreground": pathname === href,
            },
          )}
        >
          {children}
          <span className="sr-only lg:not-sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
}

export default NavItem;
