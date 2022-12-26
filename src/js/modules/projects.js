const projects = [
  {
    id: 1,
    type: 'application',
    name: 'GoSurf.io',
    description:
      'Built with React and runs as a Single Page Web Application (SPA). The goal of GoSurf is to simplify checking the conditions of your local surf spot by providing stripped down, live weather forecasts from around the world.',
    technologies: [
      'react',
      'styled-components',
      'node',
      'express',
      'mongodb',
      'aws',
      'netlify',
    ],
    links: {
      github: {
        href: 'https://github.com/ryan-neil/gosurf',
        title: 'Github Repo',
        ariaLabel: 'Github Repo',
      },
      live: {
        href: 'https://www.gosurf.io/',
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
    technologies: ['html', 'css', 'javascript', 'php', 'mysql'],
    links: {
      github: {
        href: '',
        title: 'Github Repo (NDA)',
        ariaLabel: 'Github Repo (NDA)',
      },
      live: {
        href: 'https://sfpa.netlify.app',
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
    technologies: ['html', 'css', 'javascript', 'php', 'mysql'],
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
      'Tiles is a todo app but instead of storing the data in local storage, it has a built-in API that communicates with a MongoDB cloud database to persists data in the cloud. By communicating with the API, the user can Create, Read, Update, and Delete todo tiles.',
    technologies: [
      'html',
      'css',
      'javascript',
      'express',
      'mongodb',
      'netlify',
    ],
    links: {
      github: {
        href: 'https://github.com/ryan-neil/tiles',
        title: 'Github Repo',
        ariaLabel: 'Github Repo',
      },
      live: {
        href: 'https://tiles-todo.netlify.app',
        title: 'Visit Live Site',
        ariaLabel: 'Visit Live Site',
      },
    },
    image: {
      src: './assets/tiles-screenshot.webp',
      alt: 'Tiles App',
    },
  },
]

export const renderProjects = () => {
  const projectsDOM = document.querySelector('.projects-list')

  const allProjects = projects
    .map((item) => {
      const { type, name, description, technologies, links, image } = item

      const tech = technologies
        .map((item) => {
          return `
					<p class="tech-item">${item}</p>
				`
        })
        .join('')

      return `
				<article class="project-card">
					<div class="project-card__item text">
						<div class="project-type">${item.type}</div>
						<h3 class="project-name">${name}</h3>
						<p class="project-desc">${description}</p>
						<h3>Tech Stack:</h3>
						<div class="project-tech">${tech}</div>
						<div class="project-icons">
							<a
								class="icon"
								href="${links.github.href}"
								title="${links.github.title}"
								aria-label="${links.github.ariaLabel}"
								target="blank"
							>
								<button>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
								</button>
							</a>
							<a
								class="icon"
								href="${links.live.href}"
								title="${links.live.title}"
								aria-label="${links.live.ariaLabel}"
								target="blank"
							>
								<button>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-radio"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>
								</button>
							</a>
						</div>
					</div>
					<div class="project-card__item img">
						<img 
							src="${image.src}" 
							alt="${image.alt}" 
						/>
					</div>
				</article>
			`
    })
    .join('')

  projectsDOM.innerHTML = allProjects

  return projectsDOM
}

renderProjects()
