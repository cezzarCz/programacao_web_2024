const express = require('express')
const app = express()
const calc = require('./util/calculadora')
const PORTA = 8080

app.get('/somar/:a/:b', function(req, res) {
    let x = req.params.a
    let y = req.params.b
    let soma = calc.somar(x, y)
    res.send(`${x} + ${y} = ${soma}`)
})
app.get('/subtrair/:a/:b', function(req, res) {
    let x = req.params.a
    let y = req.params.b
    let soma = calc.subtrair(x, y)
    res.send(`${x} - ${y} = ${soma}`)
})
app.get('/multiplicar/:a/:b', function(req, res) {
    let x = req.params.a
    let y = req.params.b
    let soma = calc.multiplicar(x, y)
    res.send(`${x} * ${y} = ${soma}`)
})
app.get('/dividir/:a/:b', function(req, res) {
    let x = req.params.a
    let y = req.params.b
    let soma = calc.dividir(x, y)
    res.send(`${x} / ${y} = ${soma}`)
})

app.listen(PORTA, function(){
    console.log('App rodando na porta ' + PORTA)
})