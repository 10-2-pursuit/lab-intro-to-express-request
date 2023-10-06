const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  const projectName = `${verb}-${adjective}-${noun}`;
  res.send(`Congratulations on starting a new project called ${projectName}`);
});

let numberOfBugs = 99;

app.get("/bugs", (req, res) => {
  const message = `${numberOfBugs} little bugs in the code`;
  const link = "pull one down, patch it around";
  res.send(`${message} <br> <a href="/bugs/${numberOfBugs + 10}"> ${link} <a/>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  const bugs = parseInt(numberOfBugs);

  if (numberOfBugs > 200) {
    const link = "start over"
    res.send(`<a href="/bugs"> ${link} <a/>`);
  } else {
    const message = `${bugs} little bugs in the code`;
    const link = "pull one down, patch it around";
    res.send(`${message} <br> <a href="/bugs/${bugs + 10}"> ${link} <a/>`);
  }
});

const pokemon = require("./models/pokemon.json");

app.get("/pokemon", (req, res) => {
    const pokemonNames = pokemon.map(poke => poke.name);
    const pokemonList = pokemonNames.map(name => `<li>${name}</li>`).join("");
    res.send(`<ul>${pokemonList}</ul>`)
})

module.exports = app;
