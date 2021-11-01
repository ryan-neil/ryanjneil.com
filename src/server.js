const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();

// import routes
const routes = require('./routes/index');

// serve static files
app.use(express.static(path.join(__dirname, '/public')));

// serve routes
// app.use(routes); // local
app.use('/.netlify/functions/server', routes); // netlify

// export app for local server
module.exports = app;
// export handler function for lambda to run (Netlify)
module.exports.handler = serverless(app);
