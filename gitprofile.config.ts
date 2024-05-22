// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Aayog',
  },
  base: '/portfolio/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'pinned', // or 'updated' to sort by most recent
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [
          'Aayog/DoctorsToday',
          'Aayog/LazyEyeScroller',
          'Aayog/MovieTicketingWebApp',
          'Aayog/DynamicCMS',
          'Aayog/NepaliWeddingsWebsite',
          'Aayog/NewZoidTimes',
        ],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'NewZoidTimes',
          description: 'A Spacy-based Python backend for headline synthesis',
          link: 'https://github.com/Aayog/NewZoidTimes',
        },
        {
          title: 'Tic-Tac-Toe',
          description: 'GUI application built with TKinter',
          link: 'https://github.com/Aayog/TicTacToe',
        },
        {
          title: 'Calculator',
          description: 'GUI application built with JavaFX',
          link: 'https://github.com/Aayog/Calculator',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Aayog Koirala',
    description: 'Master of Science in Computer Science student at Miami University',
    imageURL: '', // Add your image URL if desired
  },
  social: {
    linkedin: 'aayog',
    twitter: '', // Add your Twitter handle if desired
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'aayogkoirala.com',
    phone: '(317)-332-1082',
    email: 'aayogkoirala@outlook.com',
  },
  resume: {
    fileUrl: 'https://github.com/Aayog/portfolio/blob/main/Resume_20240417.pdf', 
  },
  skills: [
    'Python',
    'Java',
    'C++',
    'JavaScript',
    'SQL',
    'C#',
    'PHP',
    'Django',
    'Express.js',
    'Laravel',
    'Node.js',
    'Spring Boot',
    'Hibernate',
    'React',
    'FastAPI',
    'Docker',
    'Kubernetes',
    'OpenAI API',
    'MongoDB',
    'Socket.io',
    'MinIO',
    'Cohere',
    'Langchain',
    'AWS',
    'Azure',
    'Google Cloud',
  ],
  experiences: [
    {
      company: 'Miami University',
      position: 'AI Chatbot Developer',
      from: 'Jun 2023',
      to: 'May 2024',
      companyLink: 'https://miamioh.edu',
    },
    {
      company: 'Miami University - Myaamia Center',
      position: 'Software Developer',
      from: 'Jan 2023',
      to: 'Present',
      companyLink: 'https://miamioh.edu/ctp/myaamia-center/',
    },
    {
      company: 'Miami University',
      position: 'Teaching Assistant',
      from: 'Aug 2022',
      to: 'Dec 2022',
      companyLink: 'https://miamioh.edu',
    },
    {
      company: 'Community Health Network',
      position: 'Healthcare Analytics Intern',
      from: 'Jun 2021',
      to: 'Jun 2022',
      companyLink: 'https://www.ecommunity.com/',
    },
    {
      company: 'Nepdroid Innovations',
      position: 'Java Intern Developer',
      from: 'Jan 2018',
      to: 'Jun 2018',
      companyLink: 'https://nepdroid.com/',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Miami University',
      degree: 'Master of Science in Computer Science',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Miami University',
      degree: 'Bachelor of Science in Computer Science',
      from: '2018',
      to: '2022',
    },
  ],
  publications: [],
  blog: {
    source: '', // Leave empty if you don't have a blog
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '', // Add your Google Analytics ID if desired
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
    ],
  },
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
