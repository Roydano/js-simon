


//* creiamo un array vuoto che conterrà i numeri random
var array= [];

//*? con la condizione while diciamo che se il numero è compreso nell'array allora ne genera un altro finchè non ne trova uno che non è contenuto e lo pusha all'intenro dell'array
while(array.length < 5){
    var numeroGen = randomNum(1, 100);

    if(!array.includes(numeroGen)){
        array.push(numeroGen);
    }
}

console.log(array);

//*? facciamo partire un alert che mostri all'utente i numeri che deve memorizzare

alert(array);


var timeleft = 30;
// var downloadTimer = setInterval(timer, 1000);

setTimeout(function(){

    var userArray = [];

    for(var i = 0; i < 5; i++){
        var choise = parseInt(prompt('Inserisci uno dei numeri che hai visto in precedenza!'));
        if(!userArray.includes(choise) && array.includes(choise)){
            userArray.push(choise);
        }
    }
    console.log(userArray);
    userArray.sort(orderNum);

    document.getElementById('numeri').innerHTML = 'Hai indovinato ' + userArray.length + ' numeri su 5....ecco quali: ' + userArray;


}, timeleft * 1000);












//? FUNZIONI

//! generare numeri random

function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//! ordinare i numeri in ordine crescente

function orderNum(num1, num2){
    return num1 - num2;
}


