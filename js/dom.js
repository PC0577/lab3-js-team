const formsCounter = document.forms.length;
console.log(`Liczba formularzy na stronie: ${formsCounter}`);
const imagesCounter = document.images.length;
console.log(`Liczba obrazków na stronie: ${imagesCounter}`);
const linksCounter = document.links.length;
console.log(`Liczba linków na stronie: ${linksCounter}`);
const paragraphsCounter = document.querySelectorAll('#projekt1 p').length;
console.log(`Liczba akapitów <p> w sekcji projekt1: ${paragraphsCounter}`);

const formsCounterInner = "[Liczba formularzy na stronie: " + formsCounter + "]"; 
const imagesCounterInner = "[Liczba obrazków na stronie: " + imagesCounter + "]"; 
const linksCounterInner = "[Liczba linków na stronie: " + linksCounter + "]"; 
const paragraphsCounterInner = "[Liczba akapitów <p> w sekcji projekt1: " + paragraphsCounter + "]"; 
document.getElementById('licznik').append(formsCounterInner, imagesCounterInner, linksCounterInner, paragraphsCounterInner);


const h3Element = document.querySelector('#dom h3');
h3Element.textContent = 'Zadanie 4. DOM - Zmieniony nagłówek';
h3Element.classList.add('text-success');


const lista = document.getElementById('lista');
const li1 = document.createElement('li');
li1.textContent = `Liczba formularzy na stronie: ${formsCounter}`;
const li2 = document.createElement('li');
li2.textContent = `Liczba obrazków na stronie: ${imagesCounter}`;
const li3 = document.createElement('li');
li3.textContent = `Liczba linków na stronie: ${linksCounter}`;
lista.append(li1, li2, li3);
