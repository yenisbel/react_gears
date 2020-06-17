# Overview

The Authentication User App, is a basic to create a Rails backend with a React front-end, using Http cookies and Session Data. This project was bootstrapped with [Rails New], database PostgreSql and [Create React App](https://github.com/facebook/create-react-app).

## Features to tackle here


## Accessibility features



## Components



## Rails Backend

Ruby version is 6, and in the project directory, and also need to include in the Gemfile:

```
gem 'bcrypt'
gem 'rack-cors'
```
It is also good to add under config/initializers two files 
- cors.rb 
- session_store.rb

The React client will run on http://localhost:3000, so it is important change the port on config/puma.rb to prevent that frontend and backend atempt to run on the same port.
In the puma file change to port 
```
port ENV.fetch(“PORT”) { 3001 }
```



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

## Deployment

Really you can use any of the available free solution for deploys that offers an easy and intuitive path to put your app online, so far I've been using Zeit, called now Vercel and Netlify.

## Notes

To tackle the issue with the unique ids when adding tasks, here Remind me To DO uses the library nanoid.
Make sure step you’re in the root directory and run the following terminal command:
```
npm install nanoid or yarn add nanoid

Things tackle here:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
