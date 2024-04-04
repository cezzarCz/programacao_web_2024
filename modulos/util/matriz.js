function matrizTransposta(A) {
    let AT = [];
    for (let i = 0; i < A[0].length; i++) {
      AT[i] = [];
      for (let j = 0; j < A.length; j++) {
        AT[i][j] = A[j][i];
      }
    }
    console.log(A)
    console.log(AT);
}


module.exports = {
    matrizTransposta
}