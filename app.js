const express = require("express");
const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  const projectName = `${verb}-${adjective}-${noun}`;
  res.send(
    `Congratulations on starting a new project called jumping-joyous-jellybean!`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const numberOfBugs = parseInt(req.params.numberOfBugs);

  if (numberOfBugs > 200) {
    res.send(`<p>Too many bugs! <a href="/bugs">Start over</a></p>`);
  } else {
    const nextBugs = numberOfBugs + 2;
    res.send(`<p>${numberOfBugs} little bugs in the code</p>
    <a href="/bugs/${nextBugs}"> pull one down, patch it around</a>`);
  }
});

app.get("/bugs", (req, res) => {
  res.send(`
  <p>99 little bugs in the code</p>
  <a href="/bugs/101">pull one down, patch it around</a>`);
});

app.get("/pokemon", (req, res) => {
  res.json(pokemonData);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const indexOfArray = parseInt(req.params.indexOfArray);
  if (
    isNaN(indexOfArray) ||
    indexOfArray < 0 ||
    indexOfArray >= pokemonData.length
  ) {
    res.status(404).send(`Sorry, no pokemon found at /pokemon/${indexOfArray}`);
  } else {
    res.json(pokemonData[indexOfArray]);
  }
});

app.get("/pokemon/search", (req, res) => {
  const nameToSearch = req.query.name;

  if (!nameToSearch) {
    res.status(400).send("Please provide a name query parameter");
  } else {
    const foundPokemon = pokemonData.find(
      (pokemon) => pokemon.name.toLowerCase() === nameToSearch.toLowerCase()
    );

    if (foundPokemon) {
      res.json(foundPokemon);
    } else {
      res.status(404).send(`No pokemon found with name: ${nameToSearch}`);
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
