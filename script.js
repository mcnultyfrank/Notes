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
const newFolder = document.querySelector(".newFolder");
const signUpButton = document.querySelector(".logInButton");
const storeNotes = [];




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
userInput.addEventListener("keydown", e => e.keyCode === 13 ? e.preventDefault() : false );

addNote.addEventListener("click", () => {
    storeNotes.push(userInput.value);
    const noteValueElement = document.createElement(`h2`)
    noteValueElement.innerText = `${storeNotes.map(e => e).pop()}`;
    if(userInput.value !== ""){
        addToNoteSection.appendChild(noteValueElement);
        document.querySelector(".form-input").reset();
    }

        noteValueElement.addEventListener("click", e => {
                userInput.value = noteValueElement.innerHTML;
        });
});

document.querySelector("#user-text").style.alignContent = "flex-end";
    newFolder.addEventListener(("click"), e => {
        alert("Folder functionality still in development");
})

signUpButton.addEventListener(("click"), () => {
    firebase.auth().signInWithRedirect(provider);
})
