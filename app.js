const express = require("express");
const app = express();

const pokemon = require("./models/pokemon.json");

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
  res.send(
    `<h1>99 little bugs in the code</h1>
    <span>99 little bugs in the code,</span>
    <span>99 little bugs,</span>
    <a href="/bugs/101">
        <span>pull one down,</span>
        <span>patch it around,</span>
    </a>
    <span>101 bugs in the code.</span>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  if (req.params.numberOfBugs <= 199) {
    res.send(
      `
      ${parseInt(req.params.numberOfBugs)} little bugs in the code
        <a href="/bugs/${
          parseInt(req.params.numberOfBugs) + 2
        }">Pull one down, patch it around</a>
      `
    );
  } else {
    res.send(`<h1>Too many bugs!! Start over!</h1>`);
  }
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  let r = pokemon.filter((entry) => {
    return (
      entry.name.trim().toLowerCase() === req.query.name.trim().toLowerCase()
    );
  });
  console.log(r);
  res.send(r);
});

app.get("/pokemon/:index", (req, res) => {
  if (pokemon[req.params.index]) {
    res.send(pokemon[req.params.index]);
  } else {
    res.send(`Sorry, no pokemon found at ${req.params.index}`);
  }
});

app.get("/:gerund/:adjective/:noun", (req, res) => {
  res.send(
    `Congratulations on starting a new project called ${req.params.gerund}-${req.params.adjective}-${req.params.noun}!`
  );
});

module.exports = app;
