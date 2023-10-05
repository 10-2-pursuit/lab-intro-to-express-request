const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.send("Hello World!!!")
})

app.get("/:verb/:adj/:noun", (req,res)=>{
    res.send(`Congratulations on starting a new project called `+
             `${req.params.verb}-${req.params.adj}-${req.params.noun}!`)
})

module.exports = app