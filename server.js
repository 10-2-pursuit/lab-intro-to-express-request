const app = require("./app.js")

require("dotenv").config()
const port= process.env.PORT || 8888;

app.listen(port, () => {
  console.log(`Listening for requests on port ${port}`)
});