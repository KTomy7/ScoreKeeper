const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const maxScoreInput = document.querySelector('#maxScore');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');
let maxScore = 7;

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