const calc = require('../models/calc')

exports.mostrarPaginaInicial = (req, res) => {
    res.render('index')
}

exports.calcularOperacao = (req, res) => {
    const {numero1, operacao, numero2} = req.body

    if (isNaN(numero1) || isNaN(numero2)) {
        return res.render('index', { erro: 'Por favor, insira valores numéricos válidos.' });
    }
    const resultado = calc.calcular(numero1, operacao, numero2);

    if (resultado === 'erro_divisao_por_zero'){
        return res.render('index', {erro: 'Não é possivel dividr por zero.'})
    }
    res.render('resultado', { resultado });
}