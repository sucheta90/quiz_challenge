var body = document.body;
var header = document.body.children[0];
var main = document.body.children[1];
var footer = document.body.children[2];

let timeRemaining = 120;

body.setAttribute("style", "color: #001217");

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
    options: [
      "Hyperlink and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Management Link",
    ],
    correctAns: "Hyper Text Markup Language",
  },
  {
    question: "Choose the correct HTML element to define important text?",
    options: [
      "Hyperlink and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Management Link",
    ],
    correctAns: "Hyper Text Markup Language",
  },
  {
    question:
      "What is the correct HTML for referring to an external style sheet??",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAns: "Hyper Text Markup Language",
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
      "// this is a comment",
    ],
    correctAns: "/* this is a comment */",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<scripting>", "<javascript>", "<script>"],
    correctAns: "<script>",
  },
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
    question: "What does HTML stand for?",
    options: [
      "Hyperlink and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Management Link",
    ],
    correctAns: "Hyper Text Markup Language",
  },
];

// Header element and it children
header.setAttribute(
  "style",
  "display:flex; flex-direction: row-reverse;align-items:center;justify-content:space-between; padding:0 2em ;"
);
//Anchor tag to show high score
var showHighScore = document.createElement("a");
showHighScore.textContent = "View High Score";
showHighScore.setAttribute("href", "./");
header.appendChild(showHighScore);

//Timer section
var showTimer = document.createElement("span");
showTimer.setAttribute("class", "timer");
var timerHeader = document.createElement("h3");
timerHeader.textContent = "Timer: ";
var timer = document.createElement("h3");
timer.textContent = 0;
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
  "Try to answer tehe following qiestions within the time limit. Keep in mind that incorrect answers will penalize your score/time by tem seconds!";
container.appendChild(loadingMessage);

//Start button
var startBtn = document.createElement("button");
startBtn.textContent = "Start Quiz";
container.appendChild(startBtn);
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  container.setAttribute("class", "hide");
  window.alert("Clicked");
}
