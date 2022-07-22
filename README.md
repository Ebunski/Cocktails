# 12. Sidebar-Modal

This is a simple project from freecodecamp

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Project features react concepts like contextApi, useContext and custom hooks
Features: 
- HomePage with hamburger icon and modal button
- Sidebar and modal in separate components

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show modal and sidebar

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- React javascript
- CSS custom properties and dynamically rendered css classes
- Flexbox and grid

### What I learnt

1) Css:
   Learnt how to style an overlay element - fixed, full width and height,background etc
   Responsive design - full sidebar on mobile, specific height on desktop
   Hover effect - switching bg and text colors.
   Animation: bounce animation
   transition: transform(-100px) to 0px
   hiding of toggle for desktop and hiding social for mobile

2) React:
   Learnt how to use the contextApi (especially from a separate file)
   steps: 
  1) create separate functional component with the destructured props/parameter of {children}
  2) create context as usual, functions and states
  3) context provider and value with {children} nested
  4) create custom hook for consuming the context - return useContext(AppContext);
  5) export custom hook , context and contextProvider.
  6) import context provider in index.js and nest App.js in it
  7) In components,use the custom hook (combining the context and useContext)

Overall it was a wonderful process.

## Author

- Website - [coming soon...]
- LinkedIn - [Ebunoluwa Oyebola]
- Twitter - [@Ebun_ski](https://www.twitter.com/Ebun_ski)
- Email - [ebunoyebola03@gmail.com]

## Acknowledgments

Thank you freecodecamp for this series.
