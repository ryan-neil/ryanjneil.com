// Dark mode
const toggleDarkMode = () => {
  // users' last choice will be remembered
  let darkMode = localStorage.getItem('darkMode');
  const darkModeToggle = document.querySelector('#dark-mode-toggle');

  // check if dark mode is enabled
  // if it's enabled, turn it off
  // if it's disabled, turn it on

  // enable function
  const enableDarkMode = () => {
    // add the class of darkMode to the body
    document.body.classList.add('darkmode');
    // update darkMode in the localStorage
    localStorage.setItem('darkMode', 'enabled');
  };

  // disable function
  const disableDarkMode = () => {
    // remove the class of darkMode from the body
    document.body.classList.remove('darkmode');
    // update darkMode in the localStorage
    localStorage.setItem('darkMode', null);
  };

  if (darkMode === 'enabled') {
    enableDarkMode();
  }

  // event toggle
  darkModeToggle.addEventListener('click', () => {
    // update darkMode every time someone clicks on the button
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
};
toggleDarkMode();
