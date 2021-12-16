/*
JSnack 3
Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre 
l’altro di verde.
Partendo da un array di numeri, stampiamo 
nell’id rosso i numeri dispari e in verde i numeri pari.
*/

//array

let myArr = [1,5,10,17,24,27];

//div rosso

let divRosso = document.createElement("div");

divRosso.setAttribute( "id", "divRossoR" );

divRosso.style.color = "red";

//div verde

let divVerde = document.createElement("div");

divRosso.setAttribute( "id", "divVerdeV" );

divRosso.style.color = "green";

//ciclo

for (let i=0; i<myArr.length; i++){

    if(myArr[i]%2 != 0){

        divVerde.innerHTML += myArr[i];
        console.log(divVerde);
    }else {

        divRosso.innerHTML += myArr[i];
        console.log(divRosso);
    }
}

