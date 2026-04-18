import { CopilotPanel } from "@/components/copilot-panel";
import { Sidebar } from "@/components/sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="min-w-0 flex-1 overflow-auto">{children}</main>
      <CopilotPanel />
    </div>
  );
}
