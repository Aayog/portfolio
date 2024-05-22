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
      mode: 'manual',
      automatic: {
        sortBy: 'pinned', // or 'updated' to sort by most recent
        limit: 12,
        exclude: {
          forks: true,
          projects: [],
        },
      },
      manual: {
        projects: [
          'Aayog/LazyEyeScroller',
          'Aayog/CMS_Backend',
          'Aayog/MovieShowBookingJava',
          'Aayog/WPM',
          'Aayog/rock_paper_scissors_lizard_spock',
          'Aayog/SocketCanvas',
          'Aayog/GeneticAlgorithm',
        ],
      },
    },
      external: {
        header: 'My Projects',
        projects: [
          {
            title: 'DoctorsToday',
            description: 'Engineered a comprehensive API infrastructure using Node.js, enhanced by MinIO, MongoDB, and MySQL for efficient data management, all containerized using Docker. Realized a significant 60% improvement in data retrieval speed, substantially boosting system responsiveness and user experience.',
            link: 'https://github.com/Aayog/DoctorsToday',
          },
          {
            title: 'Nepali Weddings Website',
            description: 'Implemented Kubernetes (KIND) deployment for a PHP, HTML, CSS, JavaScript website for learning purposes, previously deployed using Docker.',
            link: 'https://github.com/Aayog/NepaliWeddingsWebsite',
          },
          {
            title: 'LazyEyeScroller',
            description: 'Created an innovative Python script that won first place at a MLH-hosted hackathon, University of Indianapolis, 2018. The script leverages eye-tracking technology for intuitive control of social media scrolling, showcasing my proficiency in Python and novel application of machine learning techniques.',
            link: 'https://github.com/Aayog/LazyEyeScroller',
          },
          {
            title: 'Movie Ticketing Web Application',
            description: 'Initiated and successfully deployed a Java Spring Framework-based web application which included comprehensive database management and robust security features.',
            link: 'https://github.com/Aayog/MovieTicketingWebApp',
          },
          {
            title: 'Dynamic CMS',
            description: 'Formulated a Django REST Framework-based CMS, prioritizing scalability and maintenance ease. Integrated advanced content management features, enabling streamlined content updates and user-friendly navigation.',
            link: 'https://github.com/Aayog/DynamicCMS',
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
          {
            title: 'NewZoidTimes',
            description: 'Developed a Spacy-based Python backend to grammatically merge headlines.',
            link: 'https://github.com/Aayog/NewZoidTimes',
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
    defaultTheme: 'business',
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
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
  },
  enablePWA: true,
};

export default CONFIG;
