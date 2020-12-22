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


var light = true;


//***non possiamo usare il ciclo for perchè il ciclo deve continuare finchè ogni numero random dei 16 sia diverso fra loro. Serve il while.
// for (var i = 0; i < 16; i++) {
//   var num = randomNumber(1, 100);
//   console.log(num);
// }


while (pcNumber.length < 16) {
  var num = engenderNumber(1, 100);

  if (pcNumber.includes(num) == false) {
    pcNumber.push(num);
  }
}
console.log(pcNumber);




while (userNumber.length < 2) {
  var n = parseInt(prompt('key in a number'));

  if (userNumber.includes(n) == false) {
    userNumber.push(n);
  } else {
    alert('already typed, try again');
  }



  if (pcNumber.includes(n) == true) {
    light = false; // per interrompere il ciclo
  }

}
console.log(userNumber);






//*********function*************

// random number
function engenderNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;




}
