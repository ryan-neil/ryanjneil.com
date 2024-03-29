export const navFader = () => {
  window.addEventListener('scroll', function () {
    let header = document.querySelector('header')
    let windowPosition = window.scrollY > 75

    header.classList.toggle('scrolling-active', windowPosition)
  })
}

export const sectionFader = () => {
  const faderElements = document.querySelectorAll('.fade-in')

  const appearOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px 52px 0px',
  }

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return
      } else {
        entry.target.classList.add('appear')
        appearOnScroll.unobserve(entry.target)
      }
    })
  },
  appearOptions)

  faderElements.forEach((fader) => {
    appearOnScroll.observe(fader)
  })
}

navFader()
sectionFader()
