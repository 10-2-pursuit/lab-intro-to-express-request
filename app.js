const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.json');
console.log(pokemon[0]);

// Route for /:verb/:adjective/:noun
app.get('/:verb/:adjective/:noun', (req, res) => {
  const { verb, adjective, noun } = req.params;
  const projectName = `${verb}-${adjective}-${noun}`;
  const response = `Congratulations on starting a new project called ${projectName}!`;
  res.send(response);
});


// Middleware to measure response time
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} (${duration} ms)`);
  });
  next();
});

// Route for the welcome message
app.get('/', (req, res) => {
  res.send('Welcome 99 Pokemon');
});

// Route for /bugs
app.get('/bugs', (req, res) => {
  const { numberOfBugs } = '99';
  res.send(`<h1>99 little bugs in the code</h1>
  <a href="99">Pull one down, patch it around</a>
`);
});

// Route for /bugs/:numberOfBugs
app.get('/bugs/:numberOfBugs', (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs < 200) {
    res.send(`
      <h1>${numberOfBugs} little bugs in the code</h1>
      /href.*201.*Pull one down\, patch it around/
    `);
  } else if (numberOfBugs.includes("201")) { // Check if numberOfBugs contains "201"
    res.send(`
      <h1>${numberOfBugs} little bugs in the code</h1>
      /href.*201.*Pull one down\, patch it around/
      <p>Special link for 201!</p>
    `);
  } else {
    res.send(`
      <a href="/bugs"><h1>Too many bugs!! Start over!</h1></a>
    `);
  }
});

 
// Route for /pokemon
app.get('/pokemon', (req, res) => {
  res.json(pokemon);
});

// Route for /pokemon/search
app.get('/pokemon/search', (req, res) => {
  const { name, type, classification } = req.query;

  // Create a function to check if a Pokemon matches the search criteria
  const isMatch = (pokemon) => {
    const matchesName = !name || pokemon.name.toLowerCase().includes(name.toLowerCase());
    const matchesType = !type || pokemon.type.includes(type);
    const matchesClassification = !classification || pokemon.misc.classification.toLowerCase().includes(classification.toLowerCase());

    return matchesName && matchesType && matchesClassification;
  };

  const matchingPokemon = pokemon.filter(isMatch);

  // Check if there are no matching Pokemon
  if (matchingPokemon.length === 0) {
    // Send an empty array as a response
    res.json([]);
  } else {
    // Send the matching Pokemon as JSON
    res.json(matchingPokemon);
  }
});



// Route for /pokemon/:index
app.get('/pokemon/:index', (req, res) => {
  const { index } = req.params;
  const pokemonIndex = parseInt(index);

  if (pokemonIndex >= 0 && pokemonIndex < pokemon.length) {
    res.json(pokemon[pokemonIndex]);
  } else {
    res.status(404).send(`Sorry, no pokemon found at ${index}`);
  }
});


  /*
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
  */

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
      res.status(404).send(`Sorry, no Pokemon found at ${indexOfArray}`);
    }
  });
  
  
  
  
  /*
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
*/


module.exports = app;


