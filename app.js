const p1ScoreInput = document.querySelector('#p1Score');
const p2ScoreInput = document.querySelector('#p2Score');
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
let p1Score = parseInt(p1ScoreInput.innerText);
let p2Score = parseInt(p2ScoreInput.innerText);

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
    if (p1Score < maxScore) {
        p1Score++;
    }
    if (p1Score === maxScore) {
        p1ScoreInput.classList.add('has-text-success');
        p2ScoreInput.classList.add('has-text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
        addRow(p1Name.value, p1Score, p2Score);
    }
    p1ScoreInput.textContent = p1Score;
});

p2Button.addEventListener('click', () => {
    if (p2Score < maxScore) {
        p2Score++;
    }
    if (p2Score === maxScore) {
        p2ScoreInput.classList.add('has-text-success');
        p1ScoreInput.classList.add('has-text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
        addRow(p2Name.value, p2Score, p1Score);
    }
    p2ScoreInput.textContent = p2Score;
});

resetButton.addEventListener('click', reset);

function reset() {
    p1Score = 0;
    p1ScoreInput.textContent = 0;
    p2Score = 0;
    p2ScoreInput.textContent = 0;
    p1ScoreInput.classList.remove('has-text-success', 'has-text-danger');
    p2ScoreInput.classList.remove('has-text-success', 'has-text-danger');
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