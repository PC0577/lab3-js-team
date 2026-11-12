const zespol = [
    ['Chwaszcz', 'Paweł', '1', '21435@student.ans-elblag.pl', '21435'],
];

const pola = ['nazwisko', 'imie', 'grupa', 'email', 'indeks'];

for (let i = 0; i < pola.length; i++) {
    document.getElementById(pola[i]).textContent = zespol[0][i] + ', ' + zespol[1][i];
}

function policzZnaki(tekst) {
    return tekst.length;
}

const nowaTablica = ['Przykład 1', 'Przykład 2', 'Przykład 3'];
const akapit = document.getElementById('licznik');

for (const element of nowaTablica) {
    akapit.textContent += `${element} ma ${policzZnaki(element)} znaków.\n`;
}

document.getElementById('pokazDane').addEventListener('click', function() {
    const dane = `Nazwisko: ${document.getElementById('nazwisko').textContent}\nImię: ${document.getElementById('imie').textContent}\nGrupa: ${document.getElementById('grupa').textContent}\nEmail: ${document.getElementById('email').textContent}\nIndeks: ${document.getElementById('indeks').textContent}`;
    alert(dane);
});

let licznik = 0;

document.getElementById('dodajElement').addEventListener('click', function() {
    licznik++;
    const li = document.createElement('li');
    li.textContent = `Element ${licznik}`;
    document.getElementById('lista').appendChild(li);
});
