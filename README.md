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



