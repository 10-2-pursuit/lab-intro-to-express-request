const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

app.get("/bugs", (req, res) => {
    const combine = `
    <h1>99 little bugs in the code</h1>
    <a href="localhost:8888/bugs/">pull one down, patch it around</a>
`

    res.send(combine)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params

    let combine = `
    <h1>${numberOfBugs} little bugs in the code</h1>
`

    if(numberOfBugs >= 200){
        combine += "<p>Too many bugs!! Start over!</p>"
    } else {
        combine += `<a href="localhost:8888/bugs/${Number(numberOfBugs)+2}">Pull one down, patch it around</a>`
    }

    res.send(combine)
})

app.get("/pokemon", (req, res) => {
    let pokemon = require("./models/pokemon.json")
    res.send(pokemon)
})

app.get("/pokemon/search", (req, res) => {
    const name = req.query.name

    let pokemon = require("./models/pokemon.json")
    
    result = pokemon.filter((poke) => {return poke['name'].toLowerCase() == name.toLowerCase()})

    res.send(result || [])
})



app.get("/pokemon/:index", (req, res) => {
    const { index } = req.params

    let pokemon = require("./models/pokemon.json")

    res.send(pokemon[index] || `Sorry, no pokemon found at ${index}`)
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    const {verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})






module.exports = app;