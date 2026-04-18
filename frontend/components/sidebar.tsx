"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/projects", label: "Projects" },
] as const;

function navClass(active: boolean) {
  return [
    "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
    active
      ? "bg-[var(--accent-muted)] text-[var(--accent)]"
      : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200",
  ].join(" ");
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-[220px] shrink-0 flex-col border-r border-[var(--border)] bg-[var(--surface)]">
      <div className="border-b border-[var(--border)] px-4 py-5">
        <Link href="/projects" className="font-mono text-sm font-semibold tracking-tight text-zinc-100">
          Alfa Delfa
        </Link>
        <p className="mt-1 text-xs text-zinc-500">Research lab</p>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-3" aria-label="Main">
        {nav.map((item) => {
          const active =
            item.href === "/projects"
              ? pathname === "/projects" || pathname.startsWith("/projects/")
              : pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className={navClass(active)}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
