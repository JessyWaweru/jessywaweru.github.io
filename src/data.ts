const GH = 'https://github.com/JessyWaweru';

export const LINKS = {
  email: 'mailto:bryanjessywaweru@gmail.com',
  github: GH,
  linkedin: 'https://www.linkedin.com/in/jessy-waweru-b8051a288',
  leetcode: 'https://leetcode.com/u/BryanJessyWaweru/',
  report: '/SHIF-Coverage-Gaps-Case-Study.pdf.pdf',
  deck: 'https://jessywaweru.github.io/FINAL-YR-PRESENTATION/',
  rModels: `${GH}/actuarial-models-in-r`,
};

export type ProjectLink = { label: string; href: string };

export type Project = {
  name: string;
  emoji: string;
  kicker: string;
  blurb: string;
  hook: string;
  tags: string[];
  image?: string;
  accent: string;
  links: ProjectLink[];
};

export const PROJECTS: Project[] = [
  {
    name: 'ShopCrawl',
    emoji: '🛍️',
    kicker: 'Price intelligence',
    blurb:
      'Compares Amazon, Jumia, Kilimall and Shopify in one search, then ranks offers with SmartRank™: a weighted cost / trust / speed score.',
    hook: 'Stores rated below 6/10 take a 20% risk penalty. A cheap item that never arrives isn’t cheap.',
    tags: ['Django', 'DRF', 'React', 'Tailwind', 'PostgreSQL'],
    image: '/shots/shopcrawl.webp',
    accent: 'rgba(251, 113, 133, 0.35)',
    links: [
      { label: 'Live', href: 'https://shopcrawl.onrender.com/' },
      { label: 'API', href: `${GH}/shopcrawl-api` },
      { label: 'Web', href: `${GH}/shopcrawl-web` },
    ],
  },
  {
    name: 'DocRank',
    emoji: '🩺',
    kicker: 'Healthcare access',
    blurb:
      'Community-rated doctor directory for Nairobi, Kisumu and Mombasa, with OTP email sign-up, JWT auth, debounced search and optimistic saves.',
    hook: 'Ratings and review counts are aggregated inside a single ORM query, so there are no N+1 queries.',
    tags: ['DRF', 'JWT', 'Supabase', 'React 19', 'TypeScript'],
    image: '/shots/docrank.webp',
    accent: 'rgba(45, 212, 191, 0.35)',
    links: [
      { label: 'Live', href: 'https://doctor-search-frontend.onrender.com' },
      { label: 'API', href: `${GH}/docrank-api` },
      { label: 'Web', href: `${GH}/docrank-web` },
    ],
  },
  {
    name: 'Actuarial Risk Engine',
    emoji: '📊',
    kicker: 'Insurance analytics',
    blurb:
      'Monte Carlo, VaR/TVaR, Mack chain ladder, EVT, ruin theory, cat bonds and weather-index insurance priced on NASA rainfall data, served over FastAPI.',
    hook: '101 passing tests. An insurance company’s risk department, as a Python package.',
    tags: ['Python', 'NumPy', 'SciPy', 'FastAPI', 'React'],
    image: '/shots/actuarial.webp',
    accent: 'rgba(96, 165, 250, 0.35)',
    links: [
      { label: 'API docs', href: 'https://actuarial-risk-model-api.onrender.com/docs' },
      { label: 'Engine', href: `${GH}/actuarial-risk-engine` },
      { label: 'Web', href: `${GH}/actuarial-risk-engine-web` },
    ],
  },
  {
    name: 'Freelancer CRM',
    emoji: '💼',
    kicker: 'Multi-tenant SaaS',
    blurb:
      'Clients, projects and payments in USD, KES, EUR and GBP, with paid / unpaid / partial tracking you can edit inline.',
    hook: 'Data isolation is enforced at three layers (queryset, object permission, write validation) and every layer is tested.',
    tags: ['DRF', 'JWT', 'React', 'shadcn/ui', 'Framer Motion'],
    accent: 'rgba(167, 139, 250, 0.35)',
    links: [
      { label: 'Live', href: 'https://jessywaweru.github.io/freelancer-crm-ui/' },
      { label: 'API', href: `${GH}/freelancer-crm-api` },
      { label: 'UI', href: `${GH}/freelancer-crm-ui` },
    ],
  },
  {
    name: 'Tamasha',
    emoji: '🎬',
    kicker: 'Entertainment',
    blurb:
      'Every movie showing in Nairobi, synced into one API with showtimes grouped by day and cinema, plus a full event-management system.',
    hook: 'The data-sync pipeline gets past Cloudflare’s bot checks with cloudscraper and a polite delay. 🫖',
    tags: ['DRF', 'cloudscraper', 'Clerk', 'React', 'TypeScript'],
    image: '/shots/tamasha.webp',
    accent: 'rgba(250, 204, 21, 0.3)',
    links: [
      { label: 'API', href: `${GH}/tamasha-api` },
      { label: 'Web', href: `${GH}/tamasha-web` },
    ],
  },
];

export const STATS = [
  { to: 5, suffix: '', label: 'full-stack apps built' },
  { to: 101, suffix: '', label: 'passing tests in my risk engine' },
  { to: 11, suffix: '', label: 'actuarial models behind one API' },
  { to: 28, suffix: '', label: 'slides in an interactive thesis deck' },
];

export const STACK: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'R', 'SQL'] },
  { group: 'Backend', items: ['Django', 'Django REST Framework', 'FastAPI', 'JWT', 'Clerk'] },
  { group: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'] },
  { group: 'Actuarial & data', items: ['Monte Carlo', 'VaR / TVaR', 'ARIMA', 'Chain ladder', 'EVT', 'NumPy', 'SciPy', 'pandas'] },
  { group: 'Data & deploy', items: ['PostgreSQL', 'Supabase', 'Render', 'GitHub Pages', 'pytest'] },
];
