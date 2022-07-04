const work = [
  {
    id: 1,
    company: 'Cooler Screens',
    position: 'Fullstack Software Engineer',
    date: 'Jun 2022—present',
    description: "Ad-tech company that's changing the retail experience.",
    technologies: ['react', 'typescript', 'node', 'sql', 'typeorm', 'azure'],
  },
  {
    id: 2,
    company: 'SFPA',
    position: 'Web Developer',
    date: 'Jan 2021—Dec 2021',
    description:
      'US News Award-winning Post Acute hospital that specializes in short-term rehabilitation, 24-hour skilled nursing, and long-term care',
    technologies: ['hmtl', 'css', 'javascript', 'sql'],
  },
  {
    id: 3,
    company: 'C2 Collaborative',
    position: 'Project Manager',
    date: 'May 2015—Jan 2021',
    description:
      'Architectural services for projects around the globe including master planned communities, lifestyle/resorts, commercial/retail, residential, and sensitive habitat programs.',
    technologies: [],
  },
];

const renderWork = () => {
  const workDOM = document.querySelector('.work-list');

  const allWork = work
    .map((item) => {
      const { company, position, date, description } = item;

      return `
			<ul class="work-item">
				<li class="work-item_company"><a href=""><b>${company}</b></a> — ${position}</li>
				<li class="work-item_date">${date}</li>
				<li class="work-item_description"><i>${description}</i></li>
			</ul>
		`;
    })
    .join('');

  workDOM.innerHTML = allWork;
};

renderWork();
