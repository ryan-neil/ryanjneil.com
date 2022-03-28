export const projects = [
  {
    id: 1,
    type: 'application',
    name: 'GoSurf.io',
    description:
      'Built with JavaScript and runs as a Single Page Web Application (SPA). The goal of GoSurf is to simplify checking the conditions of your local surf spot by providing stripped down, live weather forecasts from around the world.',
    technologies: ['react', 'styled-components', 'node', 'express', 'mongodb'],
    links: {
      github: {
        href: 'https://github.com/ryan-neil/gosurf',
        title: 'Github Repo',
        ariaLabel: 'Github Repo',
      },
      live: {
        href: 'https://github.com/ryan-neil/gosurf',
        title: 'Visit Live Site',
        ariaLabel: 'Visit Live Site',
      },
    },
    image: {
      src: './assets/gosurf-screenshot.webp',
      alt: 'GoSurf App',
    },
  },
  {
    id: 2,
    type: 'website',
    name: 'San Francisco Post Acute',
    description:
      'Brought in to design the user interface (UI), user experience (UX), and develop their new website. The frontend was built with Vanilla JavaScript and the backend was built in PHP.',
    technologies: ['html', 'css', 'javascript', 'php', 'sql'],
    links: {
      github: {
        href: '',
        title: 'Github Repo (NDA)',
        ariaLabel: 'Github Repo (NDA)',
      },
      live: {
        href: 'https://www.sfpostacute.com',
        title: 'Visit Live Site',
        ariaLabel: 'Visit Live Site',
      },
    },
    image: {
      src: './assets/sfpa-screenshot.webp',
      alt: 'San Francisco Post Acute Website',
    },
  },
  {
    id: 3,
    type: 'website',
    name: 'Central Gardens Post Acute',
    description:
      'I was brought on to the CG team to design the user interface (UI), user experience (UX), and develop their new website. The frontend was built with Vanilla JavaScript and the backend was built in PHP.',
    technologies: ['html', 'css', 'javascript', 'php', 'sql'],
    links: {
      github: {
        href: '',
        title: 'Github Repo (NDA)',
        ariaLabel: 'Github Repo (NDA)',
      },
      live: {
        href: 'https://www.centralgardenspa.com/',
        title: 'Visit Live Site',
        ariaLabel: 'Visit Live Site',
      },
    },
    image: {
      src: './assets/cgpa-screenshot.webp',
      alt: 'Central Gardens Post Acute Website',
    },
  },
  {
    id: 4,
    type: 'application',
    name: 'Tiles',
    description:
      'Instead of storing everything in local storage, Tiles has a built-in API that communicates with a MongoDB cloud database and persists data to the cloud. By communicating with the API, the user can Create, Read, Update, and Delete todo tiles.',
    technologies: ['html', 'css', 'javascript', 'express', 'mongodb'],
    links: {
      github: {
        href: 'https://github.com/ryan-neil/tiles',
        title: 'Github Repo',
        ariaLabel: 'Github Repo',
      },
      live: {
        href: 'https://github.com/ryan-neil/tiles',
        title: 'Visit Live Site',
        ariaLabel: 'Visit Live Site',
      },
    },
    image: {
      src: './assets/tiles-light-screenshot.webp',
      alt: 'Tiles App',
    },
  },
];
