// Javascript

// Variables
var startButton = document.querySelector("#start-button");
var nextButton = document.querySelector("#next-button");
var logScoreButton = document.querySelector("#score-button");
var hiddenElements = document.querySelector(".hide");
var nextButton = document.querySelector("#next-button");
let currentQuestion;
var questionElement = document.querySelector("#questions");
var answersElement = document.querySelector("#answers");
var sec = 60;
// var time = setInterval(myTimer, 1000);
var timer = document.querySelector("#timer");

// Event Listeners for Start and Next Buttons
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    currentQuestion++
    nextQuestion()
});

// Start Quiz function to get started.
function startQuiz () {
console.log("started");
startButton.classList.add("hide");
hiddenElements.classList.remove("hide");
questions;
currentQuestion = 0;
nextQuestion();
setInterval(myTimer, 1000)
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
  if (questions.length > currentQuestion + 1) {
    nextButton.classList.remove('hide')
  } else {
    logScoreButton.classList.remove('hide')
  }
};

function setStatus (element, correct) {

};

// var sec = 15;
// var time = setInterval(myTimer, 1000);

function myTimer() {
    timer.innerText = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
    }
}

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
    options: [
        {text: "Computerized Style Sheets", correct: false},
        {text: "Computer Software Security", correct: false},
        {text: "Cascading Style Sheets", correct: true},
        {text: "Cascading Software Sheets", correct: false}
    ]},
    {
    question: "How would you create a pop-up on a web-page that requires a text entry?",
    options: [
        {text: "Alert", correct: false},
        {text: "Confirm", correct: false},
        {text: "Window", correct: false},
        {text: "Prompt", correct: true}
    ]},
    {
    question: "What symbol is used to reference a HTML element id in javascript?",
    options: [
        {text: "!", correct: false},
        {text: ".", correct: false},
        {text: "&", correct: false},
        {text: "#", correct: true}
    ]}, 
    {
    question: "Which library is used to help style the page in a grid format and assist with page responsiveness?",
    options: [
        {text: "JQuery", correct: false},
        {text: "Bootstrap", correct: false},
        {text: "Python", correct: false},
        {text: "C++", correct: true}
    ]}
  ];