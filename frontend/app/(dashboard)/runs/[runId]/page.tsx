import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, getRunById } from "@/lib/mock-data";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}

export default async function RunPage({
  params,
}: {
  params: Promise<{ runId: string }>;
}) {
  const { runId } = await params;
  const run = getRunById(runId);
  if (!run) notFound();

  const project = getProjectById(run.projectId);

  return (
    <div className="p-8">
      <nav className="mb-6 text-sm text-zinc-500">
        <Link href="/projects" className="hover:text-[var(--accent)]">
          Projects
        </Link>
        {project && (
          <>
            <span className="mx-2 text-zinc-700">/</span>
            <Link
              href={`/projects/${project.id}`}
              className="hover:text-[var(--accent)]"
            >
              {project.name}
            </Link>
          </>
        )}
        <span className="mx-2 text-zinc-700">/</span>
        <span className="text-zinc-300">Run</span>
      </nav>
      <header className="mb-8">
        <h1 className="font-mono text-2xl font-semibold tracking-tight text-zinc-100">
          {run.label}
        </h1>
        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-wider text-zinc-500">Run ID</dt>
            <dd className="mt-1 font-mono text-zinc-300">{run.id}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-zinc-500">Status</dt>
            <dd className="mt-1 text-zinc-300 capitalize">{run.status}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-zinc-500">Started</dt>
            <dd className="mt-1 text-zinc-300">{formatDate(run.startedAt)}</dd>
          </div>
          {project && (
            <div>
              <dt className="text-xs uppercase tracking-wider text-zinc-500">Project</dt>
              <dd className="mt-1">
                <Link
                  href={`/projects/${project.id}`}
                  className="text-[var(--accent)] hover:underline"
                >
                  {project.name}
                </Link>
              </dd>
            </div>
          )}
        </dl>
      </header>
      <section className="rounded-lg border border-dashed border-[var(--border)] bg-black/30 p-6">
        <p className="text-sm text-zinc-500">
          Placeholder: metrics, logs, and artifacts would render here.
        </p>
      </section>
    </div>
  );
}
