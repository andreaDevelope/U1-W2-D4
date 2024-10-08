// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const length = Math.floor(Math.random() * 101);

const giveMeRandom = (param = length) => {
  const newRandomArr = [];
  for (let i = 0; i < param; i++) {
    const newRndValue = Math.floor(Math.random() * 11);
    newRandomArr.push(newRndValue);
  }
  return newRandomArr;
};

//

const checkArray = () => {
  const newRandomArr = giveMeRandom();
  console.log(newRandomArr, newRandomArr.length);

  for (let i = 0; i < newRandomArr.length; i++) {
    if (newRandomArr[i] > 5) {
      console.log(newRandomArr[i] + " è maggiore di 5");
    } else {
      console.log(newRandomArr[i] + " NON è maggiore di 5");
    }
  }
};

console.log(checkArray());

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let shoppingCart = [
  {
    price: 100,
    name: "penna",
    id: 1,
    quantity: 105,
  },
  {
    price: 1000,
    name: "mouse",
    id: 2,
    quantity: 30,
  },
  {
    price: 10000,
    name: "gioco bellissimo",
    id: 3,
    quantity: 5,
  },
];

const shoppingCartTotal = () => {
  let priceTot = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    priceTot += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  const prezzoInEuro = priceTot / 100;
  console.log(prezzoInEuro);
};

console.log(shoppingCartTotal());

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const rifornimentoNegozio = [
  {
    price: 100,
    name: "penna",
    id: 1,
    quantity: 505,
  },
  {
    price: 1000,
    name: "mouse",
    id: 2,
    quantity: 40,
  },
  {
    price: 10000,
    name: "gioco bellissimo",
    id: 3,
    quantity: 10,
  },
];

const addToShoppingCart = (param = rifornimentoNegozio) => {
  for (let i = 0; i < shoppingCart.length; i++) {
    for (j = 0; j < param.length; j++) {
      if (shoppingCart[i].name === param[j].name) {
        shoppingCart[i].quantity += param[j].quantity;
      }
    }
  }
  return shoppingCart;
};

const negozioRifornito = addToShoppingCart();

console.log(negozioRifornito);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let articoloPiùCostoso = "";
const maxShoppingCart = () => {
  for (let i = 0; i < shoppingCart.length; i++) {
    for (let j = 0; j < shoppingCart.length; j++) {
      if (shoppingCart[i].price > shoppingCart[j].price) {
        articoloPiùCostoso = shoppingCart[i].name;
      }
    }
  }
  return articoloPiùCostoso;
};

console.log("questo è l'articolo più costoso =>", maxShoppingCart());

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const latestShoppingCart = () => {
  return shoppingCart[shoppingCart.length - 1];
};

const ultimoProd = latestShoppingCart();
console.log(ultimoProd);

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//
let strikecount = 0;
let x = 5;
let loopCount = 0;

const loopUntil = (param = x) => {
  while (strikecount < 4) {
    const numRndEs6 = Math.floor(Math.random() * 10);
    console.log(numRndEs6);

    if (numRndEs6 > param) {
      strikecount++;
    } else {
      strikecount = 0;
    }

    loopCount++;
  }
  console.log("Ottimo lavoro, 3 strike di fila in sole", loopCount, "iterazioni");
};

loopUntil();

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

const arrEs7 = [10, "non lo so", 20, "boh", 30, 100];
let media = 0;
const average = (param = arrEs7) => {
  for (let i = 0; i < param.length; i++) {
    if (typeof (param[i] === "number")) {
      media += param[i];
    }
  }
  return (media = media / param.length);
};

media = average();
console.log(media);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
