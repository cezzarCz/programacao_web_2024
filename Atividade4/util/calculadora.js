function somar(a, b) {
    
    return Number(a) + Number(b)
}

function subtrair(a, b) {
    
    return Number(a) - Number(b)
}

function multiplicar(a, b) {
    
    return Number(a) * Number(b)
}

function dividir(a, b) {
    if (b > 0){
        return Number(a) / Number(b)
    } else{
        return "Não é possível dividir por zero."
    }
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}