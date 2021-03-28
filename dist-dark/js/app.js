// Start Navbar transition on scroll
window.addEventListener('scroll', function() {
	let header = document.querySelector('header');
	let windowPosition = window.scrollY > 75;

	header.classList.toggle('scrolling-active', windowPosition);
});
// End Navbar transition on scroll

// Start Site Faders
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

// faders
const appearOptions = {
	threshold  : 0,
	rootMargin : '0px 0px -100px 0px'
};

const appearOnScroll = new IntersectionObserver(function(
	entries,
	appearOnScroll
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear');
			appearOnScroll.unobserve(entry.target);
		}
	});
}, appearOptions);

faders.forEach((fader) => {
	appearOnScroll.observe(fader);
});

// sliders
sliders.forEach((slider) => {
	appearOnScroll.observe(slider);
});
// End Site Faders
