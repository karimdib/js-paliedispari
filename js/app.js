// PARI E DISPARI

const requestUser = prompt('scegli pari o dispari')
let userNumber
if (requestUser === 'pari'){
    userNumber = parseInt(prompt('inserisci un numero da 1 a 5'))
    console.log(userNumber)
}else if(requestUser === 'dispari'){
    userNumber = parseInt(prompt('inserisci un numero da 1 a 5'))
    console.log(userNumber)
}else{
    console.log(prompt('Rinserisci pari o dispari'))
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + 1 );
  }

const pcNumber = getRandomInt(1, 6)
console.log(pcNumber)

const sumNumber = pcNumber + userNumber
console.log(sumNumber)

function isEven(num, userChoice) {
    if (num % 2 === 0 && userChoice === 'pari') {
        console.log('Hai vinto!');
    } else if (num % 2 !== 0 && userChoice === 'dispari'){
        console.log('Hai vinto')
    }else {
        console.log('Hai perso.');
    }
}

isEven(sumNumber, requestUser);


