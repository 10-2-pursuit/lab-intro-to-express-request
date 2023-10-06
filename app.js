const express = require("express");
const app = express();


const pokemonData = require("./models/pokemon.json");


app.get("/pokemon", (req, res) => {
  res.json(pokemonData);
});


app.get("/pokemon/search", (req, res) => {
  const nameToSearch = req.query.name;
   console.log("nameToSearch:", nameToSearch);
  const foundPokemon = pokemonData.find(
    (pokemon) => pokemon.name.toLowerCase() === nameToSearch.toLowerCase()
  );

  if (!foundPokemon) {
    res.status(404).send(`Sorry, no pokemon found with name '${nameToSearch}'`);
  } else {
res.json({name:foundPokemon.name,
        img: foundPokemon.img,
        type: foundPokemon.type,
        stats: foundPokemon.stats,
        damages: foundPokemon.damages,
        misc: foundPokemon.misc,
      });
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const indexOfArray = parseInt(req.params.indexOfArray);

  if (isNaN(indexOfArray)|| indexOfArray < 0 || indexOfArray >= pokemonData.length) {
      res.status(404).send(`Sorry, no pokemon found at /pokemon/${indexOfArray}`);
    } else {
      const pokemon = pokemonData[indexOfArray];
    res.json(pokemon);
  }
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  const projectName = `${verb}-${adjective}-${noun}`;
  res.send(`Congratulations on starting a new project called ${projectName}!`);
});


app.get("/bugs/:numberOfBugs", (req, res) => {
  const numberOfBugs = parseInt(req.params.numberOfBugs);
  
  const linkText =
  numberOfBugs <= 200 ? "pull one down, patch it around" : "start over";
  
  res.send(`<p>${numberOfBugs} little bugs in the code</p>
  <a href="/bugs/${numberOfBugs + 2}">${linkText}</a>
  `);
});


app.get("/bugs", (req, res) => {
  const bugsLeft = 99;
  const linkText = "pull one down, patch it around";
  res.send(`<p>${bugsLeft} little bugs in the code</p>
  <a href='/bugs/${bugsLeft + 2}'>${linkText}</a>`);
});


module.exports = app;
