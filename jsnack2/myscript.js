/*
JSnack 2
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 
10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo.
*/


//chidere numero
let N = parseInt(prompt("Inserisci un numero"));


for( let i=0; i< N; i++){
    
    let nArr = [];

    for( let cont = 0; cont<10; cont++){

        nArr.push(Math.floor(Math.random()*100+1))
    }
    console.log(nArr);
}


//createElement