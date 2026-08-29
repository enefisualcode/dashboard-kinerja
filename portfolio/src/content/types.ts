import type { Bilingual } from "./locales";

/** Lifecycle label shown on cards and case-study pages. Only use one the
 *  repository evidence actually supports. */
export type ProjectStatus = "active" | "in-development" | "research" | "prototype";

/** Filter keys used by the Work page. Display tags are separate and localized. */
export type ProjectCategory = "web" | "automation" | "dashboard" | "research";

export type Repository = {
  name: string;
  url: string;
  /** Private repositories are listed by name but not linked. */
  private?: boolean;
  role: Bilingual;
};

export type Screenshot = {
  src: string;
  width: number;
  height: number;
  frame: "browser" | "phone";
  alt: Bilingual;
  caption: Bilingual;
  /** True when the image is the real interface rendered with synthetic demo
   *  data. Surfaced to the reader so nothing is passed off as live data. */
  demoData?: boolean;
};

/** A placeholder slot for a screenshot that does not exist yet. Rendering an
 *  honest empty frame beats mocking up functionality the product lacks. */
export type ScreenshotPlaceholder = {
  frame: "browser" | "phone";
  label: Bilingual;
  /** Internal note for whoever adds the real asset later. */
  note: string;
};

export type FlowStep = {
  label: Bilingual;
  detail: Bilingual;
};

export type Feature = {
  title: Bilingual;
  body: Bilingual;
};

export type CaseStudy = {
  overview: Bilingual;
  problem: Bilingual;
  idea: Bilingual;
  solution: Bilingual;
  flow: FlowStep[];
  features: Feature[];
  behindTheBuild: Bilingual;
  challenges: Feature[];
  /** What is finished, and what is deliberately not. */
  statusNote: Bilingual;
  statusDone: Bilingual[];
  statusNotYet: Bilingual[];
};

export type Project = {
  id: string;
  slug: string;
  /** Display order within its group. */
  order: number;
  featured: boolean;
  status: ProjectStatus;
  categories: ProjectCategory[];
  year: string;
  repositories: Repository[];
  liveUrl: string | null;
  /** How to describe the live link, since not every deployment is a public demo. */
  liveLabel: Bilingual | null;
  technologies: string[];
  screenshots: Screenshot[];
  placeholders: ScreenshotPlaceholder[];
  /** Accent used for the visual frame's tint. Keeps each project distinguishable
   *  without turning the page into a rainbow. */
  tint: string;

  name: string;
  kind: Bilingual;
  tagline: Bilingual;
  summary: Bilingual;
  tags: Bilingual[];
  caseStudy: CaseStudy;
};
