window.onload = function () {
    document.getElementById('mots').checked = false;
    document.getElementById('phrases').checked = false;
};

let wordRadioClicked = document.getElementById('mots');
let sentenceRadioClicked = document.getElementById('phrases');

let ZoneToShow = document.querySelector("span#TheText");
let score = 0;
let order = 0;
let words = ["Microphones", "Botatos", "Cows", "Chickens", "kittens"]; 
let sentences = ["life jamila", "elhawa sultan", "Botatos Koty", "Election of theyear"];
let currentMode = 'words';  


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

function ShowSentence(x) {
    if (x >= sentences.length) {
        GameFinished();
        return;
    }
    ZoneToShow.innerHTML = sentences[x]; 
}

let ButtonClicked = document.getElementById("btnValiderMot");
ButtonClicked.addEventListener("click", function () {
    let inputEc = document.getElementById("inputEcriture").value.trim(); 
    if (currentMode === 'words') {
        if (inputEc === words[order]) {
            score++;  
        }
        ShowWord(order + 1);  
    } else if (currentMode === 'sentences') {
        if (inputEc === sentences[order]) {
            score++; 
        }
        ShowSentence(order + 1);
    }

    order++; 
    AddScore(score, (currentMode === 'words' ? words.length : sentences.length)); 
    document.getElementById("inputEcriture").value = ""; 
});

function GameFinished() {
    document.getElementById("btnValiderMot").disabled = true;  
    ZoneToShow.innerHTML = "Game Is Finished";
}

function AddScore(value, total) {
    let affichScore = document.querySelector(".zoneScore span");
    affichScore.innerHTML = `${value}/${total}`;
}

function resetGame() {
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
  function openPopup() {
            document.getElementById('popupOverlay').classList.add('active');
        }

        function closePopup() {
            document.getElementById('popupOverlay').classList.remove('active');
        }
