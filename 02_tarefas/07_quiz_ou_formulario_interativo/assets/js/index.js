import { questions } from './database/questions_db.js';

const DOM_startBtn = document.querySelector('.start-btn button');
const DOM_infoBox = document.querySelector('.info-box');
const DOM_exitBtn = DOM_infoBox.querySelector('.buttons .quit');
const DOM_continueBtn = DOM_infoBox.querySelector('.buttons .restart');
const DOM_quizBox = document.querySelector('.quiz-box');
const DOM_resultBox = document.querySelector('.result-box');
const DOM_optionList = document.querySelector('.option-list');
const DOM_timeLine = document.querySelector('header .time-line');
const DOM_timeText = document.querySelector('.timer .time-left-txt');
const DOM_timeCount = document.querySelector('.timer .timer-sec');

const DOM_nextBtn = document.querySelector('footer .next-btn');
const DOM_bottomQuesCounter = document.querySelector('footer .total-que');
const DOM_scoreText = document.querySelector('.score-text');
const DOM_restartQuiz = DOM_resultBox.querySelector('.buttons .restart');
const DOM_quitQuiz = DOM_resultBox.querySelector('.buttons .quit');

let counterLine = null;
let counter = null;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;
let queCount = 0;
let queNumb = 1;

let tickIconTag = ('<div class="icon tick">')
    .concat('<i class="fas fa-check"></i>')
    .concat('</div>');

let crossIconTag = ('<div class="icon cross">')
    .concat('<i class="fas fa-times"></i>')
    .concat('</div>');

const showQuestions = (index) => {
    const queText = document.querySelector('.que-text');

    let queTag = ('<span>')
        .concat(`${questions[index].id}. ${questions[index].question}`)
        .concat('</span>');

    let optionTag = ('<div class="option">')
        .concat(`<span>${questions[index].options[0]}</span>`)
        .concat('</div>')
        .concat('<div class="option">')
        .concat(`<span>${questions[index].options[1]}</span>`)
        .concat('</div>')
        .concat('<div class="option">')
        .concat(`<span>${questions[index].options[2]}</span>`)
        .concat('</div>')
        .concat('<div class="option">')
        .concat(`<span>${questions[index].options[3]}</span>`)
        .concat('</div>');

    queText.innerHTML = queTag;

    DOM_optionList.innerHTML = optionTag;

    const option = DOM_optionList.querySelectorAll('.option');

    option.forEach((data) => {
        data.addEventListener('click', () => {
            optionSelected(data);
        });
    });
};

const optionSelected = (answer) => {
    clearInterval(counter);
    clearInterval(counterLine);

    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;

    const allOptionsLength = DOM_optionList.children.length;

    if (userAns === correctAns) {
        userScore += 1;
        answer.classList.add('correct');
        answer.insertAdjacentHTML('beforeend', tickIconTag);
    }
    else {
        answer.classList.add('incorrect');
        answer.insertAdjacentHTML('beforeend', crossIconTag);

        for (let i = 0; i < allOptionsLength; i++) {
            if (DOM_optionList.children[i].textContent === correctAns) {
                DOM_optionList.children[i].setAttribute('class', 'option correct');
                DOM_optionList.children[i].insertAdjacentHTML('beforeend', tickIconTag);
            }
        }
    }

    for (let i = 0; i < allOptionsLength; i++) {
        DOM_optionList.children[i].classList.add('disabled');
    }

    DOM_nextBtn.classList.add('show');
};

const queCounter = (index) => {
    let totalQueCounTag = ('<span>')
        .concat(`<p>${index}</p> of <p>${questions.length}</p> Questions`)
        .concat('</span>');

    DOM_bottomQuesCounter.innerHTML = totalQueCounTag;
};

const startTimer = (time) => {
    const timer = () => {
        DOM_timeCount.textContent = time;
        time--;

        if (time < 9) {
            let addZero = DOM_timeCount.textContent;
            DOM_timeCount.textContent = `0${addZero}`;
        }

        if (time < 0) {
            clearInterval(counter);
            DOM_timeText.textContent = 'Esgotado';

            const allOptionsLength = DOM_optionList.children.length;

            let correctAns = questions[queCount].answer;

            for (let i = 0; i < allOptionsLength; i++) {
                if (DOM_optionList.children[i].textContent === correctAns) {
                    DOM_optionList.children[i].setAttribute('class', 'option correct');
                    DOM_optionList.children[i].insertAdjacentHTML('beforeend', tickIconTag);
                }
            }

            for (let i = 0; i < allOptionsLength; i++) {
                DOM_optionList.children[i].classList.add("disabled");
            }

            DOM_nextBtn.classList.add("show");
        }
    }

    counter = setInterval(timer, 1000);
};

const startTimerLine = (time) => {
    const timer = () => {
        time += 1;
        DOM_timeLine.style.width = (`${time}`).concat('px');
        if (time > 549) clearInterval(counterLine);
    };
    counterLine = setInterval(timer, 29);
};

const showResult = () => {
    DOM_infoBox.classList.remove('active-info');
    DOM_quizBox.classList.remove('active-quiz');
    DOM_resultBox.classList.add('active-result');

    const scoreText = DOM_scoreText;

    if (userScore > 3) {
        const scoreTag = ('<span>')
            .concat('🎉 Pontuação: ')
            .concat(`<p>${userScore}</p>`)
            .concat('de')
            .concat(`<p>${questions.length}</p>`)
            .concat('</span>');
        scoreText.innerHTML = scoreTag;
    }
    else if (userScore > 1) {
        const scoreTag = ('<span>')
            .concat('😎 Pontuação: ')
            .concat(`<p>${userScore}</p>`)
            .concat('de')
            .concat(`<p>${questions.length}</p>`)
            .concat('</span>');
        scoreText.innerHTML = scoreTag;
    }
    else {
        const scoreTag = ('<span>')
            .concat('😐 Pontuação: ')
            .concat(`<p>${userScore}</p>`)
            .concat('de')
            .concat(`<p>${questions.length}</p>`)
            .concat('</span>');
        scoreText.innerHTML = scoreTag;
    }
};

DOM_startBtn.addEventListener('click', () => {
    DOM_infoBox.classList.add('active-info');
});

DOM_exitBtn.addEventListener('click', () => {
    DOM_infoBox.classList.remove('active-info');
});

DOM_continueBtn.addEventListener('click', () => {
    DOM_infoBox.classList.remove('active-info');
    DOM_quizBox.classList.add('active-quiz');

    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
});

DOM_nextBtn.addEventListener('click', () => {
    if (queCount < questions.length - 1) {
        queCount++;
        queNumb++;

        showQuestions(queCount);
        queCounter(queNumb);

        clearInterval(counter);
        clearInterval(counterLine);

        startTimer(timeValue);
        startTimerLine(widthValue);

        DOM_timeText.textContent = 'Tempo';
        DOM_nextBtn.classList.remove('show');
    }
    else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
});

DOM_restartQuiz.addEventListener('click', () => {
    DOM_quizBox.classList.add('active-quiz');
    DOM_resultBox.classList.remove('active-result');

    timeValue = 15;
    widthValue = 0;
    userScore = 0;
    queCount = 0;
    queNumb = 1;

    showQuestions(queCount);
    queCounter(queNumb);

    clearInterval(counter);
    clearInterval(counterLine);

    startTimer(timeValue);
    startTimerLine(widthValue);

    DOM_timeText.textContent = 'Tempo';
    DOM_nextBtn.classList.remove('show');
});

DOM_quitQuiz.addEventListener('click', () => {
    window.location.reload();
});