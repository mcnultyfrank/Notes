const userInput = document.querySelector(".user-input"); // add new notes
const addNote = document.getElementById("save-button"); // submit new note
const userText = document.querySelector("#user-text");
const addToNoteSection = document.querySelector(".new-note-container"); // adds new note to note section
const deleteButton = document.querySelector("#delete-button");
const yellow = document.querySelector(".yellow");
const black = document.querySelector(".black");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const underline = document.querySelector(".fa-underline");
const bold = document.querySelector(".fa-bold")
const italic = document.querySelector(".fa-italic");
const alignLeft = document.querySelector(".fa-align-left");
const alignRight = document.querySelector(".fa-align-right");
const fontSizePick = document.querySelector(".fontValueContainer");

fontSizePick.addEventListener("click", e => {
    userText.style.fontSize = e.target.value + "px";
})
 const colourPick = (colour, hexColour) => {
    colour.addEventListener("click", e => {
        userText.style.color = hexColour;
 })}
 colourPick(yellow, "#F2E85C");
 colourPick(green, "#1E5601");
 colourPick(black, "#0D0D0D");
 colourPick(red, "#E50000")

        
bold.addEventListener("click", e => {
    userText.style.fontWeight !== "600" ? userText.style.fontWeight = "600" : userText.style.fontWeight = "normal";
})
italic.addEventListener("click", e => {
    userText.style.fontStyle == "italic" ? userText.style.fontStyle = "normal" : userText.style.fontStyle = "italic";
})
underline.addEventListener("click", e => {
    userText.style.textDecoration == "underline" ? userText.style.textDecoration = "none" : userText.style.textDecoration = "underline";
})

deleteButton.addEventListener("click", e => {
    document.querySelector(".form-input").reset();
});
addNote.addEventListener("click", e => {
    const noteValue = `<h2>${userInput.value.substr(0, 20) + "..."}<i class="fas remove-note fa-minus"></i></h2>`
    if(userInput.value !== ""){
    addToNoteSection.innerHTML+= noteValue;
    document.querySelector(".form-input").reset();
    }
    addToNoteSection.addEventListener("click", e => {
        userInput.value = addToNoteSection.innerText.slice(0, -3);
    });
});

document.querySelector("#user-text").style.alignContent = "flex-end";


