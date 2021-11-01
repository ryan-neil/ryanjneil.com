// import app from app.js
const app = require('./src/server');

// start local server...
const PORT = process.env.PORT || 3080;
const server = app.listen(PORT, () => {
	console.log('Server listening on port', PORT);
});
