/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = parseInt(prompt('inserisci primo numero')) 
const num2 = parseInt(prompt('inserisci secondo numero'))
if(num1 > num2){
  console.log(num1 + ' ' + 'questo è il numero più grande')
} else if(num1 < num2){
  console.log(num2 + ' ' + 'questo è il numero più grande')
} else if(num1 === num2){
  console.log('i numeri sono uguali')
} else{
  console.log('i dati inseriti non sono corretti')
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const inputUtente = parseInt(prompt('inserisci numero 5')) 
if(inputUtente != 5){
  console.log('not equal')
} else{
  console.log('equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let inputUtente2 = parseInt(prompt('verifica se è dividibile per 5'))
if(inputUtente2 % 5 === 0){
  console.log('divisibile per 5')
} else {
  console.log('non divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = parseFloat(prompt('quanto spendi'))
const speseSpezione = parseInt(10)
let somma = totalShoppingCart + speseSpezione

if(totalShoppingCart >= 50){
  console.log(`il tuo totale è di ${totalShoppingCart} €, la spedizione è gratuita`)
} else{
  console.log(`il tuo carrello è di ${totalShoppingCart} €, più ${speseSpezione} di spedizione per un totale di ${somma}`)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

const blackFridayDiscount = totalShoppingCart * 0.20
let sommaScontata = totalShoppingCart - blackFridayDiscount
let somma2 = sommaScontata + speseSpezione
if(sommaScontata >= 50){
  console.log(`Sconto black friday e spese di spezione gratuite per un totale di ${sommaScontata} €`)
} else{
  console.log(`Sconto black friday più spese di spedizione per un totale di ${somma2}`)
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const numeriInOrdineDecrescente = [10, 70, 123, 302, 47].sort((a, b) => b - a)
console.log(numeriInOrdineDecrescente)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let pariDispari = parseInt(prompt('inserisci numero'))
if(pariDispari %0){
  console.log('questo numero è pari')
} else {
  console.log('questo numero è dispari')
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

  let val = 7
if (val < 10){
      console.log("Meno di 10");
} else if(val < 5){
      console.log("Meno di 5");
} else{
      console.log("Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */




/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto'
}


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2]
console.log(me)


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const listaNumeri = []
listaNumeri.push(1)
listaNumeri.push(2)
listaNumeri.push(3)
listaNumeri.push(4)
listaNumeri.push(5)
listaNumeri.push(6)
listaNumeri.push(7)
listaNumeri.push(8)
listaNumeri.push(9)
listaNumeri.push(10)
console.log(listaNumeri)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

