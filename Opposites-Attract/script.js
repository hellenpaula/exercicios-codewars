
// DESAFIO "Opposites Attract" - Codewars
// Crie uma função que receba dois valores(quantidade de pétalas de 2 flores), se um valor for par e o outro for ímpar -> return true(estão apaixonados), se não -> return false.


// EXPLICAÇÃO DO CÓDIGO:
//  Como o desafio diz que para ser 'true', os números precisam ser: um par e um ímpar, 
// usei a lógica de que se forem 2 números pares ou 2 números ímpares o return = false
// se não return = true;
//

function lovefunc(flower1, flower2){
  // moment of truth
  if ((flower1 % 2 ===0) && (flower2 % 2 ===0) || (flower1 % 2 !== 0) && (flower2 % 2 !== 0)) {
    return false;
  } else {
    return true;
  };
};