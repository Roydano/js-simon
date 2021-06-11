// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.



var array= [];

while(array.length < 5){
    var numeroGen = randomNum(1, 100);

    if(!array.includes(numeroGen)){
        array.push(numeroGen);
    }
}

console.log(array);


alert(array);

















//? FUNZIONI

//! generare numeri random

function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}