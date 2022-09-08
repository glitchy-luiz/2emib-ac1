const express = require('express')
const app = express()

const porta = process.env.PORT || 3535

app.use(express.urlencoded({extended:false}))

app.use(express.static("./assets/"))

module.exports={app,porta}