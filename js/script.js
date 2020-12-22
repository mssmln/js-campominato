// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// array
var pcNumber = [];
var userNumber = [];


// global vars
var message = true;

//***non possiamo usare il ciclo for perchè il ciclo deve continuare finchè ogni numero random dei 16 sia diverso fra loro. Serve il while.
// for (var i = 0; i < 16; i++) {
//   var num = randomNumber(1, 100);
//   console.log(num);
// }



// continua fino a che siano generati 16 numeri tutti diversi ed inseriscili nell'array del pc.
while (pcNumber.length < 16) {
  var num = engenderNumber(1, 100);

  // se l'array contiene già il numero non lo inserire
  if (pcNumber.includes(num) == false) {
    pcNumber.push(num);
  }
}
console.log(pcNumber);



// con un altro ciclo while l'utente sceglie i suoi numeri
while ((userNumber.length < 16) && (message == true)) {
  var number = parseInt(prompt('key in an integer number'));

  if (userNumber.includes(number) == false) {
    userNumber.push(number);
  } else {
    alert('you have come across a bomb! Play again');
    message = false;
  }
}
console.log(userNumber);


//*********function*************

// random number
function engenderNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
