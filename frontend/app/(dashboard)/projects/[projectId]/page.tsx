import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectById,
  getRunsForProject,
} from "@/lib/mock-data";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}

function statusBadge(status: string) {
  const base =
    "inline-flex rounded px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide";
  if (status === "running")
    return `${base} bg-[var(--accent-muted)] text-[var(--accent)]`;
  if (status === "failed")
    return `${base} bg-red-950/50 text-red-400`;
  return `${base} bg-zinc-800 text-zinc-300`;
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = getProjectById(projectId);
  if (!project) notFound();

  const runs = getRunsForProject(project.id);

  return (
    <div className="p-8">
      <nav className="mb-6 text-sm text-zinc-500">
        <Link href="/projects" className="hover:text-[var(--accent)]">
          Projects
        </Link>
        <span className="mx-2 text-zinc-700">/</span>
        <span className="text-zinc-300">{project.name}</span>
      </nav>
      <header className="mb-8">
        <h1 className="font-mono text-2xl font-semibold tracking-tight text-zinc-100">
          {project.name}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-400">{project.description}</p>
        <p className="mt-3 font-mono text-xs text-zinc-600">ID: {project.id}</p>
      </header>
      <section>
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Runs
        </h2>
        {runs.length === 0 ? (
          <p className="text-sm text-zinc-500">No runs for this project (mock).</p>
        ) : (
          <ul className="divide-y divide-[var(--border)] rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            {runs.map((r) => (
              <li key={r.id}>
                <Link
                  href={`/runs/${r.id}`}
                  className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 transition-colors hover:bg-white/[0.03]"
                >
                  <div>
                    <p className="font-medium text-zinc-200">{r.label}</p>
                    <p className="mt-1 font-mono text-xs text-zinc-600">{r.id}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={statusBadge(r.status)}>{r.status}</span>
                    <span className="text-xs text-zinc-500">
                      {formatDate(r.startedAt)}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
