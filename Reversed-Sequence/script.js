// DESAFIO "Reverded Sequence" - Codewars
// Criar um função que retorne um array de números inteiros de n até 1, onde n > 0. ex: n=5 --> [5,4,3,2,1];


// EXPLICANDO O CÓDIGO: 
// O método 'push()' é usado para colocar valores dentro de array. Logo, não preciso 
// me preocupar em usar 'return += i', pois tem um método próprio para trabalhar com 
// atribuição de valores em arrays.

// Para mostrar que o result vai receber valores desse array, é necessário colocar '[]'
// que serve para determinar que nessa variável terá um array.

const reverseSeq = n => {
  let result = [];
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }
  return result;
};