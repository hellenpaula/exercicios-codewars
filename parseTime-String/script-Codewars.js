
// CÓDIGO PADRÃO ENVIADO PARA A PLATAFORMA CODEWARS, COM A RESOLUÇÃO DE EXERCÍCIO;

// // PASSOS:
// verificar se o valor é vazio ou null, se sim, return null;
// verificar se o valor é inválido, se sim, return null;

// Para validar:
//  verifique se possui a estrutura correta, se possui: dois dígitos e dois pontos(xx:xx:xx);
// verificar se há apenas números na hora, minutos e segundos; talvez precise separar em partes(split);
// se sim, faça a conversão para o horário padrão em 24 horas, 

// INÍCIO:
function timeCorrect(timeString) {

//   verificação de valor = 'null';
    if (timeString === null)  {
        return null;   
      
//    verificação de valor = '' -> vazio;
    } else if (timeString === "") {
      return "";
      
//    se timeString for = true -> válido;
    } else if (timeString){

//    criando o regex para a estrutura padrão do horário (xx:xx:xx);
   let regex = /^\d{2}:\d{2}:\d{2}$/; 

//    verificando se a hora(timeString) fornecida está dentro da estrutura padrão, se test for true,
//    execute o bloco;
   let teste = regex.test(timeString);
   if (teste === true) {

//    separando os valores entre os dois pontos(:) da string hora(timeString), usando o método '.split';
      let separandoValores = timeString.split(":");
    
//    pegando cada valor separadamente de dentro do array, convertendo para números e atribuindo a uma var; 
      let horas = Number(separandoValores[0]);

      let minutos = Number(separandoValores[1]);

      let segundos = Number(separandoValores[2]);

//    verificando se os valores respeitam ou não o padrão de 24 horas(23:59:59). E se caso não respeite,
//    faça as conversões necessárias;
     
//    se segundos passar de 59:
//        -divida segundos por 60(ms); 
//        -minutos recebe +1;
    if (segundos > 59 ) {
        segundos = segundos%60;
        minutos += 1;
      
//    se minutos passarem de 59:
//        -divida minutos por 60(s);
//        -horas recebe +1;
    }  if (minutos > 59 ){
        minutos = minutos%60;
        horas += 1;
    
//    se horas passarem de 23:
//        -divida horas por 24(h);
    } if (horas > 23) {
        horas = horas % 24;

    }

//    se horas, minutos ou segundos forem menor que 10, concatene uma string '0' antes do valor;
    if (horas < 10) {
        horas = `0`+ horas;
    } if (minutos < 10) {
        minutos = `0`+ minutos;
    } if (segundos < 10 ) {
        segundos = `0`+ segundos;
    }

//    colocando os valores dentro de um array;      
    let array = [horas, minutos, segundos];
     
//    juntando os elementos com dois pontos(:) entre cada valor para retornar a estrutura padrão
//    e  passando essa estrutura para String novamente;
    let arrayParseString = String(array.join(":"));

//    retornando a string(timeString) com a estrutura correta, dentro do padrão 24 horas;
      return arrayParseString;
     
} else {
//    se a var timeString não passar no teste do regex(a estrutura estiver errada), o return deve ser null;
  return null;
}
      
//    se a var timeString for inválida, return null;
    } else {
      return null;
    };
}

// Chamada da função para teste;
console.log(timeCorrect("11:70:10"));
console.log(timeCorrect("19:99:09"));
console.log(timeCorrect("19:99:99"));
console.log(timeCorrect("52:01:01"));
console.log(timeCorrect("24:01:01"));

