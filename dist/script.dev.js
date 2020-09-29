"use strict";

var userInput = document.querySelector(".form-input"); // add new notes

var addNote = document.getElementById("save-button"); // submit new note

var addToNoteSection = document.querySelector(".new-note-container"); // adds new note to note section

var dummyText = ["hi there", "person"];
var deleteButton = document.getElementById("delete-button");
var yellow = document.querySelector(".yellow");
var black = document.querySelector(".black");
var red = document.querySelector(".red");
var green = document.querySelector(".green");
var newFolder = addToNoteSection.innerHTML = "";
addNote.addEventListener("click", function (e) {
  dummyText.forEach(function (event, index) {
    if (index === 0) {
      addToNoteSection.innerHTML += "<h3>".concat(event, "</h3>");
    }
  });
});
deleteButton.addEventListener("click", function (e) {
  userInput.reset();
});
addNote.addEventListener("click", function (e) {
  userInput.submit();
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