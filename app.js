// DEPENDENCIES
const express = require('express');

// CONFIGURATION
const app = express();

// ROUTES
// Home
app.get('/', (req, res) => {
	res.send('<h1>Welcome 🖖 to 99 Little Bugs 🪰🪲🐛 & Poke-Express 🔴⚪️</h1>');
});

// New Project Name Generator
app.get('/:verb/:adjective/:noun', (req, res) => {
	const { verb, adjective, noun } = req.params;
	res.send(
		`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
	);
});

// EXPORT
module.exports = app;
