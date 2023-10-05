const express = require("express");
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const pokemonData = require("./pokemon.json");

app.get("/pokemon", (req, res) => {
    res.json(pokemonData);
});

app.get("/pokemon/:indexOfArray", (req, res)=> { const indexOfArray = req.params.indexOfArray;
    const pokemon = pokemonData[indexOfArray];
    if(!pokemon) {
        res.status(404).send('Sorry no pokemon found at /pokemon/${indexOfArray}');
    } else {
        res.json(pokemon);
    }
})

app.get("/bugs", (req,res) => {
    const bugsLeft = 99;
    const linkText = "pull one down, patch it around"
  res.send(`<p>${bugsLeft} little bugs in the code</p>
  <a href='/bugs/${bugsLeft + 2}'>${linkText}</a>`);
});

const numberOfBugs = parseInt(req.params.numberOfBugs)
;
const linkText = numberOfBugs <= 200 ? "pull one down, patch it around" : "start over";

res.send(`<p>${numberOfBugs} little bugs in the code</p>
<a href="/bugs/${numberOfBugs + 2}">${linkText}</a>
`);



module.exports = app;