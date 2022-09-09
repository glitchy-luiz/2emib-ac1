const mongoose = require('mongoose')

const conexao = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userac1:ac1@fiaptecnico.yqfxr.mongodb.net/ac')
}

module.exports = conexao