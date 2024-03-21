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


console.log(verificaNumPrimo(0))//false
console.log(verificaNumPrimo(1))//false
console.log(verificaNumPrimo(2))//true
console.log(verificaNumPrimo(3))//true
console.log(verificaNumPrimo(7))//true
console.log(verificaNumPrimo(83))//true
console.log(verificaNumPrimo(100))//false
console.log(verificaNumPrimo(991))//true
console.log(verificaNumPrimo(104729))//true
console.log(verificaNumPrimo(14348907))//false
