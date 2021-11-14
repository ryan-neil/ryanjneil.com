// Projects Show More Button
const showMoreProjects = () => {
	const projShowBtn = document.querySelector('#projShowBtn');

	projShowBtn.addEventListener('click', () => {
		const projWrap = document.querySelector('#projWrap');
		// projWrap.classList.toggle('active');

		if (projWrap.style.display === 'flex') {
			projWrap.style.display = 'none';
			// set button starting text
			projShowBtn.innerHTML = 'Show More';
		}
		else {
			projWrap.style.display = 'flex';
			// change button text when open
			projShowBtn.innerHTML = 'Show Less';
		}
	});
};
showMoreProjects();
