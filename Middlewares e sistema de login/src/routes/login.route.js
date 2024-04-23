const { Router } = require('express');
const { sign } = require('jsonwebtoken');
const Usuario = require('../models/Usuario');



const loginRoutes = new Router();


loginRoutes.post('/', async (req, res) => {

    try {

        const email = req.body.email
        const senha = req.body.senha

        if (!email) {

            return res.status(400).json({ message: "O email é obrigatório." })
        }

        if (!senha) {

            return res.status(400).json({ message: "O senha é obrigatório." })
        }

        
        const usuario = await Usuario.findOne({
            where: {
                email:email,
                senha:senha
            }
        })

        if(!usuario){
            return res.status(404).json({ message: "Não existe usuário com email e senha informado!" })
        }

        const payload = {sub: usuario.id, email: usuario.email, nome: usuario.nome}

        const token = sign(payload, process.env.SECRET_JWT)


        res.status(200).json({Token: token})

    } catch (error) {

        console.log(error.message)
        return res.status(500).json({ error: error, message: "Algo inesperado aconteceu" })
    }

    
})

module.exports = loginRoutes