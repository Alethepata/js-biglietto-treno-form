/*
1. Salvare in 2 variabili i km e l'età.
2. Moltiplicare i km per 0,21. 
3. Creare 3 IF: -sconto minorenni(-20%) -sconto over 65(-40%) -prezzo base.
4. Generare dei numeri random per "Carrozza" e " Codice CP".
5. Creare la stringa di output.
6. Effettuare l'innerHTML dell'output nel tag designato.
7. Al click del bottone "genera" aggiungo la classe active alla "2° row - Il tuo biglietto ".
8. Al click del bottone "annulla" rimuovo la classe active alla "2° row - Il tuo biglietto ".
*/ 

const bottone1 = document.getElementById('btn-1');
const inputName = document.getElementById('input-name');
const inputKm = document.getElementById('input-km');
const inputAge = document.getElementById('input-age');
const name = inputName.value;
const km = inputKm.value;
const costoKm = km * 0.21;
const age = inputAge.value;
const scontoMinorenni = (costoKm * 20) / 100;
const scontoOver = (costoKm * 40) / 100;
let carrozza;
let cp;
const min=10000;
const max=99999;


carrozza= Math.floor(Math.random () *10);
cp= Math.floor(Math.random () * (max - min + 1) + min);


bottone1.addEventListener('click', function(){
    // document.querySelector('.offerta').innerHTML =;
    document.querySelector('.carrozza').innerHTML = carrozza;
    document.querySelector('.codice').innerHTML = cp;
    document.querySelector('.costo').innerHTML = km;
});


