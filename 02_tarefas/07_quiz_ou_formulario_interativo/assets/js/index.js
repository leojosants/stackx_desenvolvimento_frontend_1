import { questions } from './database/questions_db.js';

const DOM_boxinfo = document.querySelector('[data-js-info-box]');
const DOM_boxQuiz = document.querySelector('[data-js-quiz-box]');
const DOM_boxResult = document.querySelector('[data-js-result-box]');
const DOM_buttonStart = document.querySelector('[data-js-start-button');
const DOM_buttonContinue = document.querySelector('[data-js-info-box-restart');
const DOM_buttonExit = document.querySelector('[data-js-info-box-quit]');
const DOM_buttonNext = document.querySelector('[data-js-next-button]');
const DOM_optionList = document.querySelector('[data-js-option-list]');
const DOM_timeLine = document.querySelector('[data-js-time-line]');
const DOM_timeText = document.querySelector('[data-js-time-left-text]');
const DOM_timeCount = document.querySelector('[data-js-timer-seconds]');
const DOM_bottomQuestionCounter = document.querySelector('[data-js-total-question]');
const DOM_scoreText = document.querySelector('[data-js-score-text]');
const DOM_restartQuiz = document.querySelector('[data-js-result-box-restart]');
const DOM_quitQuiz = document.querySelector('[data-js-result-box-quit]');

const database = questions;

let counterLine = null;
let counter = null;
let timeValue = 15;
let questionNumber = 1;
let questionCount = 0;
let widthValue = 0;
let userScore = 0;

let tickIconTag = ('<div class="c-quiz-box__c-icon c-quiz-box__c-tick">')
    .concat('<i class="fas fa-check"></i>')
    .concat('</div>');


let crossIconTag = ('<div class="c-quiz-box__c-icon c-quiz-box__c-cross">')
    .concat('<i class="fas fa-times"></i>')
    .concat('</div>');

const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue = null;
    let randomIndex = null;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
};

const showQuestions = (index) => {

    shuffleArray(database[index].options);

    const questionText = document.querySelector('.c-quiz-box__c-question-text');

    let questionTag = ('<span>')
        .concat(`${database[index].id}. ${database[index].question}`)
        .concat('</span>');

    let tagq = document.createElement('span');
    tagq.innerText = `${database[index].id}. ${database[index].question}`;

    let optionTag = ('<div class="c-quiz-box__c-option">')
        .concat(`<span>${database[index].options[0]}</span>`)
        .concat('</div>')
        .concat('<div class="c-quiz-box__c-option">')
        .concat(`<span>${database[index].options[1]}</span>`)
        .concat('</div>')
        .concat('<div class="c-quiz-box__c-option">')
        .concat(`<span>${database[index].options[2]}</span>`)
        .concat('</div>')
        .concat('<div class="c-quiz-box__c-option">')
        .concat(`<span>${database[index].options[3]}</span>`)
        .concat('</div>');

    questionText.innerHTML = questionTag;

    DOM_optionList.innerHTML = optionTag;

    const option = DOM_optionList.querySelectorAll('.c-quiz-box__c-option');

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
    let correctAnswer = database[questionCount].answer;

    const allOptionsLength = DOM_optionList.children.length;

    if (userAns === correctAnswer) {
        userScore += 1;
        answer.classList.add('c--correct');
        answer.insertAdjacentHTML('beforeend', tickIconTag);
    }
    else {
        answer.classList.add('c--incorrect');
        answer.insertAdjacentHTML('beforeend', crossIconTag);

        for (let i = 0; i < allOptionsLength; i++) {
            if (DOM_optionList.children[i].textContent === correctAnswer) {
                DOM_optionList.children[i].setAttribute('class', 'c-quiz-box__c-option c--correct');
                DOM_optionList.children[i].insertAdjacentHTML('beforeend', tickIconTag);
            }
        }
    }

    for (let i = 0; i < allOptionsLength; i++) {
        DOM_optionList.children[i].classList.add('c--disabled');
    }

    DOM_buttonNext.classList.add('c--show');
};

const questionCounter = (index) => {
    let totalQuestionCountTag = ('<span>')
        .concat(`<p>${index}</p> de <p>${database.length}</p> Perguntas`)
        .concat('</span>');

    DOM_bottomQuestionCounter.innerHTML = totalQuestionCountTag;
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

            let correctAnswer = database[questionCount].answer;

            for (let i = 0; i < allOptionsLength; i++) {
                if (DOM_optionList.children[i].textContent === correctAnswer) {
                    DOM_optionList.children[i].setAttribute('class', 'c-quiz-box__c-option c--correct');
                    DOM_optionList.children[i].insertAdjacentHTML('beforeend', tickIconTag);
                }
            }

            for (let i = 0; i < allOptionsLength; i++) {
                DOM_optionList.children[i].classList.add("c--disabled");
            }

            DOM_buttonNext.classList.add("c--show");
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

const createScoreTag = (emoji) => {
    const scoreTag = ('<span>')
        .concat(`${emoji} Pontuação: `)
        .concat(`<p>${userScore}</p>`)
        .concat('de')
        .concat(`<p>${database.length}</p>`)
        .concat('</span>');
    return scoreTag;
}

const showResult = () => {
    DOM_boxinfo.classList.remove('c--active-info');
    DOM_boxQuiz.classList.remove('c--active-quiz');
    DOM_boxResult.classList.add('c--active-result');

    const scoreText = DOM_scoreText;

    if (userScore > 3) {
        scoreText.innerHTML = createScoreTag('🎉');
    }
    else if (userScore > 1) {
        scoreText.innerHTML = createScoreTag('😎');
    }
    else {
        scoreText.innerHTML = createScoreTag('😐');
    }
};

DOM_buttonStart.addEventListener('click', () => {
    DOM_boxinfo.classList.add('c--active-info');
});

DOM_buttonExit.addEventListener('click', () => {
    DOM_boxinfo.classList.remove('c--active-info');
});

DOM_buttonContinue.addEventListener('click', () => {
    DOM_boxinfo.classList.remove('c--active-info');
    DOM_boxQuiz.classList.add('c--active-quiz');

    showQuestions(0);
    questionCounter(1);
    startTimer(15);
    startTimerLine(0);
});

DOM_buttonNext.addEventListener('click', () => {
    if (questionCount < database.length - 1) {
        questionCount++;
        questionNumber++;

        showQuestions(questionCount);
        questionCounter(questionNumber);

        clearInterval(counter);
        clearInterval(counterLine);

        startTimer(timeValue);
        startTimerLine(widthValue);

        DOM_timeText.textContent = 'Tempo';
        DOM_buttonNext.classList.remove('c--show');
    }
    else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
});

DOM_restartQuiz.addEventListener('click', () => {
    DOM_boxQuiz.classList.add('c--active-quiz');
    DOM_boxResult.classList.remove('c--active-result');

    timeValue = 15;
    widthValue = 0;
    userScore = 0;
    questionCount = 0;
    questionNumber = 1;

    showQuestions(questionCount);
    questionCounter(questionNumber);

    clearInterval(counter);
    clearInterval(counterLine);

    startTimer(timeValue);
    startTimerLine(widthValue);

    DOM_timeText.textContent = 'Tempo';
    DOM_buttonNext.classList.remove('c--show');
});

DOM_quitQuiz.addEventListener('click', () => {
    window.location.reload();
});