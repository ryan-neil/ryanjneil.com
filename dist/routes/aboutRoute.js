const express = require('express');
const router = express.Router();

// About route
// router.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname + '/about.html'));
// });

// About route
router.get('/', (req, res) => {
	// res.render('../public/about.html');
	res.sendFile(path.join(__dirname + '/about.html'));
});

module.exports = router;
