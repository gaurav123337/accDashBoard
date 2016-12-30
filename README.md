# accDashBoard

For setting up angular2 app with node js I took help from this site https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli

# Prerequisites
We'll of course need the angular cli

$ npm install -g angular-cli

# Creating the Angular App
Next, we'll create an angular app with the CLI. If you'd like to use yarn please check below after the command.

$ ng new client
$ cd client
$ ng serve

And open http://localhost:4200 in your browser.

# Adding Express

Angular CLI comes with a command ng build, which bundles your angular app into a dist folder, or a folder that you may specify in the angular-cli.json file. This is what our express app will point to.

Install express and body-parser as dependecies.
(folder name where angular code resides)client->
$ npm install --save express body-parser
Then create a file server.js and a folder server in the root of our angular project. The server.js file will have the server code, that will point to the server folder, where the rest of the server implementation is.

server.js

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
The above code sets up a simple express app, with an /api route and all other routes are directed towards the dist/index.html page. This catch all route, denoted with *, MUST come last after all other API routes have been defined.

The /api route points to a file ./server/routes/api.js. Let's create this file.

server/routes/api.js

const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;
One last thing before we run this. Since the catch all route is pointing to dist/index.html, we need to do a build of the angular app.

$ ng build
This creates the dist folder with the angular 2 app built files. Now we can serve the app with express.

$ node server.js
Going to http://localhost:3000 should load the app, and http://localhost:3000/api should show as below.

angular app (http://localhost:3000)
