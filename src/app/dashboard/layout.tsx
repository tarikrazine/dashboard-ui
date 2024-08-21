import { TooltipProviders } from "@/components/providers/tooltip-providers";
import DesktopNav from "./components/desktopNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProviders>
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <div className="hidden border-r border-gray-200 p-4 md:flex md:w-1/12 lg:w-1/5 xl:w-1/6">
          <DesktopNav />
        </div>
        {/* Right Content */}
        <div className="flex-1">{children}</div>
      </div>
    </TooltipProviders>
  );
}
