const express = require("express")
const app = express()
const pokemon = require("./models/pokemon.json")

app.get("/", (req,res)=>{
    res.send("Welcome 99 Pokemon")
})

app.get("/bugs", (req,res)=>{
    const num = 99
    res.send(`${num} little bugs in the code`+ `<br /><br />`+
             `${num} little bugs <br />`+
             `<a style="text-decoration:none;" href="/bugs/101">`+
             `Pull one down, patch it around</a><br />`+
             `${num+2} bugs in the code`)
})

app.get("/bugs/:number", (req,res)=>{
    const num = Number(req.params.number) 
    let href = ""
    let partingMessage = ""
    if(num>=200){
        href = "/bugs"
        partingMessage = `<a style="text-decoration:none;"`+
                         ` href="${href}">`+
                         `Too many bugs!! Start over!</a>`
    }
    else{
    href= `/bugs/${num+2}`
    partingMessage = `${num} little bugs in the code`+ `<br /><br />`+
                     `${num} little bugs<br />`+
                     `<a style="text-decoration:none;"`+
                     ` href="${href}">`+
                     `Pull one down, patch it around</a><br />`+
                     `${num+2} bugs in the code`   
    }
    res.send(partingMessage)   
})

app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.get("/pokemon/:index", (req,res) => {
    //console.log(req.params.index, pokemon.length, pokemon[123])
    if( pokemon[req.params.index] === undefined ||
        pokemon[req.params.index] === null )
        res.send(`Sorry, no pokemon found at ${req.params.index}`)
    else
        res.send(pokemon[req.params.index])
})

app.get("/:verb/:adj/:noun", (req,res)=>{
    res.send(`Congratulations on starting a new project called `+
             `${req.params.verb}-${req.params.adj}-${req.params.noun}!`)
})

module.exports = app