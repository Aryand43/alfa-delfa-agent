export function CopilotPanel() {
  return (
    <aside
      className="flex h-full w-[300px] shrink-0 flex-col border-l border-[var(--border)] bg-[var(--surface-elevated)]"
      aria-label="AI copilot placeholder"
    >
      <div className="border-b border-[var(--border)] px-4 py-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Copilot
        </h2>
        <p className="mt-1 text-sm text-zinc-400">Reserved for AI assistant</p>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="rounded-lg border border-dashed border-[var(--border)] bg-black/40 p-4 text-center">
          <p className="text-sm text-zinc-500">No session yet</p>
          <p className="mt-2 text-xs text-zinc-600">
            Summaries, suggested next runs, and chat will appear here.
          </p>
        </div>
      </div>
    </aside>
  );
}
