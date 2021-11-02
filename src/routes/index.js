// Express res.render: https://expressjs.com/en/api.html#res.render
const express = require('express');
const path = require('path');
const router = express.Router();

// index route
router.get('/', (req, res) => {
	// res.send('Home page');
	// res.sendFile(path.join(__dirname, '../views/index.html')); // Not working
	res.render('index'); // Not working: Internal Server Error
});

// about route
router.get('/about', (req, res) => {
	// res.send('About page');
	// res.sendFile(path.join(__dirname, '../views/about.html')); // Not working
	res.render('about'); // Not working: Internal Server Error
});

module.exports = router;
