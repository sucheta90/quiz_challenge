var body = document.body; // The body element
var header = document.body.children[0]; // Header
var main = document.body.children[1]; // Main
var footer = document.body.children[2]; // footer
var showHighScore = document.createElement("a"); // HighScore link
var showTimer = document.createElement("span"); // timer span
var timerHeader = document.createElement("h3"); // timer headiing
var timer = document.createElement("h3"); // actual timer
let timeRemaining = 100; // tracks timer
let finalScore = timeRemaining;
let questionsRemaining = 10;

body.setAttribute("style", "color: #240220; background-color: #e4dafa");

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
header.setAttribute("class", "header"); // class set to .header wit setAttribute method;

//Anchor tag to show highScore
showHighScore.textContent = "View High Score";
showHighScore.setAttribute("href", "./");
header.appendChild(showHighScore);

//Timer section
showTimer.setAttribute("class", "timer");
timerHeader.textContent = "Timer: ";
timer.textContent = timeRemaining; // timer is initialized at 100;
showTimer.append(timerHeader);
showTimer.append(timer);
header.appendChild(showTimer);

// This container will shows the loading page
var container = document.createElement("div");
container.setAttribute("class", "container"); // .container class has a generic style
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
  container.setAttribute("class", "hide"); // Hides the landing page message;
  let index = 0; //index set at 0;
  let hasAnswered = false;

  // setTimer();
  askQuestions(index, hasAnswered);
}

function setTimer() {
  var quizInterval = setInterval(() => {
    timeRemaining--;
    timer.textContent = timeRemaining;

    if (timeRemaining === 0 || questionsRemaining === 0) {
      clearInterval(quizInterval);
    }
    // main.removeChild(questContainer);
    console.log(`Game Over`);
  }, 1000);
}

// function askQuestions(index, hasAnswered) {
//   if (index < 10) {
//     var questContainer = document.createElement("div");
//     main.appendChild(questContainer);
//     questContainer.setAttribute("class", "container");
//     var showQuestion = document.createElement("h2"); // p tag to show questions.
//     showQuestion.textContent = questionsList[index].question;
//     questContainer.appendChild(showQuestion);

//     for (let i = 0; i < 4; i++) {
//       var answer = document.createElement("button");
//       answer.textContent = questionsList[index].options[i];
//       answer.addEventListener("click", (e) => {
//         validateAnswer(e, index, hasAnswered, questContainer);
//       });
//       questContainer.appendChild(answer);
//     }
//     hasAnswered = false;
//   }
// }
function showQuestion(index) {
  if (index < 10) {
    let questContainer = document.createElement("div");
    let question = document.createElement("h3");
    
    main.appendChild(questContainer);
    question.textContent = questionsList[index].question;
    questContainer.appendChild(question);
    for(let i = 0; i < questionsList[index].options.length; i++){
      let choices = document.createElement("p");
    }
  }
}

// Validates user's choice to match the correct option, and deduct score/timer-value, removes the questContainer,
function validateAnswer(element, index, hasAnswered, questContainer) {
  console.log(`index from validaion`, index);
  console.log(`inside validation fucntion`, questionsList[index].correctAns);
  if (element.textContent === questionsList[index].correctAns) {
  } else if (timeRemaining >= 15) {
    timeRemaining -= 15;
    timer.textContent = timeRemaining;
  } else {
    timer.textContent = timeRemaining;
  }

  main.removeChild(questContainer); // removes the questContainer dynamically
  hasAnswered = true; // changes flag to boolean to move on to the next question
  index++; // adds 1 to the index
  questionsRemaining--; // keeps a track of questions answered.
  hasAnswered ? askQuestions(index, hasAnswered) : ""; // calls askQuestion to show the next question in line
}

function askQuestions(index, hasAnswered) {
  if (index < 10) {
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
      questContainer.appendChild(answer);
    }
    questContainer.addEventListener("click", (e, index, hasAnswered) => {
      var element = e.target;
      if (element.matches(".choice")) {
        alert("clicked");
        validateAnswer(element, index, hasAnswered, questContainer);
      }
    });
    hasAnswered = false;
  }
}
