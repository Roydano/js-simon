
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.


//* creiamo un array vuoto che conterrà i numeri random
var array= [];


//* con la condizione while diciamo che se il numero è compreso nell'array allora ne genera un altro finchè non ne trova uno che non è contenuto e lo pusha all'intenro dell'array
while(array.length < 5){
    var numeroGen = randomNum(1, 100);

    if(!array.includes(numeroGen)){
        array.push(numeroGen);
    }
}

console.log(array);

//* facciamo partire un alert che mostri all'utente i numeri che deve memorizzare
alert(array);



//* dopo l'ok dell'alert facciamo partire un timer di 30secondi dove si apre un prompt che ti chiede di inserire i 5 numeri visti in precedenza





//* creiamo la scelta dell'utente
var userArray = [];

console.log(userArray);

for(var i = 0; i < 5; i++){
    var choise = parseInt(prompt('Inserisci un numero'));

    if(!userArray.includes(choise) && choise == array[i]){
        userArray.push(choise);
    } else if(userArray.includes(choise)){
        alert('Il numero è già stato inserito in precedenza...provane un altro!');
        choise;
    }
}

console.log(userArray);





//? FUNZIONI

//! generare numeri random

function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


    
