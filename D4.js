/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = (l1, l2) => {
  return l1 * l2;
};

const areaRett = area(3, 2);
console.log(areaRett);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let crazySum = [];

for (i = 0; i < 2; i++) {
  crazySum.push(Math.floor(Math.random() * 101));
}

const add = (num1 = crazySum[0], num2 = crazySum[1]) => {
  if (num1 !== num2) {
    return num1 + num2;
  } else {
    return (num1 + num2) * 3;
  }
};

const resultEs2 = add();
console.log(resultEs2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = (num1 = crazySum[0], num2 = 19) => {
  if (num1 - num2 < 19) {
    return Math.abs(num1 - num2);
  } else {
    return Math.abs((num1 - num2) * 3);
  }
};

const resultEs3 = crazyDiff();
console.log(resultEs3);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numRnd = Math.floor(Math.random() * 800);

const boundary = (num1 = numRnd) => {
  if ((num1 > 20 && num1 <= 100) || num1 === 400) {
    return true;
  } else {
    return false;
  }
};

const isTrue = boundary();
console.log(isTrue);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const string1 = "Epicode hola";

const epify = (param = string1) => {
  if (param.toUpperCase().startsWith("EPICODE")) {
    return param;
  } else {
    return "EPICODE " + param.toUpperCase();
  }
};

console.log(epify());

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = (num = numRnd) => {
  if (num % 3 === 0 || num % 7 === 0) {
    console.log(num, "è un multiplo di 3 o di 7");
  } else {
    console.log(num, "NON è un multiplo di 3 o di 7");
  }
};

check3and7();

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const stringEs7 = "EPICODE";
const charArr = stringEs7.split("");

const reverseString = () => {
  let reversedArr = [];
  for (let i = charArr.length - 1; i >= 0; i--) {
    reversedArr.push(charArr[i]);
  }
  const reversedString = reversedArr.join("");
  console.log("Stringa invertita:", reversedString);
};

reverseString();

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const stringEs8 = "saluto tutti quanti";
const newArrEs8 = stringEs8.split(" ");

const upperFirst = (param = stringEs8) => {
  const newArrEs8Mapped = param.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  const resultString = newArrEs8Mapped.join(" ");
  console.log(resultString);
};

upperFirst();

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const stringEs9 = "stringa a caso";

const cutString = (param = stringEs9) => {
  return param.slice(1, -1);
};

const newCutString = cutString();
console.log(newCutString);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const length = Math.floor(Math.random() * 101);

const giveMeRandom = (param = length) => {
  const newRandomArr = [];
  for (i = 0; i < param; i++) {
    const newRndValue = Math.floor(Math.random() * 11);
    newRandomArr.push(newRndValue);
  }
  return newRandomArr;
};

const newRandomArr = giveMeRandom();
console.log(newRandomArr);
