const express =require('express');
const app = express();
const PORT = process.env.PORT || 8888;

app.get('/:verb/:adjective/:noun', (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

app.get('/bugs', (req, res) => {
    const 
    res.send('99 little bugs');
});

module.exports = app;
