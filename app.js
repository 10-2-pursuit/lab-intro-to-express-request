const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  const projectName = `${verb}-${adjective}-${noun}`;
  res.send(`Congratulations on starting a new project called ${projectName}!`);
});

app.get("/bugs", (req, res) => {
  let numberOfBugs = 99;
  const message = `${numberOfBugs} little bugs in the code`;
  const link = "pull one down, patch it around";
  res.send(`${message} <br> <a href="/bugs/${numberOfBugs + 2}"> ${link} </a>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  const bugs = Number(numberOfBugs);

  if (numberOfBugs < 200) {
    res.send(`${bugs} little bugs in the code\n<a href="/bugs/${bugs + 2}">Pull one down, patch it around</a>`);
  } else {
    const link = "Too many bugs!! Start over!";
    res.send(`<a href="/bugs"> ${link} </a>`);
  }
});

const pokemon = require("./models/pokemon.json");

app.get("/pokemon", (req, res) => {
  res.json(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const foundPokemon = pokemon.filter(poke => poke.name.toLowerCase() === name.toLocaleLowerCase());

  if(foundPokemon.length > 0) {
    res.json(foundPokemon);
  } else {
    res.json([]);
  }
});

app.get("/pokemon/:index", (req, res) => {
    const {index} = req.params;

    if(pokemon[index]) {
        res.send(pokemon[index]);
    } else {
        res.send(`Sorry, no pokemon found at ${index}`);
    }
})

module.exports = app;
