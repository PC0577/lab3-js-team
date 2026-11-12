


const przyciskStart = document.getElementById('startQuiz');
przyciskStart.addEventListener('click', function() {
        alert('Quiz startuje') }
);

const questions = [
 ['Ile księżyców ma Mars?', 2],
 ['W którym roku była Bitwa pod Grunwaldem?', 1410],
 ['Kwadrat liczby urojonej i?', -1]
];


let score = 0;

for (let i = 0; i < questions.length; i++) {
const question = questions[i];
const answer = prompt(question[0], '');
if (Number(answer) === question[1]) {
 alert('Prawidłowa odpowiedź!');
 score++;
} else {
 alert('Błąd. Prawidłowa odpowiedź to ' + question[1]);
}}

const wynik = document.createElement('p');
wynik.textContent = `Twój wynik: ${score}/${questions.length}`;
document.getElementById('wynik').append(wynik)
