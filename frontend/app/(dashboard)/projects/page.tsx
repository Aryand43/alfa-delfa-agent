import Link from "next/link";
import { mockProjects } from "@/lib/mock-data";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}

export default function ProjectsPage() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="font-mono text-2xl font-semibold tracking-tight text-zinc-100">
          Projects
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Mock workspace — select a project to inspect details.
        </p>
      </header>
      <ul className="divide-y divide-[var(--border)] rounded-lg border border-[var(--border)] bg-[var(--surface)]">
        {mockProjects.map((p) => (
          <li key={p.id}>
            <Link
              href={`/projects/${p.id}`}
              className="block px-5 py-4 transition-colors hover:bg-white/[0.03]"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-medium text-zinc-100">{p.name}</span>
                <span className="font-mono text-xs text-zinc-500">{p.id}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-400">{p.description}</p>
              <p className="mt-2 text-xs text-zinc-600">
                Updated {formatDate(p.updatedAt)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
