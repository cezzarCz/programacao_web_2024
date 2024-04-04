let A = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  
function matrizTransposta(A) {
  let AT = [];
  for (let i = 0; i < A[0].length; i++) {
    AT[i] = [];
    for (let j = 0; j < A.length; j++) {
      AT[i][j] = A[j][i];
    }
  }
  return AT;
}

let AT = matrizTransposta(A);
console.log("Matriz Original:");
console.log(A);
console.log("Matriz Transposta:");
console.log(AT);
  