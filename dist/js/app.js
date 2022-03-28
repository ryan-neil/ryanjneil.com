// Nav fade in on scroll
const navFadeIn = () => {
  window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 75;

    header.classList.toggle('scrolling-active', windowPosition);
  });
};
navFadeIn();

// Site section faders
const sectionFaders = () => {
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px 52px 0px',
  };

  const appearOnScroll = new IntersectionObserver(function (
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
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
};
sectionFaders();
