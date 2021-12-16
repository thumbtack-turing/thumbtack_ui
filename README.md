# thumbtack

[![CircleCI](https://circleci.com/gh/thumbtack-turing/thumbtack_ui/tree/main.svg?style=svg)](https://circleci.com/gh/thumbtack-turing/thumbtack_ui/tree/main)

## Abstract

As students, we realized that there must be a better way to organize tutorials, videos and other learning materials. Thumbtack allows users to organize their saved websites how they want, using nested custom-named folders.

## Snapshots of Application

<img src='https://thumbtack-ui.herokuapp.com/static/media/recording1.aeb83050.gif' height='200' width='auto' /> <img src='https://thumbtack-ui.herokuapp.com/static/media/recording2.4a76bde0.gif' height='200' width='auto' />
<img src='https://media.giphy.com/media/4fxlnXmbAspCXzKf5r/giphy.gif' height='200' width='auto' /> <img src='https://media.giphy.com/media/Cl6l2Iybdl4FOFHtvu/giphy.gif' height='200' width='auto' /> <img src='https://media.giphy.com/media/olAcL55ASGhlKWOaHu/giphy.gif' height='200' width='auto' />

## Technologies

### Stack

- Apollo Client
- TypeScript
- React with Hooks & Router
- Sass

### Dependencies

- Animate.css
- React-DnD

## Wins

- The Drag-n-Drop API is a very cool library that we were glad to get familiar with for future use
- Using Apollo forced us to think very hard about our component architecture, as our past uses of Context API make that process much easier
- Using TypeScript for the first time made us realize how fragile data flow, especially props and other function arguments, can be in a JS app
- Getting this project across the finish line with a lot of extenuating circumstances thoroughly tested our grit and resolve
- Visual design came together nicely

## Challenges

- We found Apollo Client/GraphQL to have a steep learning curve for such a short project - especially its state management and testing aspects - and found that we needed to pivot away from some features we could've easily implemented with React + Context API
- Mutations from the hosted BE weren't testable from the UI until 2/3 of the way through the project, forcing us to accelerating our cross-team communications and troubleshooting
- A family emergency limited the amount of time we could spend writing code for the first half of this project, so we were not able to start off pair-coding like we planned to
- AWS & Heroku crashed for a day on one of our crucial work days for testing interaction with the hosted BE

## Viewing & Installation

The deployed app can be viewed [here](https://thumbtack-ui.herokuapp.com/).

If you'd like to run this repo locally:

1. Clone down this repository
2. In your terminal, run:
  ```
  npm install
  npm start
  ```
3. If you're not automatically navigated to `localhost:3000` from your terminal, visit it in your browser

## Future Features

- Multiple users with OAuth
- Drag-n-droppable trash and 'up-one-level' icons
- Resource sharing between users

## Contributors

- [Janika Hortizuela](https://github.com/jhortizu01)
- [Nolan Caine](https://github.com/n0land0)

## Project Spec
- [Project Spec](https://mod4.turing.edu/projects/capstone/) provided by [Turing School of Software & Design](https://turing.edu/)

