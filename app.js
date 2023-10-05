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
        res.send("Too many bugs!! Start over!")
    }
    res.send(`${numberOfBugs} little bugs in the code`);
});

/** pokemon */
app.get("/pokemon", (req, res) => {
    res.send(pokemon);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;
    if(Number(indexOfArray) >= pokemon.length || Number(indexOfArray) < 0){
        res.send(`Sorry, no pokemon found at ${indexOfArray}`);
    }
    res.send(pokemon[indexOfArray]);
});

app.get("/pokemon/search/:property", (req, res) => {
    const { name, img, type, stats, damages, misc } = req.query;
    const { property } = req.params;

    function nameFinder(pokeName){
        let poke = pokemon.find(singlePokemon => singlePokemon.name == pokeName);
        console.log(poke)
        if(poke == undefined){
            return "sends the Pokemon when the name exactly matches";
        }
        return poke;
    }

    if(property === "name"){
        res.send(nameFinder(name));
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