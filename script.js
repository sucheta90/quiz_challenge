var body = document.body; // The body element
var header = document.body.children[0]; // Header
var main = document.body.children[1]; // Main
var footer = document.body.children[2]; // footer
var showHighScore = document.createElement("a"); // HighScore link
var showTimer = document.createElement("span"); // timer span
var timerHeader = document.createElement("h3"); // timer headiing
var timer = document.createElement("h3"); // actual timer
let timeRemaining = 90; // tracks timer
let finalScore = timeRemaining;
let questionsAnswered = 0;
let endGame = false;
var rightMessage = document.createElement("h3");
var wrongMessage = document.createElement("h3");

//setting message text
rightMessage.textContent = `Right ! 👍 `;
wrongMessage.textContent = `Wrong! 👎 `;
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

// Header element and it children
header.setAttribute(
  "style",
  "display:flex; flex-direction: row-reverse;align-items:center;justify-content:space-between; padding:0 2em ;"
);
//Anchor tag to show high score
showHighScore.textContent = "View High Score";
showHighScore.setAttribute("href", "./");
header.appendChild(showHighScore);

//Timer section
showTimer.setAttribute("class", "timer");
timerHeader.textContent = "Timer: ";
timer.textContent = timeRemaining; // timer is initialez at 100
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

function startQuiz() {
  let index = 0;
  let hasAnswered = false;
  container.setAttribute("class", "hide");
  setTimer();
  askQuestions(index, hasAnswered);
}

function setTimer() {
  var quizInterval = setInterval(() => {
    timeRemaining--;
    timer.textContent = timeRemaining;

    if (timeRemaining === 0 || questionsAnswered === 10 || endGame) {
      clearInterval(quizInterval);
      body.removeChild(main);
      var gameOverMessage = document.createElement("h1");
      gameOverMessage.textContent = "Game Over";
      gameOverMessage.setAttribute("style", "text-align: center");
      body.appendChild(gameOverMessage);
    }
  }, 1000);
}

function askQuestions(index, hasAnswered) {
  if (index < 10 && timeRemaining > 0) {
    var questContainer = document.createElement("div");
    main.appendChild(questContainer);
    questContainer.setAttribute("class", "container");
    var showQuestion = document.createElement("h2"); // p tag to show questions.
    showQuestion.textContent = questionsList[index].question;
    questContainer.appendChild(showQuestion);

    for (let i = 0; i < 4; i++) {
      var answer = document.createElement("button");
      answer.textContent = questionsList[index].options[i];
      answer.setAttribute("class", "choice");
      answer.addEventListener("click", (e) => {
        validateAnswer(e, index, hasAnswered, questContainer);
      });
      questContainer.appendChild(answer);
    }
  }
  hasAnswered = false;
}

// Validates user's choice to match the correct option, and deduct score/timer-value, removes the questContainer,
function validateAnswer(e, index, hasAnswered, questContainer) {
  if (e.target.textContent === questionsList[index].correctAns) {
  } else if (timeRemaining >= 15) {
    timeRemaining -= 15;
  } else {
    endGame = true;
  }

  main.removeChild(questContainer); // removes the questContainer dynamically
  hasAnswered = true; // changes flag to boolean to move on to the next question
  index++; // adds 1 to the index
  questionsAnswered++; // keeps a track of questions answered.
  askQuestions(index, hasAnswered); // calls askQuestion to show the next question in line
}
