/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function findInitials(array, letter){
  //definisco la variabile array
  const filter = []

  //ciclo l' array
  for(let i=0; i<array.length; i++){
    if(array[i][0].toLowerCase() === letter.toLowerCase()){
      filter.push(array[i]);
    }
  }

  return filter;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(findInitials(names, 'a'))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]