window.onload = function () {
    document.getElementById("btnValiderMot").disabled = true;  
    document.getElementById('mots').checked = false;
    document.getElementById('phrases').checked = false;
    document.getElementById("inputEcriture").disabled=true;
};
let wordRadioClicked = document.getElementById('mots');
let sentenceRadioClicked = document.getElementById('phrases');
let order = 0;
let score = 0;
let words = ["Microphones", "Botatos", "Cows", "Chickens", "kittens","Sweets"]; 
let sentences = ["life jamila", "elhawa sultan", "Botatos Koty", "Election of theyear"];
let currentMode = 'words';  
let ZoneToShow = document.querySelector("span#TheText");

wordRadioClicked.addEventListener("click", function () {
    resetGame();
    currentMode = 'words'; 
    ShowWord(order);
});

sentenceRadioClicked.addEventListener("click", function () {
    resetGame(); 
    currentMode = 'sentences';
    ShowSentence(order);
});
function ShowWord(x) {
    if (x >= words.length) {
        GameFinished();
        return;
    }
    ZoneToShow.innerHTML = words[x];  
}
let ButtonClicked = document.getElementById("btnValiderMot");
ButtonClicked.addEventListener("click", function () { 
    let inputEc = document.getElementById("inputEcriture").value.trim(); 
    if (currentMode === 'words') { 
        if (inputEc === words[order]) {
            score++;  
        }
        ShowWord(order + 1);  
    } 
    else if (currentMode === 'sentences') {
        if (inputEc === sentences[order]) {
            score++; 
        }
        ShowSentence(order + 1);
    }
    order++; 
    AddScore(score, (currentMode === 'words' ? words.length : sentences.length)); 
});
function AddScore(vany,lengthy) {
    let affichScore = document.querySelector(".zoneScore span");
    document.getElementById("inputEcriture").value="";
    affichScore.innerHTML = `${vany}/${lengthy}`;
}
function ShowSentence(x) {
    if (x >= sentences.length) {
        GameFinished();
        return;
    }
    ZoneToShow.innerHTML = sentences[x]; 
}
function GameFinished() {
    document.getElementById("btnValiderMot").disabled = true;  
    ZoneToShow.innerHTML = "Game Is Finished";
} 
function resetGame() {
    document.getElementById("inputEcriture").disabled=false;
    score = 0;
    order = 0;
    ZoneToShow.innerHTML = ""; 
    document.getElementById("btnValiderMot").disabled = false;
    let nbr
     if (currentMode === 'words') {
       nbr=words.length
    } else if (currentMode === 'sentences') {
        nbr=sentences.length
    }
     AddScore(0, nbr); 
}


// function openPopup() {
//             document.getElementById('popupOverlay').classList.add('active');
// }

// function closePopup() {
//             document.getElementById('popupOverlay').classList.remove('active');
// }