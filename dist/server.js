const express = require('express');
const path = require('path');

const app = express();
const port = 3080;

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// set routes
// home
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});
// about
app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/about.html'));
});

// start server
app.listen(port, () => console.log(`Server running on: http://localhost:${port}`));
