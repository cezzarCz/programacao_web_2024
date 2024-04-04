function verificaNumPrimo(n){
    if (n <= 1) {
        return false    
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false
            }
        }
        return true
    }
}

module.exports = {
    verificaNumPrimo
}