<p align="center">
  <img src="/assets/js-logo.svg" width="600" alt="js-hero">
</p>

## Introduction
This is the repo for my personal portfolio. The portfolio was built with plain HTML, CSS and JavaScripts. No libraries.

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
--color-primary-bg: #16161a;
--color-secondary-bg: #242629;
--color-main: #fffffe;
--color-highlight: #7f5af0;
--color-secondary: #72757e;
--color-tertiary: #2cb67d;
--color-primary-gradient: linear-gradient(135deg, var(--color-highlight) 10%, var(--color-tertiary) 100%);
```
### ⚫ Dark Mode:
```css
--color-primary-bg: #16161a;
--color-secondary-bg: #242629;
--color-main: #fffffe;
--color-highlight: #7f5af0;
--color-secondary: #72757e;
--color-tertiary: #2cb67d;
--color-primary-gradient: linear-gradient(135deg, var(--color-highlight) 10%, var(--color-tertiary) 100%);
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