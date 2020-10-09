"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

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
var name = 'frank';
var largeFontSize = +"30";
var xLargeFontSize = largeFontSize + 5;
var xxLargeFontSize = xLargeFontSize + 5;
var xxxLargeFontSize = xxLargeFontSize + 5;
var xxxxLargeFontSize = xxxLargeFontSize + 5;
document.querySelector(".fa-plus").addEventListener("click", function (e) {
  if (userText.style.fontSize = "25px") userText.style.fontSize = largeFontSize + "px";else if (userText.style.fontSize = "30px") {
    userText.style.fontSize = xLargeFontSize + "px";
  }
});
yellow.addEventListener("click", function (e) {
  document.querySelector("#user-text").style.color = "#F2E85C";
});
green.addEventListener("click", function (e) {
  document.querySelector("#user-text").style.color = "#1E5601";
});
black.addEventListener("click", function (e) {
  document.querySelector("#user-text").style.color = "#0D0D0D";
});
red.addEventListener("click", function (e) {
  document.querySelector("#user-text").style.color = "#E50000";
});
deleteButton.addEventListener("click", function (e) {
  document.querySelector(".form-input").reset();
});
addNote.addEventListener("click", function (e) {
  var noteValue = "<h3>".concat(userInput.value, "<i class=\"fas remove-note fa-minus\"></i></h3>");

  if (userInput.value !== "") {
    addToNoteSection.innerHTML += noteValue;
    document.querySelector(".form-input").reset();
  }
});
addToNoteSection.addEventListener("click", function (e) {
  console.log(userText);
});
document.querySelector(".remove-note").addEventListener("click", function (e) {
  addToNoteSection += (_readOnlyError("addToNoteSection"), "");
});
document.querySelector("#user-text").style.alignContent = "flex-end"; // addNote.addEventListener("click", e => {
//     userInput.submit();
// })