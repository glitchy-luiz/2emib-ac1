module.exports = (app)=>{
    app.get('/login',(req,res)=>{
        res.render('login.ejs')
    })

    app.post('/login',async(req,res)=>{
        const conexao = require('../config/database')()
        const usuarios = require('../models/usuarios')
        var procurar = await usuarios.findOne({email:req.body.email})
        if(!procurar){
            return res.send('Email não cadastrado!!')
        }
        const bcrypt = require('bcryptjs')
        var comparar = await bcrypt.compare(req.body.senha,procurar.senha)
        if(!comparar){
            return res.send("Senha incorreta")
        }
        //res.redirect('/atividades?id='+procurar._id)
    })
}