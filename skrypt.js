//dodawanie i odejmowanie punktow

//poczatkowy wynik
let wynik1 = 0;
let wynik2 = 0;

//zmienna do przechowywania wyniku
const wynikElement1 = document.getElementById("wynik1");
const wynikElement2 = document.getElementById("wynik2");

//przycisk dodawania i odejmowania punkta dla pierwszego zioma 
const dodaj1 = document.getElementById("dodaj1");
const odejmij1 = document.getElementById("odejmij1");

//przycisk dodawania i odejmowania punkta dla drugiego zioma 
const dodaj2 = document.getElementById("dodaj2");
const odejmij2 = document.getElementById("odejmij2");

//funkcja ktora dodaje i odemuje punkt dla graczy
//gracz 1
dodaj1.addEventListener("click", () => {
    wynik1 += 1;
    wynikElement1.textContent = wynik1;
    lider();
    koniec();
});
odejmij1.addEventListener("click", () => {
    wynik1 -= 1;
    wynikElement1.textContent = wynik1;
    lider();
    koniec();
});
//gracz2
dodaj2.addEventListener("click", () => {
    wynik2 += 1;
    wynikElement2.textContent = wynik2;
    lider();
    koniec();
});
odejmij2.addEventListener("click", () => {
    wynik2 -= 1;
    wynikElement2.textContent = wynik2;
    lider();
    koniec();
});

//----------------------------------------

//kto wygrywa

//zmienna do przechowywania wyniku
const wygrany = document.getElementById("wygrany");
//funkcja która pokazuje kto wygrywa
function lider() {
    if (wynik1 > wynik2) {
        wygrany.textContent = "Obecnie: Niebo wygrywa!";
} else if (wynik2 > wynik1) {
    wygrany.textContent = "Obecnie: Piekło wygrywa!";
} else {
    wygrany.textContent = "Obecnie: Penis!";
}
}

//--------------------------------------------------------

//przechowanie danych
const zwyciezca = document.getElementById("zwyciezca");

//funkcja ktora konczy po wygranej gracza
function koniec() {
    const numerek = parseInt(zwyciezca.value);
    if (wynik1 >= numerek) {
        wygrany.textContent = "NIEBO WYGRYWA ŁOTA SIET";
            //alert kto wyg
        alert('WYGRANA NIEBO OSIAGNELO DANA LICZBE PUNKTÓW (A PRACE WYKONAŁ JANEK SNOPKOWSKI)');
        //funkcja bolujaca dalsze giercowanie
        blokada();
                //tu jest ta zmiana kolorow po wygranej
        document.getElementById("gracz1").style.backgroundColor = "#EDAE49";
} else if (wynik2 >= numerek) {
    wygrany.textContent = "PIEKŁO WYGRYWA ŁOTA SIET";
    //alert kto wygral
    alert('WYGRANA PIEKŁO OSIAGNELO DANA LICZBE PUNKTÓW (A PRACE WYKONAŁ JANEK SNOPKOWSKI)');
            //funkcja bolujaca dalsze giercowanie
        blokada();
        //tu jest ta zmiana kolorow po wygranej
        document.getElementById("gracz1").style.backgroundColor = "#EDAE49";
}
}

//funkcja blokujaca gre po wygranej
function blokada() {
    dodaj1.disabled = true;
    odejmij1.disabled = true;
    dodaj2.disabled = true;
    odejmij2.disabled = true;
}