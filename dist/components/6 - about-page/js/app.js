// Start Navbar transition on scroll
window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 75;

  header.classList.toggle('scrolling-active', windowPosition);
})
// End Navbar transition on scroll