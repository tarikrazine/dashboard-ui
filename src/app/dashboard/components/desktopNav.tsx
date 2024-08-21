import { Home, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./navItem";

function DesktopNav() {
  return (
    <aside className="flex h-full w-full flex-col">
      <nav className="w-full space-y-4">
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2 sm:pb-5 sm:pt-3 lg:justify-start"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden text-xl font-bold lg:block">
            ScheduleLama
          </span>
        </Link>
        <NavItem href="/dashboard/admin" label="Dashboard">
          <Home className="h-6 w-6" />
        </NavItem>
        <NavItem href="/dashboard" label="Dashboard">
          <Home className="h-6 w-6" />
        </NavItem>
        <NavItem href="/dashboard" label="Dashboard">
          <Home className="h-6 w-6" />
        </NavItem>
        <NavItem href="/dashboard" label="Dashboard">
          <Home className="h-6 w-6" />
        </NavItem>
      </nav>

      <nav className="mt-auto w-full sm:py-5">
        <NavItem href="/dashboard/settings" label="Settings">
          <Settings className="h-6 w-6" />
        </NavItem>
      </nav>
    </aside>
  );
}

export default DesktopNav;
