Confession Page
===============
> A website that provide flexibility and freedom of speech for community to express their feeling anonymously, the content submitted will experience manually approval and post directly into the Facebook page. 

*** 

Table Of Contents
=================
  
  * [About The Project](#about-the-project)
    * [File Structure](#file-structure)
  * [Motivation](#motivation)
  * [Technical Discussion](#technical-discussion)
  * [Limitation](#limitation)
  * [Getting Started](#getting-started)
    * [Installation](#installation)
      * [Running in Development](#running-in-development)
      * [Running in Production](#running-in-production)
  * [Tools and Technologies](#tool-and-technologies)
  * [About](#about)
    * [Author](#author)
    * [License](#license)

*** 

About The Project
=================
The project focus on develop a multi-platform social networking websites to promote the freedom of speech with public site that received confessions from community and an admin site to perform batch submission of confessions to Facebook platform. 

File Structure
--------------
```
keep/                           => future reference for setup and installation
├── 01_mongod_installation.txt      => steps to install mongodb
├── 02_mongodb_setup.txt            => setup mongodb authentication role and schema
├── 03_nginx_setup.txt              => nginx configuration file for proxy
public/                         => static file, retail same name in dev and production environment
src/
├── client/                     => front end with reactjs, redux and redux-thunk
|   ├── helpers/                => helper function to be use in entire front end folder
|   ├── state/                  => state management assets
|   |   ├── util/               => utility function in entire redux
|   |   ├── ducks/              => redux in ducks pattern
|   |   |   ├── confession/             => confession entity
|   |   |   |   ├── actions.js              => payloads of information send from applicoation to store
|   |   |   |   ├── index.js                => file that export action, reducer, types, selectors
|   |   |   |   ├── reducers.js             => specify application state change in response to action sent to store
|   |   |   |   ├── selector.js             => function to encapsulate global state tree
|   |   |   |   ├── types.js                => data layers: mongoose
|   |   ├── store.js                    => application state holder
|   ├── views/                  => react structure
|   |   ├── components/             => component use across the application
|   |   ├── pages/                  => a single page, or containers
|   |   ├── routes/                 => react-router that map against different pages
|   ├── index.js                => React application entry point, ReactDOM.render()
├── server/                 => expressjs structure
|   ├── connection/             => contains all the servers, nosql orm and session loader 
|   |   ├── express.js              => express server
|   |   ├── mongoose.js             => mongoose orm
|   |   ├── server.js               => nodejs server
|   |   ├── session.js              => session library middleware
|   ├── core/                   => drivers and environment configuration
|   ├── ducks/                  => ducks pattern for server-side code level design
|   |   ├── confession/             => confession entity with CQRS and multi-tier architecture 
|   |   |   ├── controller.js           => presentation layer
|   |   |   ├── middleware.js           => filter HTTP request before enter controllers
|   |   |   ├── model.js                => data layers: mongoose
|   |   |   ├── route.js                => route the request with associate controller
|   |   |   ├── store.js                => reusable query associated with atomic actions to database
|   |   |   ├── validation.js           => well-defined rules for provided inputs
|   |   ├── index.js            => map all the directory with routes
|   ├── helpers/        => helper function for entire server side
|   ├── util/           => utility function for entire server side
└── index.js            => entry point to start nodejs server
```

Motivation
==========
In a traditional facebook confession page, the admin is required to copy every single confession from a row in the Google Sheets and paste into the Facebook page by creating a post. The process is task and time consuming and require automation to update and review the content with a website. 

The project attempt to increase the efficiency of confession's content update by automate the page update and review action. The admin of the page can post the content gather from the website and post onto the Facebook page with single click.

***


Technical Discussion
====================

The project chose MERN (MongoDB, Express, React-Redux, NodeJS) stacks to utilize the benefits of asynchronous programming from JavaScript ES6 features as it involves major event-driven features on the server side. 

ReactJS is chosen to build the user interface with minimum rendering on page updates. It is hosted with Express server and compile with Node.js server environment. Babel is used to compile React and Express codes written with ES5+ Javascript into compatible version understand by browser and Node server. Webpack is use transpile JavaScript assets into  static assets bundle to be serve by the servers and accessible by the browser with loaders. 

The global state management of application, Redux and Express's API directory is designed with Duck patterns to be *feature-first folder structure* in order to improve abstraction, scalability and maintainability. The approach extract states from presentation layers in React and coherent to SOLID principle in Express. 

***

Limitation
==========
* [ ] Does not possess test case for both React and Express.
* [ ] Monolitic Architecture with large codebase and less scalable.
* [ ] Required more optimization on Webpack (Reduce bundle size, splitting, minification)
* [ ] Not Strong Typing, consider using Typescript for future development. 

***

Getting Started
===============

Installation
------------

### Running In Development

1. Compile and transpile both front-end and back-end assets and run the application with hot reload.
```bash
$ npm run dev
```

### Running in Production
1. Compile and transpile both front-end and back-end assets 
```bash
$ npm run build
```

2. Run with PM2
```bash
$ pm2 run ecosystem.config.js --env production
```

***

Tools and Technologies
======================
1. React v16.8.6
2. Redux v4.0.1
3. MongoDB v4.2.6
4. Express v4.16.4
5. NodeJS v10.19.0
6. Babel v7.4.3
7. Webpack v4.30.0
8. PM2 v4.2.3

***

About
=====
Author
------
- Yinghua Chai

License
-------
This project does not contain any license.