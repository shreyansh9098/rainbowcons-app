// ── Navigation services list (for Header dropdown) ───────────────────────────
export const NAV_SERVICES = [
  { label: 'Oracle Applications Cloud', pageId: 'oracle-apps-cloud' },
  { label: 'Oracle Integration Cloud',  pageId: 'oracle-integration-cloud' },
  { label: 'Oracle e-Business Suite',   pageId: 'oracle-ebusiness-suite' },
]

// ── Default pages shipped with the app ──────────────────────────────────────
export const DEFAULT_PAGES = [
  {
    id: 'home',
    label: 'Home',
    type: 'home',
    keywords: ['home', 'rainbowcons', 'oracle', 'cloud', 'digital', 'transformation', 'services'],
    content: {
      hero: {
        heading: 'Expanding your digital footprint',
        subheading: 'Digital Transformations for Enterprise-wide agility with Oracle Cloud Solutions.',
        ctaLabel: 'Our Services',
      },
      services: [
        {
          id: 'oracle-apps-cloud',
          title: 'Oracle Applications Cloud',
          titleClass: 'text-primary',
          heading: 'Gain a competitive advantage deploying top-notch customer and employee experience with Oracle Cloud Solutions.',
          body: "RainbowCons's in-depth expertise and best practices from seasoned Oracle Cloud Consultants will help you create a more straightforward and robust application ecosystem. Drive your organization with greater agility by moving to the Oracle Cloud.",
          cta: 'Read More',
          image: 'https://consster.com/wp-content/uploads/2022/02/Oracle-Apps-Cloud-2.png',
          imageAlt: 'Oracle Applications Cloud',
          imageLeft: false,
        },
        {
          id: 'oracle-integration-cloud',
          title: 'Oracle Integration Cloud',
          heading: 'Extract the most value out of Oracle Fusion Middleware',
          body: 'Avail a seamless integration and have a modern and hyper agile application network. Step up from the legacy infrastructure and accelerating transformations in all domains from finance, H.R, customer relationship, and operations. Make better decisions, reduce cost and enhance efficiency.',
          cta: 'Read More',
          image: 'https://consster.com/wp-content/uploads/2022/02/OIC.png',
          imageAlt: 'Oracle Integration Cloud',
          imageLeft: true,
        },
        {
          id: 'oracle-ebusiness-suite',
          title: 'Oracle e-Business Suite',
          titleClass: 'text-primary',
          heading: 'Gain business intelligence like never before.',
          body: 'Avail a Full Suite Functional R12.x Configuration and Migration with RainbowCons. Implement new functional modules and leverage business intelligence for the future of business. With our expertise, get a full-fledged functional and technical upgrade from 11.x to R12.x.',
          cta: 'Learn More',
          image: 'https://consster.com/wp-content/uploads/2022/02/Oracle-e-Business-suite.png',
          imageAlt: 'Oracle e-Business Suite',
          imageLeft: false,
        },
      ],
    },
  },
  {
    id: 'oracle-apps-cloud',
    label: 'Oracle Applications Cloud',
    type: 'oracle-apps',
    keywords: ['oracle', 'applications', 'apps', 'cloud', 'fusion', 'implementation', 'managed', 'support'],
  },
  {
    id: 'oracle-integration-cloud',
    label: 'Oracle Integration Cloud',
    type: 'oracle-integration',
    keywords: ['oracle', 'integration', 'oic', 'cloud', 'fusion', 'middleware', 'api', 'microservices'],
  },
  {
    id: 'oracle-ebusiness-suite',
    label: 'Oracle e-Business Suite',
    type: 'oracle-ebs',
    keywords: ['oracle', 'ebusiness', 'e-business', 'ebs', 'suite', 'r12', 'erp', 'upgrade', 'migration'],
  },
  {
    id: 'about',
    label: 'About Us',
    type: 'about',
    keywords: ['about', 'us', 'company', 'team', 'vision', 'objectives', 'culture', 'mission'],
  },
  {
    id: 'careers',
    label: 'Careers',
    type: 'careers',
    keywords: ['careers', 'jobs', 'career', 'hiring', 'work', 'grow', 'opportunity', 'join'],
  },
  {
    id: 'contact',
    label: 'Contact',
    type: 'contact',
    keywords: ['contact', 'reach', 'phone', 'email', 'address', 'message', 'support', 'get in touch'],
    content: {
      heading: 'Contact Us',
      subheading: "Let's Start a Conversation",
      address: 'Suite#G604 Orchid, Royal Greens\nIndore MP – 452010',
      phone: '+91 70002 61105',
      email: 'connect@consster.com',
    },
  },
  {
    id: 'not-found',
    label: 'Not Found',
    type: 'not-found',
    keywords: [],
  },
]
