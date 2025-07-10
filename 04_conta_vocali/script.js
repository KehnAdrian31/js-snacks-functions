/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(string){
  //dichiaro un array di vocali
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  //dichiaro una variabile che conta le vocali all ' interno della parola
  let count = 0;
//ciclo la parila
for(let i=0; i<string.length; i++){
  if(vowels.includes(string[i])){
    count++;
  }
}

return count
}
// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)