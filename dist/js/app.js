/**
	==========================================
 		Dark Mode
*/

// users' last choice will be remembered
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// check if dark mode is enabled
// if it's enabled, turn it off
// if it's disabled, turn it on

// enable function
const enableDarkMode = () => {
	// 1. add the class of darkMode to the body
	document.body.classList.add("darkmode");
	// 2. update darkMode in the localStorage
	localStorage.setItem("darkMode", "enabled");
};

// disable function
const disableDarkMode = () => {
	// 1. remove the class of darkMode from the body
	document.body.classList.remove("darkmode");
	// 2. update darkMode in the localStorage
	localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
	enableDarkMode();
}

// event toggle
darkModeToggle.addEventListener("click", () => {
	// update darkMode every time someone clicks on the button
	darkMode = localStorage.getItem("darkMode");
	if (darkMode !== "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});

/**
	==========================================
 		Navbar transition on scroll
*/
window.addEventListener("scroll", function() {
	let header = document.querySelector("header");
	let windowPosition = window.scrollY > 75;

	header.classList.toggle("scrolling-active", windowPosition);
});

/**
 	==========================================
 		Site Faders
*/
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
	threshold: 0.3,
	rootMargin: "0px 0px 52px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
	entries,
	appearOnScroll
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add("appear");
			appearOnScroll.unobserve(entry.target);
		}
	});
}, appearOptions);

faders.forEach((fader) => {
	appearOnScroll.observe(fader);
});
