const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    nome:String,
    email:String,
    senha:String
})

const usuarios = mongoose.model('usuarios',modelo)

module.exports = usuarios