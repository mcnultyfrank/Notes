"use strict";

var userInput = document.querySelector(".user-input"); // add new notes

var addNote = document.getElementById("save-button"); // submit new note

var userText = document.querySelector("#user-text");
var addToNoteSection = document.querySelector(".new-note-container"); // adds new note to note section

var deleteButton = document.querySelector("#delete-button");
var yellow = document.querySelector(".yellow");
var black = document.querySelector(".black");
var red = document.querySelector(".red");
var green = document.querySelector(".green");
var underline = document.querySelector(".fa-underline");
var bold = document.querySelector(".fa-bold");
var italic = document.querySelector(".fa-italic");
var alignLeft = document.querySelector(".fa-align-left");
var alignRight = document.querySelector(".fa-align-right");
var fontSizePick = document.querySelector(".fontValueContainer");
fontSizePick.addEventListener("click", function (e) {
  userText.style.fontSize = e.target.value + "px";
});

var colourPick = function colourPick(colour, hexColour) {
  colour.addEventListener("click", function (e) {
    userText.style.color = hexColour;
  });
};

colourPick(yellow, "#F2E85C");
colourPick(green, "#1E5601");
colourPick(black, "#0D0D0D");
colourPick(red, "#E50000");
bold.addEventListener("click", function (e) {
  userText.style.fontWeight !== "600" ? userText.style.fontWeight = "600" : userText.style.fontWeight = "normal";
});
italic.addEventListener("click", function (e) {
  userText.style.fontStyle == "italic" ? userText.style.fontStyle = "normal" : userText.style.fontStyle = "italic";
});
underline.addEventListener("click", function (e) {
  userText.style.textDecoration == "underline" ? userText.style.textDecoration = "none" : userText.style.textDecoration = "underline";
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
});
document.querySelector("#user-text").style.alignContent = "flex-end";