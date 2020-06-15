//Selectors Pre-Question
const PAGE = document.querySelector('.page-count');
const TITLE = document.querySelector('.header');
const SUB_TITLE = document.querySelector('.sub-head');
const CARD = document.getElementsByClassName('.card')[0];
const START_BTN = document.querySelector('.spec-btn');
const ANSWER_BTNS = document.querySelector('.answer-btns');
const BODY = document.querySelector('body');
const TEXT_SCORE = document.querySelector('.score');
let score = [0];
let page = [0];

//Event Listeners Pre-Question
START_BTN.addEventListener('click', startQuiz);

//Functions Pre-Question 
function startQuiz(){
    PAGE.textContent = "1 / 4";
    TITLE.textContent = "The M1 motorway is how many miles long?";
    SUB_TITLE.remove();
    START_BTN.remove();
    ANSWER_BTNS.classList.add('unhidden');
    BTN_1.textContent = "193miles";
    BTN_2.textContent = "250miles";
    BTN_3.textContent = "97miles";
    BTN_4.textContent = "305miles";
}



//Selectors Question One
const BTN_1 = document.querySelector('.btn-1');
const BTN_2 = document.querySelector('.btn-2');
const BTN_3 = document.querySelector('.btn-3');
const BTN_4 = document.querySelector('.btn-4');

//Event Listeners Question One
BTN_1.addEventListener('click', correct);
BTN_2.addEventListener('click', incorrect);
BTN_3.addEventListener('click', incorrect);
BTN_4.addEventListener('click', incorrect);

function removeEventListeners(){

BTN_1.removeEventListener('click', correct);
BTN_2.removeEventListener('click', correct);
BTN_3.removeEventListener('click', correct);
BTN_4.removeEventListener('click', correct);

BTN_1.removeEventListener('click', incorrect);
BTN_2.removeEventListener('click', incorrect);
BTN_3.removeEventListener('click', incorrect);
BTN_4.removeEventListener('click', incorrect);
BODY.classList.remove('correct-answer');
BODY.classList.remove('incorrect-answer');
}

//Functions Question One
function correct(){
    BODY.classList.add('correct-answer');
    TITLE.textContent = "Congratulations, Well Done!";
    score[0]++;
    page[0]++;
    TEXT_SCORE.textContent = `Score = ${score[0]}/${page[0]}`;
  
    setTimeout(function(){
        removeEventListeners();
        if(page[0] == 1){
            Q2();
        } else if(page[0] == 2){
            Q3();
        } else if (page[0] == 3){
            Q4();
        } else if (page[0] ==4){
            summary();
        }
    }, 3000);
}

function incorrect(){
    BODY.classList.add('incorrect-answer');
    TITLE.textContent = "Unlucky, you failed!";
    page[0]++;
    TEXT_SCORE.textContent = `Score = ${score[0]}/${page[0]}`;
    setTimeout(function(){
        removeEventListeners();
        if(page[0] == 1){
            Q2();
        } else if(page[0] == 2){
            Q3();
        } else if (page[0] == 3){
            Q4();
        } else if(page[0] == 4){
            summary();
        }
    }, 3000);
}

//Functions For Other Questions
function Q2(){
    PAGE.textContent = "2/4";
    TITLE.textContent = "How many hearts do octopuses have?";
    BTN_1.textContent = "One";
    BTN_2.textContent = "Two";
    BTN_3.textContent = "Three";
    BTN_4.textContent = "Eight";
    BTN_1.addEventListener('click', incorrect);
    BTN_2.addEventListener('click', incorrect);
    BTN_3.addEventListener('click', correct);
    BTN_4.addEventListener('click', incorrect);
}


function Q3(){
    PAGE.textContent = "3/4";
    TITLE.textContent = "What is the hottest planet in the solar system?";
    BTN_1.textContent = "Mars";
    BTN_2.textContent = "Jupiter";
    BTN_3.textContent = "Saturn";
    BTN_4.textContent = "Venus";
    BTN_1.addEventListener('click', incorrect);
    BTN_2.addEventListener('click', incorrect);
    BTN_3.addEventListener('click', incorrect);
    BTN_4.addEventListener('click', correct);
}

function Q4(){
    PAGE.textContent = "4/4";
    TITLE.textContent = "Who was the last tsar of Russia?";
    BTN_1.textContent = "Nicholas II";
    BTN_2.textContent = "Alexander III";
    BTN_3.textContent = "Constantine Palovich";
    BTN_4.textContent = "Peter III";
    BTN_1.addEventListener('click', correct);
    BTN_2.addEventListener('click', incorrect);
    BTN_3.addEventListener('click', incorrect);
    BTN_4.addEventListener('click', incorrect);
}

function summary(){
    PAGE.textContent = "Quiz Complete";
    TITLE.textContent = "Lets see how you did!"
    ANSWER_BTNS.remove();


let finalResult = document.createElement('div');
    finalResult.textContent = `Your final score is ${score}/4`;
    finalResult.classList.add('final-score');
    finalResult.classList.add('flashing-text');
    let alpha = document.getElementsByClassName('card')[0];
    alpha.appendChild(finalResult);


let resetButton = document.createElement('button');
    resetButton.textContent = "Reset";
    alpha.appendChild(resetButton);
    resetButton.classList.add('btn');
    resetButton.classList.add('reset');
    resetButton.addEventListener('click', reloadPage);

    localStorage.setItem('most recent score', score);

    function reloadPage(){
        window.location.reload();
    }
}


/*
document.addEventListener("click", evt => {evt.target.nodeName === "BUTTON" && location.reload()})

setTimeout(() => summary(4), 2000);

function summary(score){
    const quizzing = document.querySelector("div");
    quizzing.parentNode.removeChild(quizzing);
    let finalResult = document.createElement('div');
    document.body.appendChild(finalResult);
    //       ^ here's your problem
    finalResult.innerText = `Your final score is ${score}/4`;
    finalResult.classList.add('final-score');
    let resetButton = document.createElement('button');
    resetButton.classList.add('reset-button');
}
.final-score{
    top: 50%;
    left: 50%;
    text-align: center;
    font-size: 25px;
    color: black;
}

.reset-button{
    padding: 10px;
    background-color: #00DDFF;
    color: black;
}
<button>Reload</button>
<div>Quiz busy ... wait for it ...</div>

*/