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
