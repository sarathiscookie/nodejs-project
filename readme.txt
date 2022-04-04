Day 1
-----
> Get directory. 
> Get filename.
> require:- How module exports and require works.
> modules:- Learned basic modules like os, path, filesystem (sync and async).
> readFile & writeFile (asynchronous) is faster than readFileSync & writeFileSync (synchronous).

Day 2
-----
> npm init
> npm init -y:- It skip the process and create an default package.json. Later change the value.
> npm i lodash:- Lodash is a JavaScript library that provides utility functions for common programming tasks.
> npm i bootstrap
> npm i @popperjs/core
> npm install -g nodemon:- nodemon is a tool that helps develop node. js based applications by automatically restarting the node application when file changes in the directory are detected.

> npm start:- Add start page in scripts and hit npm start.
eg: 
  "scripts": {
     "start": "node app.js"
  }

> npm run dev:- Add start page in scripts and hit npm run dev.
eg: 
  "scripts": {
     "dev": "nodemon app.js"
  }

> package-lock.json:- The goal of package-lock. json file is to keep track of the exact version of every package that is installed so that a product is 100% reproducible in the same way even if packages are updated by their maintainers. 

> Event Loop:- Check eventLoopExample folder.

> Promise:- Promises are used to handle asynchronous operations in JavaScript. Events were not good at handling asynchronous operations. Promises are the ideal choice for handling asynchronous operations in the simplest manner. They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events.

TODO:
ASYNC Patterns, Event Emitter and Streams