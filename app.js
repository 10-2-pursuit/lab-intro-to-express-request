const express = require("express");
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const pokemonData = require("./pokemon.json");

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