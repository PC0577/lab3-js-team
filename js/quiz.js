


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
const question = questions[0];
const answer = prompt(question[0], '');
if (Number(answer) === question[1]) {
 alert('Prawidłowa odpowiedź!');
 score++;
} else {
 alert('Błąd. Prawidłowa odpowiedź to ' + question[1]);
}
