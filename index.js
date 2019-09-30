const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

app.get('/hannah', (req, res) => res.send("heyo it's hannah"))

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
