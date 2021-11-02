// use .env
require('dotenv').config();

// import app from app.js
const app = require('./src/server');

// DJ, spin that sh*t...
const PORT = process.env.PORT || 9001;
const localServer = app.listen(PORT, () => {
	console.log(`App is running at: http://localhost:${PORT}`);
});
