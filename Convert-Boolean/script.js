// DESAFIO "Convert boolean values to strings 'Yes' or 'No' " - Codewars
// Convert boolean values(true or false) to strings 'Yes' or 'No';

function boolToWord( bool ){
  //...
  if (bool === true) {
    return 'Yes';
  } else if (bool === false) {
    return 'No';
  }
}
console.log(boolToWord(false));