var body = document.body;
var header = document.body.children[0];
var main = document.body.children[1];
var footer = document.body.children[2];

body.setAttribute("style", "background-color: #D4FFBD; color: #001217");

// Main Header
var mainHeader = document.createElement("h1");
mainHeader.textContent = "Quiz Challenge";
mainHeader.setAttribute("style", "color: ; ");
main.appendChild(mainHeader);
