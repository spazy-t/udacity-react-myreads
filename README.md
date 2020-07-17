# Udacity REACT My Reads book tracking

## Table of contents

* [Overview](#overview)
* [Instructions](#instructions)
* [Resources](#resources)

## Overview

My Reads is a REACT App that uses a google books api to search for books based on user input and store them based on three shelf categories:
* Currently Reading
* Want to Read
* Read

The user can place any of the searched books on to any shelf via a control component attached to each book. They can also move a book from one shelf to another via the same component.  When a book is already on a shelf the books that appear on the search page will reflect this in the control component drop down. Furthermore, when a book is placed on a shelf in the search screen, that placement is immediately reflected on the shelf screen.

This app also shows the average rating for a book, should it have a rating when retrieved from the api. It also usues React Router to navigate between the different screens and should work on all major screen sizes.


## Instructions

* Once the files have been copied over use `yarn add` or `npm i` to install all dependencies.
* Then, `yarn start` or `npm start` to run the dev server and show in browser.
* Run `yarn build` or `npm build` to produce a distribution folder of minified files.


## Resources

[Svg-Path-Editor](https://yqnn.github.io/svg-path-editor/) - to create the star svg file (16/7/2020)

[Udacity](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/src/icons) - other svg icons taken from the starter code library on github (16/7/2020)

