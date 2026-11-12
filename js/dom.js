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