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
    res.send(`${numberOfBugs} little bugs in the code`)
    <a href="/bugs/:numberOfBugs+2">pull one down, patch it around</a>
})

// Show Route 

app.get("/bugs/:index", (req, res) => {
    const 
})

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