# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Code I am proud of!!!](#code-I-am-proud-of!!!)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments

### Screenshot

![](./Screenshots/screenshot-desktop.png)
![](./Screenshots/screenshot-mobile.png)

### Links

- Solution URL: [Interactive comments Section] https://github.com/Ebunski/Interactive-comments-section
- Live Site URL: https://fm-interactive-comments-section.netlify.app/

## My process:

Steps:

- routing
- navbar
- easy pages: about and error
- data fetching
- cocktail and cocktail list
- single cocktail page
- filter function
- active
- minor corrections from tutorial video

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- SCSS
- [React](https://reactjs.org/) - JS library

### What I learned

1. API: In an api, if the item cannot be found, it returns null - NOTE: you cannot read length of null.
2. Controlled and uncontrolled components: uncontrolled components are accessed with useRef.
3. Pagination and react routing
4. Forms always refresh the page on submit either by click on submit button or ENTER on the keyboard.
5. The "\_redirects" file for react router.
6. useCallback hook and ES-lint dependency warnings.

### Code I am proud of!!!

In SingleCocktail.js,
First part: getting the ingredients
I used Object.entries to get the key-value pairs.
I then used filter to filter out the instructions that do not have the value of null.
I used method chaining and applied map to get the values and wrap them in span tags(styled to add margin between each ingredient).

Second part:
I created an array of objects containing tag and values keys(with their values)
I then mapped over the array and avoided repetition.

### Continued development

- React
- Advanced Javascript

## Author

- Website - [coming soon...]
- LinkedIn - https://www.linkedin.com/in/ebunoluwa-oyebola-1490021b1
- Twitter - [@Ebun_ski](https://www.twitter.com/Ebun_ski)
- Email - [ebunoyebola03@gmail.com]

## Acknowledgments

Thank you frontend mentor.
