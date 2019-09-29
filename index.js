const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

app.get('/Clifton-Foundation/sook', (req, res) => res.send("Hello world!"))
app.get('/', (req, res) => res.send("Hello world!"))
app.get('/Clifton/carl', (req, res) => res.send("<h1>This is carl's route</h1>"))

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
