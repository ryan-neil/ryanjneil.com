const express = require('express');
const path = require('path');
const router = express.Router();

// index route
router.get('/', (req, res) => {
	// res.send('Home page');
	res.sendFile(path.join(__dirname, './index.html'));
});

// about route
router.get('/about', (req, res) => {
	// res.send('About page');
	res.sendFile(path.join(__dirname, './public/about.html'));
});

module.exports = router;
