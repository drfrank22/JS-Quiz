// Javascript
var startButton = document.querySelector("#start-button");
startButton.addEventListener("click", startQuiz);
var hiddenElements = document.querySelector(".hide");
var nextButton = document.querySelector("#next-button");
let currentQuestion;
var questionElement = document.querySelector("#questions");
var answersElement = document.querySelector("#answers");

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
    populateQuestion(questions[currentQuestion])
}

function populateQuestion (questions) {
    questionElement.innerText = questions.question
    questions.options.forEach(options => {
        var button = document.createElement("button");
        button.innerText = options.text;
        button.classList.add("btn btn-primary")
        button.addEventListener("click", chooseAnswer)
        answersElement.appendChild(button);
    });
};

function chooseAnswer (e) {
    
}



var questions = [{
    question: "What programming language is used to make a web page dynamic?",
    options: ["Javascript", "CSS", "HTML", "None of the Above"],
    answer: 0
  }, {
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