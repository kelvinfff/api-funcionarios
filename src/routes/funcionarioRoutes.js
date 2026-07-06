const express = require("express")
const router = express.Router()
const controller = require("../controllers/funcionarioController")

console.log("Rotas carregadas");

router.get("/funcionario", controller.listar)
router.post("/funcionario", controller.cadastrar)

module.exports = router