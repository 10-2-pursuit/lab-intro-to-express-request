const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/", (request, response) => {
    response.send("Hello World");
});

/** pokemon */
app.get("/pokemon", (req, res) => {
    res.send(pokemon);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;
    res.send(pokemon[indexOfArray]);
});

app.get("/pokemon/search/:property", (req, res) => {
    const { name, img, type, stats, damages, misc } = req.query;
    const { property } = req.params;

    if(property === "name"){
        res.send(pokemon.find(singlePokemon => singlePokemon.name == name));
    }
    else if(property === "img"){
        res.send()

    }
    else if(property === "stats"){
        res.send()

    }
    else if(property === "damages"){
        res.send()

    }
    else if(property === "misc"){
        res.send()

    }
    else{
        res.send()
    }
});

/** new project name generator */
app.get("/:verb/:adjective/:noun", (request, response) => {
    const { verb, adjective, noun } = request.params;
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

module.exports = app;