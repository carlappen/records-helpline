export type ResourceType =
  | 'tool'
  | 'guide'
  | 'document'
  | 'link'
  | 'lesson'
  | 'fundamentals'
  | 'template'
  | string;


export type Resource = {
  title: string;
  description: string;
  href: string;
  // Multiple types can be shown as tags on the resource card.
  types: ResourceType[];
  // Used for UI grouping; items with `source: 'helpline'` appear first.
  source?: 'helpline' | 'other';
  external?: boolean;
};

export const resources: Resource[] = [
  {
    title: 'Read first - Architecture',
    description:
      "Why filing ORRs is like inspecting a house.",
    href: 'https://docs.google.com/document/d/1qUxkDanyMcfIh_VzAe3KA9y9XtrWJ4KjPzhu590Dbu0/edit?usp=sharing',
    types: ['fundamentals'],
    source: 'helpline',
    external: true,
  },
  {
    title: 'Tracking your requests',
    description:
      "Why it's important to stay organized, plus a few templates to help you do it.",
    href: 'https://docs.google.com/document/d/1qs1FPCGNI1_0YamF5-M5XMyIO-nCWRV2oUzywN-rP9o/edit?usp=sharing',
    types: ['tool'],
    source: 'helpline',
    external: true,
  },
  {
    title: "Sample request letter",
    description:
      "For when you need a more robust format.",
    href: 'https://docs.google.com/document/d/13aXjTiV_HCNx46USxUIsCN5Xa5mT24cc8BlSQj7ojDI/edit?usp=sharing',
    types: ['template'],
    source: 'helpline',
    external: true,
  },
  {
    title: "Six requests you should file today",
    description:
      "Great ORRs to get you started.",
    href: 'https://docs.google.com/document/d/1nMrNLz1vahjX46coh3oIXKzIYWdUwz8Vy0nFICmfcnM/edit?tab=t.0#heading=h.w9w6q7oxv1sa',
    types: ['guide'],
    source: 'helpline',
    external: true,
  },
  {
    title: 'FOIA Requests: State-by-State Open Records Guides',
    description:
      "Links to authoritative state open records guides from the Reporters Committee for Freedom of the Press.",
    href: 'https://www.rcfp.org/open-government-guide',
    types: [],
    source: 'other',
    external: true,
  },
  {
    title: 'MuckRock — Filing Requests and Finding Examples',
    description:
      "Search public requests to see how others phrased similar records requests, and use their language as a model.",
    href: 'https://www.muckrock.com/',
    types: [],
    source: 'other',
    external: true,
  },
];
