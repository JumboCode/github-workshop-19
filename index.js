const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

app.get('/Clifton-Foundation/sook', (req, res) => res.send("Hello world!"))
 
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

  
