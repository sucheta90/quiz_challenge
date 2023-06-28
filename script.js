var body = document.body; // The body element
var header = document.body.children[0]; // Header
var main = document.body.children[1]; // Main
var footer = document.body.children[2]; // footer
var showHighScore = document.createElement("a"); // HighScore link
var showTimer = document.createElement("span"); // timer span
var timerHeader = document.createElement("h3"); // timer headiing
var timer = document.createElement("h3"); // actual timer
let timeRemaining = 90; // tracks timer
let questionsAnswered = 0; // tracks number of questions answered
let scoreBoard = document.getElementById("score_board"); // to show the scoreBoard
let scoreKeeper = [];

// All questions
let questionsList = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlink and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Management Link",
    ],
    correctAns: "Hyper Text Markup Language",
  },
  {
    question: "Who is making the Web standards?",
    options: [
      "Mozilla",
      "Google",
      "The World Wide Web Consortium",
      "Microsoft",
    ],
    correctAns: "The World Wide Web Consortium",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<br/>", "<lb>", "<st>"],
    correctAns: "<br/>",
  },
  {
    question: "How can you make a numbered list?",
    options: ["<list>", "<dl>", "<ol>", "<ul>"],
    correctAns: "<ol>",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAns: "Cascading Style Sheets",
  },
  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    options: [
      "In the <head> section",
      "At The end of the document",
      "In the body section",
      "In the <html> section",
    ],
    correctAns: "In the <head> section",
  },
  {
    question: "How do you insert a comment in a CSS file?",
    options: [
      "//this is a comment",
      "/* this is a comment */",
      "' this is a comment",
      "<!-- this is a comment -->",
    ],
    correctAns: "/* this is a comment */",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["fgcolor", "color", "text-color", "font-color"],
    correctAns: "color",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<scripting>", "<javascript>", "<script>"],
    correctAns: "<script>",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: [
      "<script href='abc.js'>",
      "<script name='abc.js'",
      "<script src='abc.js'",
      "<link href='abc.js'>",
    ],
    correctAns: "<script src='abc.js'",
  },
];

let correctMsg = document.getElementById("correct"); // shows the message- correct when user select the correct answer
let wrongMsg = document.getElementById("wrong"); // shows the message- wrong when user select the wrong answer

// The Game Over div set to display none and will only be visible when the game is over
let gameStat = document.getElementById("gameStat");
let score = document.getElementById("score");
let playerInfoForm = document.getElementById("playerInfoForm"); // form on submit will setItem to localStorage
let playerName = document.getElementById("playerName");

//Child elements inside Header
//Anchor tag to show high score
showHighScore.innerText = "View High Scores";
showHighScore.setAttribute("href", "gameStat");
header.appendChild(showHighScore);

//Timer section
showTimer.setAttribute("class", "timer");
timerHeader.textContent = "Timer: ";
timer.textContent = 0; // timer is initialez at 100
showTimer.append(timerHeader);
showTimer.append(timer);
header.appendChild(showTimer);
showHighScore.textContent = "View High Score";
showHighScore.setAttribute("href", "./");
header.appendChild(showHighScore);

// This container will show the content of the quiz challenge dynamically
var container = document.createElement("div");
container.setAttribute("class", "container");
main.appendChild(container);

// This is the main header
var loadingHeader = document.createElement("h1");
loadingHeader.textContent = "Code Quiz Challenge";
container.appendChild(loadingHeader);

// Loading message/ instruction
var loadingMessage = document.createElement("p");
loadingMessage.textContent =
  "Try to answer tehe following qiestions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 15 seconds!";
container.appendChild(loadingMessage);

//Start button
var startBtn = document.createElement("button");
startBtn.textContent = "Start Quiz";
container.appendChild(startBtn);
startBtn.setAttribute("class", "button");
startBtn.addEventListener("click", startQuiz);

//The fuction called on click event, fired by the start button
function startQuiz() {
  timer.innerText = timeRemaining;
  let index = 0;
  container.setAttribute("class", "hide");
  setTimer();
  askQuestions(index);
}

// This fuction sets the interval, tracks the timer/timeRemaining and clears Interval if the questions answered is 10 or timeremaininig is 0
function setTimer() {
  var quizInterval = setInterval(() => {
    timeRemaining--;
    timer.textContent = timeRemaining;

    if (timeRemaining <= 0 || questionsAnswered === 10) {
      timer.innerText = 0;
      clearInterval(quizInterval);
      gameOver();
    }
  }, 1000);
}

//Creates a quest container to show questions and it's choices dynamically.
function askQuestions(index) {
  if (index < 10 && timeRemaining > 0) {
    var questContainer = document.createElement("div");
    main.appendChild(questContainer);
    questContainer.setAttribute("class", "container");
    var showQuestion = document.createElement("h2"); // h2 tag to show questions.
    showQuestion.textContent = questionsList[index].question;
    questContainer.appendChild(showQuestion);
    // Creates buttons dynamically and adds event listeners to them
    for (let i = 0; i < 4; i++) {
      var answer = document.createElement("button");
      answer.textContent = questionsList[index].options[i];
      answer.setAttribute("class", "choice");
      answer.addEventListener("click", (e) => {
        validateAnswer(e, index, questContainer);
      });
      questContainer.appendChild(answer);
    }
  }
}

// Validates user's choice to match the correct option, and deduct score/timer-value, removes the questContainer,
function validateAnswer(e, index, questContainer) {
  if (e.target.innerText === questionsList[index].correctAns) {
    correctMsg.removeAttribute("hidden");
    wrongMsg.setAttribute("hidden", true);
    console.log("correct ans");
  } else if (timeRemaining > 0) {
    wrongMsg.removeAttribute("hidden");
    correctMsg.setAttribute("hidden", true);
    timeRemaining -= 15;
    if (timeRemaining < 0) {
      questContainer.setAttribute("class", "hide");
    }
  }
  main.removeChild(questContainer); // removes the questContainer dynamically
  hasAnswered = true; // changes flag to boolean to move on to the next question
  index++; // adds 1 to the index
  questionsAnswered++; // keeps a track of questions answered.
  askQuestions(index, hasAnswered); // calls askQuestion to show the next question in line
}

// function setScore() {}

// function renderScore() {}

function gameOver() {
  score.innerHTML = timeRemaining > 0 ? timeRemaining : 0;
  gameStat.removeAttribute("hidden");
  gameStat.setAttribute("class", "container");
  playerInfoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let user = {
      playerName: playerName.value,
      score: score.innerHTML,
    };
    // scoreKeeper.push(user);
    // let scores = JSON.stringify(user);
    localStorage.setItem(`${user.playerName}`, user.score);
    console.log(scoreKeeper);
    playerName.value = "";
    getScores();
  });
}

function getScores() {
  var prevScores = JSON.parse(localStorage.getItem("scores"));
  console.log(prevScores);
}
