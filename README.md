<p align="center">
  <img src="/assets/js-logo.svg" width="600" alt="js-hero">
</p>

## Introduction
This is the repo for my personal portfolio. The portfolio was built with plain HTML, CSS and JavaScripts. Deployed on [Netlify](https://www.netlify.com/).

[View the live site >>](https://www.josephskycrest.com/)

###### Let's connect on Twitter! 🤙🏻
[![Twitter Badge](https://img.shields.io/badge/-Twitter-00acee?style=flat-square&logo=Twitter&logoColor=white)](https://twitter.com/home?lang=en)

## 📂 Repo Folder Structure
```bash
  ├── dist
    ├── components
      ├── site component files
    ├── images
      ├── site image files
    └── js
      ├── app.js
    ├── about.html
    ├── index.html
    └── style.css
  └── dist-dark
    ├── same structure as dist except dark mode
```

1. **`/src`**: This directory contains all of the source files for the Github repo.
    1. **`/components`**: This directory contains the individual component files for the site sections.
    1. **`/images`**: This directory contains images for the site.
    1. **`/js`**: This directory contains all JavaScript files.
        1. **`/app.js`**: This is the master javascript file for the project.
    1. **`/about.html`**: This is the master html file for the about page of the site.
    1. **`/index.html`**: This is the master html file for the home page of the site.
    1. **`/style.css`**: This is the master style sheet for the site.

## 🎨 Color Palette
### ⚪ Light Mode:
```css
--color-primary: #6464fb;
--color-primary-light: #d8d8fe;
--color-secondary: #fb9797;
--color-primary-bg: #fffffe;
--color-secondary-bg: #f0f1f4;
--color-primary-gradient: linear-gradient(
		135deg,
		var(--color-primary) 10%,
		var(--color-secondary) 100%
	);
/* Typography */
--color-text-heading: #3f4347;
--color-text-subheading: #545a5f;
--color-text-p: #676e74;
```
### ⚫ Dark Mode:
```css
--color-primary-bg: #21272f;
--color-secondary-bg: #2c333c;
--color-secondary: #fb7e7e;
--color-border-nav: #434a53;
--color-border: #fffffe;
/* Typography */
--color-text-heading: #f3f3f3;
--color-text-subheading: #bfbfbf;
--color-text-p: #bfbfbf;
```

## 📝 Font
For the font family I chose Google Font's [Quicksand](https://fonts.google.com/specimen/Quicksand?preview.text_type=custom). Quicksand is sans serif with rounded terminals (whatever that means). It just so happens to be the font I'm into at the moment...
```html
<!-- html -->
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap" rel="stylesheet">
```
```css
/* css */
font-family: 'Quicksand', sans-serif;
```

## 📌 Resources
- [Google Material Design](https://material.io/)
- [Material Design - Dark Theme](https://material.io/design/color/dark-theme.html#ui-application)