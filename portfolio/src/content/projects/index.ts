import type { Project, ProjectCategory } from "../types";
import { workActivityTracker } from "./work-activity-tracker";
import { nefKeuangan } from "./nef-keuangan";
import { financeAssistantBot } from "./finance-assistant-bot";
import { cpnsLearningApp } from "./cpns-learning-app";
import { btcXauQuantLab } from "./btc-xau-quant-lab";

/**
 * Adding a project: create a file next to these, import it, and add it here.
 * Nothing else needs to change — the homepage, the work index, the filters, the
 * case-study route, and the sitemap all read from this array.
 */
export const projects: Project[] = [
  workActivityTracker,
  nefKeuangan,
  financeAssistantBot,
  cpnsLearningApp,
  btcXauQuantLab,
].sort((a, b) => a.order - b.order);

export const featuredProjects = projects.filter((p) => p.featured);

export const buildingProjects = projects.filter((p) => !p.featured);

export function projectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Categories that at least one project actually uses, in a stable order. */
export const activeCategories: ProjectCategory[] = (
  ["web", "automation", "dashboard", "research"] as ProjectCategory[]
).filter((category) => projects.some((p) => p.categories.includes(category)));
