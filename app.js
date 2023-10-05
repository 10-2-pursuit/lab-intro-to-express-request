const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.send("Hello World!!!")
})

app.get("/:verb/:adj/:noun", (req,res)=>{
    res.send(`Congratulations on starting a new project called `+
             `${req.params.verb}-${req.params.adj}-${req.params.noun}!`)
})

app.get("/bugs", (req,res)=>{
    const num = 99
    res.send(`${num} little bugs in the code`+ `<br /><br />`+
             `${num} little bugs <br />`+
             `<a style="text-decoration:none;" href="/bugs/101">`+
             `pull one down<br />patch it around</a><br />`+
             `${num+2} bugs in the code`)
})

app.get("/bugs/:number", (req,res)=>{
    const num = Number(req.params.number) 
    let href = ""
    let partingMessage = ""
    if(num+2>200){
        href = "/bugs"
        partingMessage = `${num} little bugs in the code`+ `<br /><br />`+
                         `${num} little bugs<br />`+
                         `pull one down<br/ >patch it around</a><br />`+
                         `${num+2} bugs in the code<br />` +
                         `<a style="text-decoration:none;"`+
                         ` href="${href}">`+
                         `start over<br /><br />`
    }
    else{
    href= `/bugs/${num+2}`
    partingMessage = `${num} little bugs in the code`+ `<br /><br />`+
                     `${num} little bugs<br />`+
                     `<a style="text-decoration:none;"`+
                     ` href="${href}">`+
                     `pull one down<br/ >patch it around</a><br />`+
                     `${num+2} bugs in the code`   
    }
    res.send(partingMessage)   
})

module.exports = app