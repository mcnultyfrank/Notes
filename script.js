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
const bold = document.querySelector(".fa-bold")
const italic = document.querySelector(".fa-italic");
const alignLeft = document.querySelector(".fa-align-left");
const alignRight = document.querySelector(".fa-align-right");
const name = 'frank';
const largeFontSize = +"30";
const xLargeFontSize = largeFontSize + 5;
const xxLargeFontSize = xLargeFontSize + 5;
const xxxLargeFontSize = xxLargeFontSize + 5;
const xxxxLargeFontSize = xxxLargeFontSize + 5;
const fontSizes = [+"30", +"35", +"40", +"45", +"50"];



document.querySelector(".fa-plus").addEventListener("click", e => {
  
    for (let index = 0; index < fontSizes.length; index++) {
        userText.style.fontSize = fontSizes[index] + "px";
        console.log(fontSizes)
    }


});
// Colour change events
yellow.addEventListener("click", e => {
    userText.style.color = "#F2E85C";
    })
green.addEventListener("click", e => {
    userText.style.color = "#1E5601";
        })
black.addEventListener("click", e => {
    userText.style.color = "#0D0D0D";
            })
red.addEventListener("click", e => {
    userText.style.color = "#E50000";
                })
bold.addEventListener("click", e => {
   
    if (userText.style.fontWeight !== "600")
    {userText.style.fontWeight = "600"}
    else if(userText.style.fontWeight == "600"){
        userText.style.fontWeight = "normal"}
    ;
})

italic.addEventListener("click", e => {
    if(userText.style.fontStyle == "italic"){
        userText.style.fontStyle = "normal"
    }else if (userText.style.fontStyle !== "italic")
    {userText.style.fontStyle = "italic"}
    ;
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
//copy whatever text is in Notevalue and paste it in userInput

document.querySelector(".remove-note").addEventListener("click", e =>{
    console.log('hi');
    addToNoteSection.innerText = "";
});

document.querySelector("#user-text").style.alignContent = "flex-end";


// addNote.addEventListener("click", e => {
//     userInput.submit();
    
// })
