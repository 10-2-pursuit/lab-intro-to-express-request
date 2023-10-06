const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.json');
console.log(pokemon[0]);

app.get('/bugs', (req, res) => {
  const numberOfBugs = 99;
  res.send(`
    <h1>${numberOfBugs} little bugs in the code</h1>
    <a href="/bugs/${numberOfBugs + 2}">pull one down, patch it around</a>
  `);
});

app.get('/bugs/:numberOfBugs', (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs <= 200) {
    res.send(`
      <h1>${numberOfBugs} little bugs in the code</h1>
      <a href="/bugs/${Number(numberOfBugs) + 2}">pull one down, patch it around</a>
    `);
  } else {
    res.send(`
      <h1>Too many bugs!</h1>
      <a href="/bugs">Start over</a>
    `);
  }
});

app.get('/pokemon', (req, res) => {
    res.json(pokemon);
  });
  
  // Route to get a specific Pokemon by index in the array
  app.get('/pokemon/:indexOfArray', (req, res) => {
    const { indexOfArray } = req.params;
    const index = parseInt(indexOfArray);
  
    if (index >= 0 && index < pokemon.length) {
      res.json(pokemon[index]);
    } else {
      res.status(404).send(`Sorry, no Pokemon found at /pokemon/${indexOfArray}`);
    }
  });
  
  // Route to search for a Pokemon by name
  app.get('/pokemon/search/:name', (req, res) => {
    const { name } = req.query;
    const foundPokemon = pokemon.find((p) => p.name.toLowerCase() === name.toLowerCase());
  
    if (foundPokemon) {
      res.json(foundPokemon);
    } else {
      res.status(404).send(`Sorry, no Pokemon found with the name "${name}"`);
    }
  });
  

  const { generatePokemonListHTML, generatePokemonDetailsHTML } = require('./htmlResponse');

  // Route to get a list of all the Pokemon as HTML
  app.get('/pokemon-pretty', (req, res) => {
    const htmlResponse = generatePokemonListHTML(pokemon);
    res.send(htmlResponse);
  });
  
  // Route to get details of a specific Pokemon as HTML
  app.get('/pokemon-pretty/:indexOfArray', (req, res) => {
    const { indexOfArray } = req.params;
    const index = parseInt(indexOfArray);
  
    if (index >= 0 && index < pokemon.length) {
      const htmlResponse = generatePokemonDetailsHTML(pokemon[index]);
      res.send(htmlResponse);
    } else {
      res.status(404).send(`Sorry, no Pokemon found at /pokemon-pretty/${indexOfArray}`);
    }
  });
  
  
// Route to search for Pokemon by type
app.get('/pokemon/type/:type', (req, res) => {
  const searchType = req.params.type.toLowerCase();
  const matchingPokemon = pokemonData.filter((pokemon) => {
    return pokemon.type.includes(searchType);
  });

  if (matchingPokemon.length > 0) {
    res.json(matchingPokemon);
  } else {
    res.status(404).json({ error: 'No Pokemon found with that type.' });
  }
});


    

  // Route for searching Pokemon by classification
app.get('/pokemon/search', (req, res) => {
  const { classification } = req.query;

  // Filter Pokemon data based on the classification query
  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.misc.classification.toLowerCase().includes(classification.toLowerCase())
  );

  if (filteredPokemon.length === 0) {
    return res.status(404).json({ message: 'No Pokemon found with the given classification.' });
  }

  res.json(filteredPokemon);
});


module.exports = app; 