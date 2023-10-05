const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/", (request, response) => {
    response.send("Welcome 99 Pokemon");
});

/** 99 bugs */
app.get("/bugs", (req, res) => {
    res.send("99 little bugs in the code");
});

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params;
    if(Number(numberOfBugs) >= 200){
        res.send(`<a href="/bugs/">Too many bugs!! Start over!</a>`)
    }
    res.send(`${numberOfBugs} little bugs in the code\n <a href="/bugs/${String(Number(numberOfBugs)+2)}">Pull one down\, patch it around\n</a>`);
});

/** pokemon */
app.get("/pokemon", (req, res) => {
    res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
    const name = req.query.name;

    let poke = pokemon.filter((singlePokemon) => {return singlePokemon["name"].toLowerCase() == name.toLowerCase()});

    res.send(poke || []);
    
});

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;
    if(Number(indexOfArray) >= pokemon.length || Number(indexOfArray) < 0){
        res.send(`Sorry, no pokemon found at ${indexOfArray}`);
    }
    res.send(pokemon[indexOfArray]);
});

/** new project name generator */
app.get("/:verb/:adjective/:noun", (request, response) => {
    const { verb, adjective, noun } = request.params;
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

module.exports = app;