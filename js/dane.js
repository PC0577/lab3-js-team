const zespol = [
    ['Kowalski', 'Jan', '1', '999@student.ans-elblag.pl', '999'], // Osoba A
    ['Nowak', 'Anna', '1', 'anna.nowak@student.ans-elblag.pl', '1000'] // Osoba B
];

const pola = ['nazwisko', 'imie', 'grupa', 'email', 'indeks'];

for (let i = 0; i < pola.length; i++) {
    document.getElementById(pola[i]).textContent = zespol[0][i] + ', ' + zespol[1][i];
}
