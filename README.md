# Udacity REACT My Reads book tracking
 
## Table of contents
 
* [Overview](#overview)
* [Instructions](#instructions)
* [Resources](#resources)
 
## Overview
 
'My Reads' is a REACT App that uses a google books api to search for books based on user input and stores selected books in one of three shelf categories:
* Currently Reading
* Want to Read
* Read
 
The user can place any of the searched books onto any shelf via a control component attached to each book. They can also move a book from one shelf to another via the same component. When a book is already on a shelf and that book appears on the search page, it will reflect this in the control component drop down. Furthermore, when a book is placed on a shelf in the search screen, that placement is immediately reflected on the shelf screen.
 
This app also shows the average rating for a book should it have a rating when retrieved from the api. For the books that don't have an average rating, the user can temporarily set a rating of their own using the implemented star system. Unfortunately the udacity books api is read only for book properties other than 'shelf'. Therefore, it isn't possible to save any new ratings. The app also uses React Router to navigate between the different screens and should work on all major screen sizes.
 
 
## Instructions
 
* Once the files have been copied over use `yarn add` or `npm i` to install all dependencies.
* Then, `yarn start` or `npm start` to run the dev server and show in the browser.
* Run `yarn build` or `npm build` to produce a distribution folder of minified files.
 
 
## Resources
 
[Svg-Path-Editor](https://yqnn.github.io/svg-path-editor/) - to create the star svg file (16/07/2020)
 
[Udacity](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/src/icons) - other svg icons taken from the starter code library on github (16/07/2020)

[Udacity](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/src/App.css) - drop shadows used for button and book images (15/07/2020)

[Pexels](https://www.pexels.com/search/books/) - Header and 404 background images (18/07/2020)

[CSS-tricks](https://css-tricks.com/adding-stroke-to-web-text/) - accessible header text stroke / shadow / outline (18/07/2020)

[MDN](https://developer.mozilla.org/en-US/) -  to look up array methods, node and element properties

[stack-overflow](https://stackoverflow.com/) - to look up using spread operator, setTimeOut function