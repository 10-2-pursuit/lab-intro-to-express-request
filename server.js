require("dotenv").config();
const app = require("./app.js");
const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = server;
