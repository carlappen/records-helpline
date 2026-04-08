export type ResourceType =
  | 'tool'
  | 'guide'
  | 'document'
  | 'link'
  | 'lesson'
  | 'fundamentals'
  | 'template'
  | 'training'
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
    title: "Developing ORR ideas, pt 1",
    description:
      "How to know what to request.",
    href: 'hhttps://docs.google.com/document/d/16mEIMmWVJ-H5ypuhmlCftLcD-B3JB7cza9T1H--T51Y/edit?usp=sharing',
    types: ['guide'],
    source: 'helpline',
    external: true,
  },
  {
    title: 'The Friendly State News - Training',
    description:
      "I can't understate the impact an ORR workshop from Jessica Huseman had on our crew years ago. Do yourself a favor and book one. ",
    href: 'https://www.thefriendlystatenews.com',
    types: [],
    source: 'other',
    external: true,
  },
  {
    title: 'MuckRock — Filing Requests and Finding Examples',
    description:
      "More to come on how to use MuckRock well, but the TLDR; amazing resource. Dive into it.",
    href: 'https://www.muckrock.com/',
    types: [],
    source: 'other',
    external: true,
  },
  {
    title: 'Georgia First Amendment Foundation',
    description:
      "Statewide group with more resources, lobbying efforts and advice.",
    href: 'https://gfaf.org',
    types: [],
    source: 'other',
    external: true,
  },
  {
    title: 'FOIA Requests: State-by-State Open Records Guides',
    description:
      "State open records guides from the Reporters Committee for Freedom of the Press.",
    href: 'https://www.rcfp.org/open-government-guide',
    types: [],
    source: 'other',
    external: true,
  },
  
];
