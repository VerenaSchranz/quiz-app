let questions = [
  {
  "question": "Wer hat HTML erfunden?",
  "answer_1": "Robbie Williams",
  "answer_2": "Lady Gaga",
  "answer_3": "Tim Berners-Lee",
  "answer_4": "Justin Bieber",
  "right_answer": 3
  },
  {
  "question": "Welche Farbe hat der Himmel?",
  "answer_1": "Lilablassblau",
  "answer_2": "#fff",
  "answer_3": "Blau",
  "answer_4": "Deeppink",
  "right_answer": 3
  },
  {
  "question": "Wie macht die Katze?",
  "answer_1": "Oink Oink",
  "answer_2": "Meeeow",
  "answer_3": "Mäh",
  "answer_4": "Endoplasmatisches Retikulum",
  "right_answer": 2
  },
  {
    "question": "Welchen Radius hat die Erde?",
    "answer_1": "6.371 km",
    "answer_2": "margin: auto",
    "answer_3": "4 mm",
    "answer_4": "30px",
    "right_answer": 1
    },
]

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_CORRECT = new Audio('sounds/correct.mp3');  
let AUDIO_FALSE = new Audio('sounds/false.mp3');  

function init() {
  document.getElementById('all-questions').innerHTML = questions.length;
  showQuestion();
}


function showQuestion() {

if(gameIsOver()) {
 showEndScreen();
} else { 
  updateProgessBar
  updateToNextQuestion();
  }
}
function gameIsOver() {
  return currentQuestion >= questions.length;
}
function updateProgessBar() {
  let percent =  (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);

  document.getElementById('progress-bar').innerHTML = `${percent} %`;
  document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function updateToNextQuestion() {
  updateProgessBar();
  
  let question = questions[currentQuestion];
  document.getElementById('question-number').innerHTML = currentQuestion + 1;
  document.getElementById('questiontext').innerHTML = question['question'];
  document.getElementById('answer_1').innerHTML = question['answer_1'];
  document.getElementById('answer_2').innerHTML = question['answer_2'];
  document.getElementById('answer_3').innerHTML = question['answer_3'];
  document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);

  let idOfRightAnswer = `answer_${question['right_answer']}`;

  if(selectedQuestionNumber == question['right_answer']) {
    document.getElementById(selection).parentNode.classList.add('bg-success');
    AUDIO_CORRECT.play();
    rightQuestions++;
  } else{
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    AUDIO_FALSE.play();
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
  }
  document.getElementById('next-button').disabled = false;
}
 function nextQuestion() {
  currentQuestion++;
  document.getElementById('next-button').disabled = true;
  resetAnswer();
  showQuestion();
 }

 function resetAnswer() {
  
  document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_1').parentNode.classList.remove('bg-success');
  document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_2').parentNode.classList.remove('bg-success');
  document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_3').parentNode.classList.remove('bg-success');
  document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
  document.getElementById('header-image').src = './images/quiz.png';
  document.getElementById('questionBody').style = 'display: block';
  document.getElementById('endScreen').style = 'display: none';
  currentQuestion = 0;
  rightQuestions = 0;
  init();
}

function showEndScreen() {
  document.getElementById('endScreen').style = '';
  document.getElementById('questionBody').style = 'display: none';
  let lenghtNumber = questions.length;
  document.getElementById('amount-of-question').innerHTML = lenghtNumber;
  document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
  document.getElementById('header-image').src = './images/finished.png';
}