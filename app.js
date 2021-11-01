// Netlify x Express Tutorial: https://www.youtube.com/watch?v=hQAu0YEIF0g

const express = require('express');
const path = require('path');
const app = express();

// serve static folder
app.use(express.static(path.join(__dirname, 'public')));

// index route
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
});

// about route
app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, './public/about.html'));
});

// start our server...
const PORT = process.env.PORT || 3080;
const server = app.listen(PORT, () => {
	console.log('Listening on port ' + server.address().port);
});
