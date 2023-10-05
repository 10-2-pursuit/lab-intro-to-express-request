const express = require("express")
// const bugs = require("/models/pokemon.json")


const app = express()



// Simple Activity 

// Routes 
app.get("/", (req, res) => {
    res.send("Welcome!")
});

// Index Route 

app.get("/bugs", (req, res) => {
    const numberOfBugs = 99
    res.send(` <h1> ${numberOfBugs} little bugs in the code </h1>
    <a href="/bugs/${numberOfBugs+2}">pull one down, patch it around </a>`);
});

// Show Route 

app.get("/bugs/:index", (req, res) => {
    const {numberOfBugs} = req.params;

    if(numberOfBugs <= 200){
        res.send(` <h1> ${numberOfBugs} little bugs in the code </h1>
        <a href="/bugs/${numberOfBugs+2}">pull one down, patch it around </a>`);
    } else {
        res.send(` <h1> Too many bugs! </h1>
        <a href="/bugs">Start Over</a>`);
    }
});

// Multiple Parameters
app.get("bugs/:verb/:adjective/:noun", (req, res) => {
    const {verb, adjective, noun} = req.params
    res.send (`Congratulations on starting a new project called ${verb} ${adjective} ${noun}`)
})

// Routes

// app.get("/bugs/:number", (req, res) => {
//     const {}
//     res.send(``)
// });

// Index Route 

// app.get("/verb", (req, res) => {

// })

module.exports = app;