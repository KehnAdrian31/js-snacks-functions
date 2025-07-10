/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function nameInitials(arrayInitials){
  const initials =[];
  for(let i = 0; i < arrayInitials.length; i++){
    initials.push(arrayInitials[i][0]);
  }

  return initials;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(nameInitials(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]