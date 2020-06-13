# Overview

The Remind me To Do app is inspired on the basic exercise of To Do List, usually send it as homework when learning React. 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features to tackle here
With the Remind me To Do app, as a user, I can:

- read a list of tasks.
- add a task using the mouse or keyboard.
- mark any task as completed, using the mouse or keyboard.
- delete any task, using the mouse or keyboard.
- edit any task, using the mouse or keyboard.
- view a specific subset of tasks: 
  - E.g: All tasks, only the active task, or only the completed tasks

## Accessibility features

It's always recommend try to keep the user-in -mind when you built something. Definetely the Remind me app can have a better approach on this. With the help of assistive technology (like screen readers), for know am using simple stuff in the code as:

```
<button type="button" aria-pressed="true">
```
this property aria-pressed, means that the button can be in one of two states: pressed or unpressed, setting a value of true means that the button is pressed by default.

```
className="visually-hidden"
```
Any element with this class will be hidden from sighted users and still available to screen reader users that do not have the extra visual contex

```
<ul
  role="list"
  aria-labelledby="list-heading"
>
```
this property aria-labelledby, tells assistive technology the list heading as the label  describes the purpose of the list beneath it, think about it like a informative context, which could help screen reader users better understand

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />


### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your To Do app is ready to be deployed!

### Deployment

Really you can use any of the available free solution for deploys that offers an easy and intuitive path to put your app online, so far I've been using Zeit, called now Vercel and Netlify.


