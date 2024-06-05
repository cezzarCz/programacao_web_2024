exports.calcular = (numero1, operacao, numero2) => {
    let resultado
    const n1 = parseFloat(numero1)
    const n2 = parseFloat(numero2)


    switch (operacao) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            resultado = n1 / n2;
            break;
        default:
            resultado = 'Operação inválida';
    }
    return resultado
}