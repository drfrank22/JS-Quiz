// Javascript

// Click Event Listener to Start Quiz
startButton.addEventListener("click", startQuiz);

// Start Quiz function to get started.
function startQuiz () {
console.log("started");
startButton.classList.add("hide");
hiddenElements.classList.remove("hide");
questions;
currentQuestion = 0;
nextQuestion();
// nextButton.classList.remove("hide");
}



function nextQuestion () {
    resetAnswers ();
    populateQuestion(questions[currentQuestion]);
}

function resetAnswers () {
    nextButton.classList.add("hide");
    while (answersElement.firstChild) {
        answersElement.removeChild 
        (answersElement.firstChild)
    }
}

function populateQuestion (questions) {
    questionElement.innerText = questions.question
    questions.options.forEach(options => {
        var button = document.createElement("button");
        button.innerText = options.text;
        button.classList.add("btn", "btn-primary");
        if (options.correct) {
            button.dataset.correct = options.correct
            }
        button.addEventListener("click", chooseAnswer);
        answersElement.appendChild(button);
    });
};



function chooseAnswer (e) {
    var selectedAnswer = e.target
    var correct = selectedAnswer.dataset.correct
    setStatus(document.body, correct)
    Array.from(answersElement.children).forEach(button => {
    setStatus(button, button.dataset.correct)
  })
//   if (questions.length > currentQuestion + 1) {
//     nextButton.classList.remove('hide')
//   } else {
//     startButton.innerText = 'Restart'
//     startButton.classList.remove('hide')
//   }
};

function setStatus () {

}

// Variables
var startButton = document.querySelector("#start-button");
var nextButton = document.querySelector("#next-button");
var hiddenElements = document.querySelector(".hide");
var nextButton = document.querySelector("#next-button");
let currentQuestion;
var questionElement = document.querySelector("#questions");
var answersElement = document.querySelector("#answers");

// Question Variables
var questions = [
    {
    question: "What programming language is used to make a web page dynamic?",
    options: [
        {text: "Javascript", correct: true},
        {text: "CSS", correct: false},
        {text: "HTML", correct: false},
        {text: "None of the Above", correct: false}
    ]},
    {
    question: "What does CSS stand for?",
    options: ["Computerized Style Sheets", "Computer Software Security", "Cascading Style Sheets", "Cascading Software Sheets"],
    answer: 2
  }, {
    question: "How would you create a pop-up on a web-page that requires a text entry?",
    options: ["Alert", "Confirm", "Window", "Prompt"],
    answer: 3
  },{
    question: "What symbol is used to reference a HTML element id in javascript?",
    options: ["!", ".", "&", "#"],
    answer: 3
  }, {
    question: "Which library is used to help style the page in a grid format and assist with page responsiveness?",
    options: ["JQuery", "Bootstrap", "Python", "C++"],
    answer: 1
  }];