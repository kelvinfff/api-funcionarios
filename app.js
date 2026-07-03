const express = require("express")

const app = express()

app.use(express.json())

//banco de dados em memória
const funcionarios = []
//rota pra cadastrar
app.post("/funcionarios",(req,res)=>{
    const {nome, cargo} = req.body
    const funcionario = {
        nome,
        cargo
    }
    funcionarios.push(funcionario)
    res.status(201).json(funcionario)
})
//rota pra mostrar os funcionários
app.get("/funcionarios",(req,res)=>{
    res.status(200).json(funcionarios)
})

module.exports = app