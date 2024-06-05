const express = require('express')
const router = express.Router()
const calcController = require('../controller/calcController')

//Rotas
router.get('/', calcController.mostrarPaginaInicial)
router.post('/calcular', calcController.calcularOperacao)

module.exports = router