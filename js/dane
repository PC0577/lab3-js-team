const zespol = [
    ['Kowalski', 'Jan', '1', '999@student.ans-elblag.pl', '999'], // Osoba A
    ['Nowak', 'Anna', '1', 'anna.nowak@student.ans-elblag.pl', '1000'] // Osoba B
];

const pola = ['nazwisko', 'imie', 'grupa', 'email', 'indeks'];

for (let i = 0; i < pola.length; i++) {
    document.getElementById(pola[i]).textContent = zespol[0][i] + ', ' + zespol[1][i];
}

<div id="petle">
    <h3>Zadanie 5 - pętle, funkcje, zdarzenia</h3>
    <p id="while"></p>
    <p id="for"></p>
</div>

<div id="petle">
    <h3>Zadanie 5 - pętle, funkcje, zdarzenia</h3>
    <p id="while"></p>
    <p id="for"></p>
</div>

function policzZnaki(tekst) {
    return tekst.length;
}

const nowaTablica = ['Przykład 1', 'Przykład 2', 'Przykład 3'];
const akapit = document.getElementById('licznik');

for (const element of nowaTablica) {
    akapit.textContent += `${element} ma ${policzZnaki(element)} znaków.\n`;
}

<button id="pokazDane" class="btn btn-primary">Pokaż dane</button>


function pokazDane() {
    const dane = `Nazwisko: ${document.getElementById('nazwisko').textContent}\nImię: ${document.getElementById('imie').textContent}\nGrupa: ${document.getElementById('grupa').textContent}\nEmail: ${document.getElementById('email').textContent}\nIndeks: ${document.getElementById('indeks').textContent}`;
    alert(dane);
}

document.getElementById('pokazDane').addEventListener('click', pokazDane);

<button id="pokazDane" class="btn btn-primary">Pokaż dane</button>
function pokazDane() {
    const dane = `Nazwisko: ${document.getElementById('nazwisko').textContent}\nImię: ${document.getElementById('imie').textContent}\nGrupa: ${document.getElementById('grupa').textContent}\nEmail: ${document.getElementById('email').textContent}\nIndeks: ${document.getElementById('indeks').textContent}`;
    alert(dane);
}

document.getElementById('pokazDane').addEventListener('click', pokazDane);
<button id="dodajElement" class="btn btn-secondary">Dodaj element</button>
let licznik = 0;

document.getElementById('dodajElement').addEventListener('click', function() {
    licznik++;
    const li = document.createElement('li');
    li.textContent = `Element ${licznik}`;
    document.getElementById('lista').appendChild(li);
});
