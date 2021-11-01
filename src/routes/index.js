const express = require('express');
const path = require('path');
const router = express.Router();

// index route
router.get('/', (req, res) => {
	res.send('Home page');
	// BUG: ** Not rendering index html file
	// res.sendFile(path.join(__dirname, '../views/index.html'));
});

// about route
router.get('/about', (req, res) => {
	res.send('About page');
	// BUG: ** Not rendering about html file
	// res.sendFile(path.join(__dirname, '../views/about.html'));
});

module.exports = router;
