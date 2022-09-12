module.exports = (app)=>{
    const bcryptjs = require('bcryptjs')

    app.get('/cadastro',(req,res)=>{
        res.render('cadastro.ejs')
    })

    app.post('/cadastro',async(req,res)=>{
        var dados = req.body
        const conexao = require('../config/database')()
        const usuarios = require('../models/usuarios')
        var procurar = await usuarios.findOne({email:dados.email})
        if(procurar){
            return res.send("email já cadastrado")
        }
        var senhasegura = await bcryptjs.hash(dados.senha,10)
        console.log(senhasegura)
        var documento = await new usuarios({
            nome:dados.nome,
            email:dados.email,
            senha:senhasegura
        }).save()
        res.redirect('/login')
    })
}