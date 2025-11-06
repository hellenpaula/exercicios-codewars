
// CÓDIGO COM A LÓGICA CRIADA NA IDE, PARA SER USADA NA RESOLUÇÃO DE EXERCÍCIO 'Correct the time-string' - Codewars ; 


// CRIANDO A PARTE DA LÓGICA DE SEPARAÇÃO E VERIFICAÇÃO:
// let time = "24:01:01";
// let separandoValores = time.split(":");

// console.log(separandoValores);
// let horas = Number(separandoValores[0]);
// console.log(horas);

// let minutos = Number(separandoValores[1]);
// console.log(minutos);

// let segundos = Number(separandoValores[2]);
// console.log(segundos );
//     if (segundos > 59 ) {
//         segundos = segundos%60;
//         minutos += 1;
//         console.log(`:${minutos}:${segundos}`);
//     }  if (minutos > 59 ){
//         minutos = minutos%60;
//         horas += 1;
//         console.log(`${horas}:${minutos}:${segundos}`);
//     } if (horas > 23) {
//         horas = horas % 24;
//         console.log(`${horas}:${minutos}:${segundos}`);
//     }

//     // console.log(`${horas}:${minutos}:${segundos}`);
//     if (horas < 10) {
//         horas = `0`+ horas;
//     } if (minutos < 10) {
//         minutos = `0`+minutos;
//     } if (segundos < 10 ) {
//         segundos = `0`+segundos;
//     }
//     let array = [horas, minutos, segundos];
//     let arrayParseString = String(array.join(":"));
//     console.log(arrayParseString);
// FIM DA LÓGICA;

// TESTANDO LÓGICA PARA A CONVERSÃO DOS VALORES:

// caso o valor em segundos seja 70;

// let valor = 70 /60;
// let arredondamento = Math.floor(valor);
// console.log(`valor: ${arredondamento}`);

// let resto = 70 % 60;
// console.log(`resto: ${resto}`);
// console.log(Math.floor(valor));

// // juntando novamente os valores:
// console.log(arredondamento+`:`+resto);

