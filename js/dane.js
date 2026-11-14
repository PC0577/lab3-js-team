const zespol = [
    ['Chwaszcz', 'Paweł', '1', '21435@student.ans-elblag.pl', '21435'],
    ['Liszewski', 'Miłosz', '1', '21505@student.ans-elblag.pl', '21505']
];

const pola = ['nazwisko', 'imie', 'grupa', 'email', 'indeks'];

for (let i = 0; i < pola.length; i++) {
    document.getElementById(pola[i]).textContent = zespol[0][i] + ', ' + zespol[1][i];
}

const akapitWhile = document.getElementById('while');
const akapitFor = document.getElementById('for');
const polowa = Math.floor(tablica.length / 2);

let k = 0;
while (k < polowa) {
    if (k in tablica) {
        akapitWhile.textContent += tablica[k] + '\n';
    }
    k++;
}

for (let j = polowa; j < tablica.length; j++) {
    if (j in tablica) {
        akapitFor.textContent += tablica[j] + '\n';
    }
}

function policzZnaki(tekst) {
    return tekst.length;
}

const akapitForOf = document.createElement('p');
akapitForOf.id = 'forOf';
document.getElementById('petle').insertBefore(
    akapitForOf,
    document.getElementById('pokazDane')
);

for (const element of nowaTablica) {
    akapitForOf.textContent += element + ' ma ' + policzZnaki(element) + ' znaków.\n';
}

function pokazDane() {
    const dane = `Nazwisko: ${document.getElementById('nazwisko').textContent}
Imię: ${document.getElementById('imie').textContent}
Grupa: ${document.getElementById('grupa').textContent}
Email: ${document.getElementById('email').textContent}
Indeks: ${document.getElementById('indeks').textContent}`;
    alert(dane);
}

document.getElementById('pokazDane').addEventListener('click', pokazDane);
