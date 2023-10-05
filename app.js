// DEPENDENCIES
const express = require('express');

// CONFIGURATION
const app = express();

// ROUTES
// Home
app.get('/', (req, res) => {
	res.send('<h1>Welcome 🖖 to 99 Little Bugs 🪰🪲🐛 & Poke-Express 🔴⚪️</h1>');
});

// EXPORT
module.exports = app;
