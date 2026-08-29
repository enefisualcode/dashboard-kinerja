import type { ProjectCategory, ProjectStatus } from "../types";

type Item = { title: string; body: string };

/**
 * The shape every locale must satisfy. Adding a string here makes both
 * dictionaries fail to compile until each one supplies it, which is the point:
 * a missing translation should be a build error, not a silent English fallback.
 */
export type Dictionary = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    workTitle: string;
    workDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
    caseStudySuffix: string;
  };

  nav: {
    work: string;
    about: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
    switchTo: string;
    github: string;
    skipToContent: string;
  };

  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
    categories: string[];
    visualCaption: string;
  };

  work: {
    sectionLabel: string;
    sectionHeading: string;
    sectionIntro: string;
    viewCaseStudy: string;
    buildingLabel: string;
    buildingHeading: string;
    buildingIntro: string;
    viewProgress: string;
    exploreResearch: string;
    allProjects: string;
    indexLabel: string;
    indexHeading: string;
    indexIntro: string;
    filterLabel: string;
    filterAll: string;
    filters: Record<ProjectCategory, string>;
    empty: string;
    countOne: string;
    /** Uses a `{n}` placeholder. */
    countMany: string;
  };

  status: Record<ProjectStatus, string>;

  capabilities: {
    label: string;
    heading: string;
    intro: string;
    items: Item[];
  };

  about: {
    label: string;
    heading: string;
    body: string[];
    readMore: string;
    principlesHeading: string;
    principles: Item[];
  };

  process: {
    label: string;
    heading: string;
    steps: Item[];
  };

  cta: {
    label: string;
    heading: string;
    subheading: string;
    examplesLabel: string;
    examples: string[];
    reassurance: string;
    button: string;
    noContactYet: string;
  };

  caseStudy: {
    backToWork: string;
    overview: string;
    problem: string;
    idea: string;
    solution: string;
    howItWorks: string;
    keyFeatures: string;
    screenshots: string;
    behindTheBuild: string;
    technologies: string;
    challenges: string;
    status: string;
    statusDone: string;
    statusNotYet: string;
    links: string;
    repository: string;
    privateRepo: string;
    privateRepoNote: string;
    liveSite: string;
    demoDataNote: string;
    screenshotPending: string;
    screenshotPendingNote: string;
    nextProject: string;
    prevProject: string;
    onThisPage: string;
  };

  aboutPage: {
    heading: string;
    intro: string;
    howIWorkHeading: string;
    toolsHeading: string;
    toolsIntro: string;
    toolGroups: { title: string; items: string[] }[];
    ctaHeading: string;
  };

  contactPage: {
    heading: string;
    intro: string;
    helpfulHeading: string;
    helpfulItems: string[];
    channelsHeading: string;
    pendingHeading: string;
    pendingBody: string;
  };

  footer: {
    tagline: string;
    rights: string;
    builtWith: string;
    navHeading: string;
    connectHeading: string;
    backToTop: string;
  };

  common: {
    externalLink: string;
  };
};
