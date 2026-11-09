const tablica = [
 'Stan Lee',
 'Simon Bisley',
 'Grzegorz Rosiński',
 'Todd McFarlane'
];

console.log(tablica);
console.table(tablica);
tablica[tablica.length - 1] = 'Nowa wartość';

tablica[5] = 'nowy6'; // przez indeks
console.log(tablica.length)
tablica[tablica.length] = 'nowy7'; // przez długość
console.log(tablica.length)
tablica.push('nowy8', 'nowy9', 'nowy10', 'nowy11'); // metodą push
