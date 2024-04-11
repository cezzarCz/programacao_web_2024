const express = require('express')
const estoque = require('./src/estoque')
const app = express()
const PORTA = 8080

app.get('/adicionar/:id/:nome/:qtd', function(req, res) {
    let id = req.params.id
    let nome = req.params.nome
    let qtd = req.params.qtd
    let p = estoque.criarProduto(id, nome, qtd)
    estoque.adicionarProdutos(p)
    res.send(p)
})

app.get('/listar', function(req, res){
    res.send(estoque.listaProdutos())
})

app.listen(PORTA, function() {
    console.log('App rodando na porta ' + PORTA)
})