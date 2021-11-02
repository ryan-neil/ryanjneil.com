const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// import routes
const routes = require('./routes/index');

// set view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
// set express layouts
app.set('layout', 'layouts/layout');
app.use(expressLayouts);

// serve static files
app.use(express.static(path.join(__dirname, '/public')));

// serve routes
app.use(routes); // local
// app.use('/.netlify/functions/server', routes); // netlify

// export app for local server
module.exports = app;

// serverless (netlify)
module.exports.handler = serverless(app);
