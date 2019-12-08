var box = document.querySelector("#box");
var buttons;
var questionIndex = 0;

var questions = [
  {
    title: "1 Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "2 The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "3 The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "4 The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "5 The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  }
 
];
function displayResults() {
  alert("GAME OVER")
}

function displayQuestion() {
  var question = document.body.querySelector(".question")
  question.textContent = questions[questionIndex].title;

  box.appendChild(question);

  for (i = 0; i < 4; i++) {
    var button = document.body.querySelector('.choice[data-answer="' + i + '"]')
    button.textContent = questions[questionIndex].choices[i]
    button.addEventListener("click", checkAnswer)
    box.appendChild(button);
  }

  buttons = document.querySelector(".quizButton");
}

displayQuestion();

function checkAnswer(event) {
  console.log(event.target.textContent)

  console.log(questionIndex)
  if (questions[questionIndex].answer === event.target.textContent) {
    var correct = document.querySelector(".correct")
    correct.classList.add("active")

  } else {
    var incorrect = document.querySelector(".incorrect")
    incorrect.classList.add("active")
    //take away time

  }
  setTimeout(function () {
    var answer = document.querySelector(".answer")
    answer.classList.remove("active")
  }, 1000);

  questionIndex++;
  if (questionIndex > questions.length - 1) {
    displayResults()
  }
  else {
    displayQuestion()
  }



};