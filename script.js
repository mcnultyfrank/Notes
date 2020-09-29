const userInput = document.querySelector(".form-input"); // add new notes
const addNote = document.getElementById("save-button"); // submit new note
const addToNoteSection = document.querySelector(".new-note-container"); // adds new note to note section
const dummyText = ["hi there", "person"];
const deleteButton = document.getElementById("delete-button");
const yellow = document.querySelector(".yellow");
const black = document.querySelector(".black");
const red = document.querySelector(".red");
const green = document.querySelector(".green");

const newFolder = 
addToNoteSection.innerHTML = "";

addNote.addEventListener("click", e => {
    dummyText.forEach((event, index) => {
        if (index === 0){
            addToNoteSection.innerHTML += `<h3>${event}</h3>`}
    })
})
deleteButton.addEventListener("click", e => {
    userInput.reset();
})
addNote.addEventListener("click", e => {
    userInput.submit();
    
})
yellow.addEventListener("click", e => {
    document.querySelector("#user-text").style.color = "#F2E85C";
    })
green.addEventListener("click", e => {
        document.querySelector("#user-text").style.color = "#1E5601";
        })
black.addEventListener("click", e => {
            document.querySelector("#user-text").style.color = "#0D0D0D";
            })
red.addEventListener("click", e => {
                document.querySelector("#user-text").style.color = "#E50000";
                })
