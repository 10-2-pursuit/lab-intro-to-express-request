const express = require("express");
const app = express();

const dotenv = require('dotenv');

dotenv.config();

app.get("/bugs", (req,res) => {
    const bugsLeft = 99;
    const linkText = "pull one down, patch it around"
  res.send(`<p>${bugsLeft} little bugs in the code</p>
  <a href='/bugs/${bugsLeft + 2}'>${linkText}</a>`);
});




module.exports = app;