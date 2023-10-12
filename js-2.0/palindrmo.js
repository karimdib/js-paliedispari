let word = prompt('insersisci una parola')

let parolaInvertita = wordInverse(word);

function wordInverse(str){
    let  strInvertita = str.split('').reverse().join('');  
    return strInvertita;
  }

if(word == parolaInvertita){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  
