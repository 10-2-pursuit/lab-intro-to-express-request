const express = require("express");
const pokemon = require("./pokemon.json");


const app = express()



// Simple Activity 

// Routes 
app.get("/", (req, res) => {
    res.send("Welcome!")
});

// Index Route 

app.get("/bugs", (req, res) => {
    const numberOfBugs = 99;
    res.send(` <h1> ${numberOfBugs} little bugs in the code </h1>
    <a href="/bugs/${Number(numberOfBugs) + 2}">pull one down, patch it around </a>`);
});

// Show Route 

app.get("/bugs/:numberOfBugs", (req, res) => {
    const {numberOfBugs} = req.params;

    if(numberOfBugs <= 200){
        res.send(` <h1> ${numberOfBugs} little bugs in the code </h1>
        <a href="/bugs/${Number(numberOfBugs) + 2}">pull one down, patch it around </a>`);
    } else {
        res.send(`<h1> Too many bugs! </h1>
        <a href="/bugs/">Start Over</a>`);
    }
});

// Multiple Parameters
app.get("/bugs/:verb/:adjective/:noun", (req, res) => {
    const {verb, adjective, noun} = req.params;
    res.send (`<h1> Congratulations on starting a new project called ${verb} ${adjective} ${noun} </h1>`);
})

// Routes










module.exports = app;