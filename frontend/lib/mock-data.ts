export type Project = {
  id: string;
  name: string;
  description: string;
  updatedAt: string;
};

export type Run = {
  id: string;
  projectId: string;
  label: string;
  status: "completed" | "running" | "failed";
  startedAt: string;
};

export const mockProjects: Project[] = [
  {
    id: "proj-alpha",
    name: "Protein folding baseline",
    description: "Compare folding stability across three candidate sequences.",
    updatedAt: "2026-04-17T14:22:00Z",
  },
  {
    id: "proj-beta",
    name: "Spectral denoising",
    description: "Evaluate denoisers on low-SNR lab captures.",
    updatedAt: "2026-04-16T09:10:00Z",
  },
  {
    id: "proj-gamma",
    name: "Calibration sweep",
    description: "Grid search over instrument calibration parameters.",
    updatedAt: "2026-04-15T18:45:00Z",
  },
];

export const mockRuns: Run[] = [
  {
    id: "run-7f3a",
    projectId: "proj-alpha",
    label: "Fold-v2 / temp sweep",
    status: "completed",
    startedAt: "2026-04-17T12:00:00Z",
  },
  {
    id: "run-9c21",
    projectId: "proj-beta",
    label: "Wavelet + learned prior",
    status: "running",
    startedAt: "2026-04-17T15:30:00Z",
  },
  {
    id: "run-4b88",
    projectId: "proj-gamma",
    label: "Cal A / narrow band",
    status: "failed",
    startedAt: "2026-04-14T08:00:00Z",
  },
];

export function getProjectById(id: string): Project | undefined {
  return mockProjects.find((p) => p.id === id);
}

export function getRunById(id: string): Run | undefined {
  return mockRuns.find((r) => r.id === id);
}

export function getRunsForProject(projectId: string): Run[] {
  return mockRuns.filter((r) => r.projectId === projectId);
}
