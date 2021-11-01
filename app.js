// Netlify x Express Tutorial: https://www.youtube.com/watch?v=hQAu0YEIF0g

const express = require('express');
const path = require('path');
const app = express();

// import routes
const routes = require('./src/routes/index');

// serve static files
app.use(express.static(path.join(__dirname, 'src/public')));

// serve all routes
app.use(routes);

// start our server...
const PORT = process.env.PORT || 3080;
const server = app.listen(PORT, () => {
	console.log('Server listening on port', PORT);
});
