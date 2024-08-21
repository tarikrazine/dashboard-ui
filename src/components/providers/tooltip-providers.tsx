import { TooltipProvider } from "../ui/tooltip";

export function TooltipProviders({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
