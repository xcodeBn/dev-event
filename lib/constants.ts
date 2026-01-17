export type EventItem = {
  title: string;
  image: string;
  slug?: string;
  location?: string;
  date?: string;
  time?: string;
  description?: string;
};

export const events: EventItem[] = [
  {
    title: 'React Summit 2026',
    image: '/images/event1.png',
    slug: 'react-summit-2026',
    location: 'Amsterdam, Netherlands',
    date: 'June 3-4, 2026',
    time: '09:00 - 18:00 CEST',
    description: 'A major React conference with workshops, talks, and networking for frontend engineers.'
  },
  {
    title: 'JSConf US 2026',
    image: '/images/event2.png',
    slug: 'jsconf-us-2026',
    location: 'San Francisco, CA, USA',
    date: 'July 12-14, 2026',
    time: '10:00 - 17:30 PDT',
    description: 'JavaScript community conference covering new language features, tooling, and ecosystem projects.'
  },
  {
    title: 'NodeConf Remote 2026',
    image: '/images/event3.png',
    slug: 'nodeconf-remote-2026',
    location: 'Online / Remote',
    date: 'August 21, 2026',
    time: 'All day (virtual sessions)',
    description: 'Node.js focused talks and workshops for backend and full-stack developers.'
  },
  {
    title: 'AI & Dev Expo 2026',
    image: '/images/event4.png',
    slug: 'ai-dev-expo-2026',
    location: 'Berlin, Germany',
    date: 'September 9-10, 2026',
    time: '09:30 - 17:00 CEST',
    description: 'Shows practical applications of AI in developer tooling, infra, and product development.'
  },
  {
    title: 'Global Hackathon Weekend',
    image: '/images/event5.png',
    slug: 'global-hackathon-weekend-2026',
    location: 'Multiple cities / Online',
    date: 'May 2-4, 2026',
    time: '48-hour hack',
    description: 'Community-driven hackathon for teams building prototypes and open-source projects.'
  },
  {
    title: 'Frontend Masters Meetup',
    image: '/images/event6.png',
    slug: 'frontend-masters-meetup-2026',
    location: 'New York, NY, USA',
    date: 'April 18, 2026',
    time: '18:30 - 21:00 EDT',
    description: 'Local meetup with lightning talks, demos, and a chance to meet fellow frontend engineers.'
  },
  {
    title: 'Featured: Developer Day',
    image: '/images/event-full.png',
    slug: 'developer-day-2026',
    location: 'London, UK',
    date: 'October 15, 2026',
    time: '09:00 - 19:00 BST',
    description: 'Curated talks from industry leaders, workshops, and sponsor booths.'
  }
];
