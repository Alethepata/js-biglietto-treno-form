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
const bottone2 = document.getElementById('btn-2');
const inputName = document.getElementById('input-name');
const inputKm = document.getElementById('input-km');
const inputAge = document.getElementById('input-age');
const biglietto= document.querySelector('.biglietto');
const contenuto= document.querySelector('.content');

bottone1.addEventListener('click', function(){

    biglietto.classList.add('active');
    const name = inputName.value;
    const km = inputKm.value;
    const costoKm = km * 0.21;
    const age = inputAge.value;
    const scontoMinorenni = (costoKm * 20) / 100;
    const scontoOver = (costoKm * 40) / 100;
    let carrozza;
    let cp;
    let message;
    let offerta;
    const min=10000;
    const max=99999;

    carrozza= Math.ceil(Math.random () *10);
    cp= Math.floor(Math.random () * (max - min + 1) + min);

    if(age == "Minorenne"){
        const prezzoFinale = costoKm - scontoMinorenni;
        message= prezzoFinale.toFixed(2)+ ' Euro ';
        offerta= 'Biglietto junior';
    }else if(age == "Over 65"){
        const prezzoFinale = costoKm - scontoOver;
        message=prezzoFinale.toFixed(2) + ' Euro ';
        offerta= 'Biglietto senior';
    } else{
        const prezzoFinale = costoKm.toFixed(2);
        message= prezzoFinale + ' Euro ';
        offerta= 'Biglietto standard';
    }

    document.querySelector('.nome').innerHTML =name;
    document.querySelector('.offerta').innerHTML =offerta;
    document.querySelector('.carrozza').innerHTML = carrozza;
    document.querySelector('.codice').innerHTML = cp;
    document.querySelector('.costo').innerHTML = message;
   
});

bottone2.addEventListener('click', function(){
    biglietto.classList.remove('active');
    
    
    
});


