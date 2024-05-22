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
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: ['Aayog/DoctorsToday', 'Aayog/LazyEyeScroller', 'Aayog/MovieTicketingWebApp', 'Aayog/DynamicCMS', 'Aayog/NepaliWeddingsWebsite'],
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
    website: '',
    phone: '(317)-332-1082',
    email: 'aayogkoirala@outlook.com',
  },
  resume: {
    fileUrl: 'https://example.com/your-resume.pdf', // Update with your resume URL
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
      to: 'Present',
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
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
