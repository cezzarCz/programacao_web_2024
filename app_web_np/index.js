const express = require('express')
const math = require("./util/matematica")
const app = express()
const PORT = 8080

app.get('/', function(req, res){
    res.send("Pagina Inicial")
})

app.get('/ola', function(req, res){
    res.send('Ola, Mundo!')
})


app.get('/ola/:n', function(req, res){
    let n = req.params.n
    res.send("Ola Mundo " + n)
})

app.get('/verifica-num-primo/:n', function(req, res){
    let n = req.params.n
    let primo = math.verificaNumPrimo(n)
    res.send(primo)
})

app.listen(PORT, function(){
    console.log('App rodando na porta ' + PORT)
})