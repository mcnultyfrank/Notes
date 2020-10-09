const userInput = document.querySelector(".user-input"); // add new notes
const addNote = document.getElementById("save-button"); // submit new note
const userText = document.querySelector("#user-text");
const addToNoteSection = document.querySelector(".new-note-container"); // adds new note to note section
const dummyText = ["hi there", "person"];
const deleteButton = document.querySelector("#delete-button");
const yellow = document.querySelector(".yellow");
const black = document.querySelector(".black");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const name = 'frank';
const largeFontSize = +"30";
const xLargeFontSize = largeFontSize + 5;
const xxLargeFontSize = xLargeFontSize + 5;
const xxxLargeFontSize = xxLargeFontSize + 5;
const xxxxLargeFontSize = xxxLargeFontSize + 5;




document.querySelector(".fa-plus").addEventListener("click", e => {
    if(userText.style.fontSize = "25px")
    userText.style.fontSize = largeFontSize + "px";
    else if (userText.style.fontSize = "30px"){
        userText.style.fontSize = xLargeFontSize + "px";
    }



});
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


deleteButton.addEventListener("click", e => {
    document.querySelector(".form-input").reset();
});
addNote.addEventListener("click", e => {
    const noteValue = `<h3>${userInput.value}<i class="fas remove-note fa-minus"></i></h3>`
    if(userInput.value !== ""){
    addToNoteSection.innerHTML += noteValue;
    document.querySelector(".form-input").reset();
    }
});
addToNoteSection.addEventListener("click", e => {
    
    console.log(userText);
});
document.querySelector(".remove-note").addEventListener("click", e =>{
    addToNoteSection += "";
});

document.querySelector("#user-text").style.alignContent = "flex-end";


// addNote.addEventListener("click", e => {
//     userInput.submit();
    
// })
