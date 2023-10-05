const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.json');
console.log(pokemon[0]);

const PORT = process.env.PORT || 8888;

app.get('/:verb/:adjective/:noun', (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

app.get('/bugs', (req, res) => {
    res.send('99 little bugs in the code <a href="/bugs/101"> pull one down, patch it around</a>');
});

app.get('/bugs/:numberOfBugs', (req, res) => {
    const numberOfBugs = parseInt(req.params.numberOfBugs);
    if (numberOfBugs > 200) {
    res.send(`{$numberOfBugs} little bugs in the code <a href="/bugs">Start Over</a>`);
} else {
    res.send(`${numberOfBugs} little bug in the code <a href="/bugs/${numberOfBugs +2}">pull one down, patch it around</a>`);
}
});

app.get('/pokemon', (req, res) => {
    const pokemonList = pokemon.map((p, index)  => `<li><a href="/pokemon/${index}">${p.name}</a></li>`).join("");
    res.send(`
        <style>
        body {
            font-family: sans-serif;
        }
        li,h1 {
            color: blue;
        }
    </style>
    <h1>Pyritmon</h1>
    <ul>${pokemonList}</ul>
    `);
});

app.get('/pokemon/search', (req, res) => {
    const { name } = req.query;
    const foundPokemon = pokemon.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (foundPokemon) {
        res.json(foundPokemon);
    } else {
        res.send(`Pokemon not found`);
    }
});

app.get('/pokemon/:indexOfArray', (req, res) => {
    const index = parseInt(req.params.indexOfArray);
    if (isNaN(index)) {
        res.send("The index provided is not a valid number.");
        return;
    }

    if (pokemon[index]) {
        const p = pokemon[index];
        res.send(`
        <style>
        body {
            font-family: sans-serif;
        }
        h1 {
            color: red;
        }
    </style>
        <h1>${p.name}</h1>
        <img src="${p.img}" alt="${p.name}">
        <p>Type: ${p.type.join(', ')}</p>
        <p>Hp: ${p.stats.hp}</p>
        `);
    } else {
        res.send(`Sorry, no Pokemon found at /pokemon/${index}`);
    }
});


module.exports = app;
