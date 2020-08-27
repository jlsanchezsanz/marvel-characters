# Marvel Characters

## Table of contents

- [Installation and use](#installation-and-use)
- [Running unit tests](#running-unit-tests)
- [Build](#build)
- [Technologies used](#technologies-used)
- [Solution](#solution)
- [Unit tests coverage](#unit-tets-coverage)
- [Performance](#performance)
- [Browsers](#browsers)
- [Live demo](#live-demo)

## Installation and use

1. Clone [this repository](https://github.com/jlsanchezsanz/marvel-characters.git).

2. Run `yarn` inside of `marvel-characters` project in order to install dependencies.

3. Run `yarn start` for a dev server and navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `yarn test` to execute the unit tests and `yarn test:coverage` for a more detailed output with coverage info.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `build/` directory.

## Technologies used

Project is created using:

- bootstrap 4.5.2
- bootstrap-icons 1.0.0-alpha5
- node-sass 4.14.1
- react 16.13.1
- react-dom 16.13.1
- react-redux 7.2.0
- react-router-dom 5.2.0
- redux 4.0.5
- redux-thunk 2.3.0"

## Solution

Since the application is based in two views (list and details) I decided to split the code in two main lazy loaded components: `CharacterListContainer` and `CharacterDetailsContainer`. These two correspond to the two available routes: `/` for the characters list and `/:id` for the details of the character with the given id.

I followed the higher order components approach and separated components with logic, like the ones that access the store and dispatch fetch actions (i.e. `CharacterListContainer`), from the ones that are merely presentational (i.e. `CharacterList`).

I splitted the state of the application in 4 main blocks:

- characters: contains the list of characters and the status of the request (loading/error).
- characterDetails: contains the object with the character details and the status of the request (loading/error).
- filters: contains the current value of the filters.
- pagination: contains the info necessary for the pagination.

The app will show an error message when API requests fail.

## Unit tests coverage

| % Stmts | % Branch | % Funcs | % Lines |
| ------: | -------: | ------: | ------: |
|   95.76 |      100 |   97.18 |    95.6 |

## Performance

These are the strategies used to improve the performance of the app:

- Lazy load `CharacterListContainer` and `CharacterDetailsContainer`
- Start searching only when value length >= 3
- Debounce API calls on search by name
- Limit default number of characters per page to 10.

## Browsers

Compatible with:

- Microsoft Edge 84.0.522.63
- Internet Explorer 11
- Google Chrome 84.0.4147.135
- Firefox 79.0
- Safari 13.1.2

## Live demo

Access this [link](https://marvel-characters-list.herokuapp.com/) to see a live demo of the project.
