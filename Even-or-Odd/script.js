
// DESAFIO "Even or Odd" - Codewars.
// Criar uma função que receba como argumento um número inteiro e retorne "Even" se for par e "Odd" para ímpar. 

let evenOrOdd = (number) => {
    let result = '';
    number % 2 === 0 ? result = "Even" : result = "Odd";
    return result;
};
console.log(evenOrOdd(50));
console.log(evenOrOdd(23));

/* 
OUTRA FORMA DE FAZER:
function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(50));
*/
