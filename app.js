const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const maxScoreInput = document.querySelector('#maxScore');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');
const playButton = document.querySelector('#play');
const formContent = document.querySelector('form');
const cardContent = document.querySelector('.content');
const cardFooter = document.querySelector('.card-footer');
const scoresTable = document.querySelector('#scores');
const table = document.querySelector('tbody');
const p1Name = formContent.elements.p1Name;
const p2Name = formContent.elements.p2Name;

let maxScore = 7;
let count = 1;

playButton.addEventListener('click', (e) => {
    e.preventDefault();
    cardContent.classList.remove('is-hidden');
    cardFooter.classList.remove('is-hidden');
    formContent.classList.add('is-hidden');
    p1Button.innerText += ` ${p1Name.value}`;
    p2Button.innerText += ` ${p2Name.value}`;
});

maxScoreInput.addEventListener('change', () => {
    maxScore = parseInt(maxScoreInput.value);
    reset();
});

p1Button.addEventListener('click', () => {
    let score = parseInt(p1Score.innerText);
    if (score < maxScore) {
        score++;
    }
    if (score === maxScore) {
        p1Score.classList.add('has-text-success');
        p2Score.classList.add('has-text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
        addRow(p1Name.value, score, parseInt(p2Score.innerText));
    }
    p1Score.textContent = score;
});

p2Button.addEventListener('click', () => {
    let score = parseInt(p2Score.innerText);
    if (score < maxScore) {
        score++;
    }
    if (score === maxScore) {
        p2Score.classList.add('has-text-success');
        p1Score.classList.add('has-text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
        addRow(p2Name.value, score, parseInt(p1Score.innerText));
    }
    p2Score.textContent = score;
});

resetButton.addEventListener('click', reset);

function reset() {
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    p1Score.classList.remove('has-text-success', 'has-text-danger');
    p2Score.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}

function addRow(winnerName, winnerScore, loserScore) {
    scoresTable.classList.remove('is-hidden');
    const newRow = document.createElement('tr');
    const number = document.createElement('th');
    number.append(count);
    const winner = document.createElement('td');
    winner.append(winnerName);
    const score = document.createElement('td');
    const bTag = document.createElement('b');
    bTag.append(winnerScore);
    score.append(bTag, ` - ${loserScore}`);
    newRow.append(number, winner, score);
    table.append(newRow);
    count++;
}