"use strict";

var userInput = document.querySelector(".user-input"); // add new notes

var addNote = document.getElementById("save-button"); // submit new note

var userText = document.querySelector("#user-text");
var addToNoteSection = document.querySelector(".new-note-container"); // adds new note to note section

var dummyText = ["hi there", "person"];
var deleteButton = document.querySelector("#delete-button");
var yellow = document.querySelector(".yellow");
var black = document.querySelector(".black");
var red = document.querySelector(".red");
var green = document.querySelector(".green");
var bold = document.querySelector(".fa-bold");
var italic = document.querySelector(".fa-italic");
var alignLeft = document.querySelector(".fa-align-left");
var alignRight = document.querySelector(".fa-align-right");
var name = 'frank';
var largeFontSize = +"30";
var xLargeFontSize = largeFontSize + 5;
var xxLargeFontSize = xLargeFontSize + 5;
var xxxLargeFontSize = xxLargeFontSize + 5;
var xxxxLargeFontSize = xxxLargeFontSize + 5;
var fontSizes = [+"30", +"35", +"40", +"45", +"50"];
document.querySelector(".fa-plus").addEventListener("click", function (e) {
  for (var index = 0; index < fontSizes.length; index++) {
    userText.style.fontSize = fontSizes[index] + "px";
    console.log(fontSizes);
  }
}); // Colour change events

yellow.addEventListener("click", function (e) {
  userText.style.color = "#F2E85C";
});
green.addEventListener("click", function (e) {
  userText.style.color = "#1E5601";
});
black.addEventListener("click", function (e) {
  userText.style.color = "#0D0D0D";
});
red.addEventListener("click", function (e) {
  userText.style.color = "#E50000";
});
bold.addEventListener("click", function (e) {
  if (userText.style.fontWeight !== "600") {
    userText.style.fontWeight = "600";
  } else if (userText.style.fontWeight == "600") {
    userText.style.fontWeight = "normal";
  }

  ;
});
italic.addEventListener("click", function (e) {
  if (userText.style.fontStyle == "italic") {
    userText.style.fontStyle = "normal";
  } else if (userText.style.fontStyle !== "italic") {
    userText.style.fontStyle = "italic";
  }

  ;
});
deleteButton.addEventListener("click", function (e) {
  document.querySelector(".form-input").reset();
});
addNote.addEventListener("click", function (e) {
  var noteValue = "<h2>".concat(userInput.value.substr(0, 20) + "...", "<i class=\"fas remove-note fa-minus\"></i></h2>");

  if (userInput.value !== "") {
    addToNoteSection.innerHTML += noteValue;
    document.querySelector(".form-input").reset();
  }

  addToNoteSection.addEventListener("click", function (e) {
    userInput.value = addToNoteSection.innerText.slice(0, -3);
  });
}); //copy whatever text is in Notevalue and paste it in userInput

document.querySelector(".remove-note").addEventListener("click", function (e) {
  console.log('hi');
  addToNoteSection.innerText = "";
});
document.querySelector("#user-text").style.alignContent = "flex-end"; // addNote.addEventListener("click", e => {
//     userInput.submit();
// })