const tablica = [
 'Stan Lee',
 'Simon Bisley',
 'Grzegorz Rosiński',
 'Todd McFarlane'
];

console.log(tablica);
console.table(tablica);
tablica[tablica.length - 1] = 'Nowa wartość';
console.log(tablica[tablica.length - 1]);

tablica[5] = 'nowy6'; // przez indeks
console.log(tablica.length)
tablica[tablica.length] = 'nowy7'; // przez długość
console.log(tablica.length)
tablica.push('nowy8', 'nowy9', 'nowy10', 'nowy11'); // metodą push
console.log(tablica.length)

tablica[20] = 'daleko';
console.log(tablica.length)
 //undefined

 const nowaDlugosc = tablica.unshift('nowy12', 'nowy13');
console.log(nowaDlugosc);

document.write('<p>Tablica: ' + tablica.join(', '));
document.write(' (elementów: ' + tablica.length + ')</p>');
document.write('<p>Czy zawiera "Stan Lee": ' + tablica.includes('Stan Lee') + '</p>');
document.write('pozycja "Stan Lee": ' + tablica.indexOf('Stan Lee') + '</p>');

const nowaTablica = [
 'Maroko',
 'Emiraty',
 'Oman'
];

document.write('<p>Pierwszy element to <strong>');
document.write(nowaTablica[0] + '</strong></p>');
document.write('<p>Ostatni element to <strong>');
document.write(nowaTablica[nowaTablica.length - 1] + '</strong></p>');

nowaTablica.unshift('Egipt');
document.write('<p>Pierwszy element po dodaniu: <strong>');
document.write(nowaTablica[0] + '</strong></p>');

const usunietyZKoniec = nowaTablica.pop();
const usunietyZPoczatku = nowaTablica.shift();

document.write('<p>Usunięty z końca: ' + usunietyZKoniec + '</p>');
document.write('<p>Usunięty z początku: ' + usunietyZPoczatku + '</p>');
document.write('<p>Pozostałe elementy w tablicy: ' + nowaTablica.join(', ') + '</p>');

const oceny = [
 ['JavaScript', 5],
 ['Git', 4],
 ['HTML', 5]
];

document.write('<p>Nazwa drugiego elementu: ' + oceny[1][0] + ', Ocena: ' + oceny[1][1] + '</p>');
