const express = require('express');
const path = require('path');
const router = express.Router();

// index route
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../views/index.html'));
});

// about route
router.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, '../views/about.html'));
});

module.exports = router;
