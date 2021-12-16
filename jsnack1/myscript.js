/*
JSnack 1
Crea un array vuoto e chiedi all’utente un numero 
da inserire nell’array. Continua a chiedere i numeri 
all’utente e a inserirli nell’array fino a quando 
la somma degli elementi è minore di 50.
*/


//Arry vuoto
let gruppoArr = [];

//Contatore
let contatore = 0

//Somma
let somma = 0
//Prompt numero


//somma < 50
do{
    let numero = parseInt(prompt ("Scrivi un numero"));
    console.log(numero);

    gruppoArr[contatore] = numero;
    console.log(gruppoArr);

    somma += gruppoArr[contatore];
    console.log(somma);

    contatore++;

} while (somma < 50);
    