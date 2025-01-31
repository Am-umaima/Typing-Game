
let words = [
    "apple", "banana", "chocolate", "elephant", "guitar",  
    "sunshine", "notebook", "adventure", "whisper", "butterfly",  
    "journey", "mountain", "rainbow"
];

let Sentences = [
    "Life is beautiful", "The sky is blue", "Coding is fun",  
    "Dream big and work hard", "Success comes with patience",  
    "Happiness is a choice", "Practice makes perfect",  
    "Never stop learning", "Believe in yourself", "Time waits for no one"
];


function StartGame() 
{
        let demoaa=document.querySelectorAll('span[id="demoaa"]')
        let selectedValue=document.getElementById("potatos").value;
        switch (selectedValue)
        {
            case "word":
                for (let j = 0; j < demoaa.length; j++) {
                    for (let i = 0; i < words.length; i++) 
                    {
                        demoaa[j].innerHTML=words[i];
                       j++;
                    }   
                }
                break;
            case "sentence":
                for (let j = 0; j < demoaa.length; j++) {
                    for (let i = 0; i < Sentences.length; i++) 
                    {
                        demoaa[j].innerHTML=Sentences[i];
                       j++;
                    }   
                }
                break;
            default:
                break;
        }
        document.querySelector("table").style.visibility="visible";
}

function ScorCheck()
{
    let score=0;
    let inputs=document.querySelectorAll('input[type="text"]');
    if (document.getElementById("potatos").value==="word") {
        for (let i = 0; i < words.length; i++) 
        {
            for (let h = 0; h < inputs.length; h++) {
                if (inputs[h].value===words[i]) 
                {
                    inputs[h].style.border="2px solid green";
                    score+=1;
                }
                else{
                    inputs[h].style.border="2px solid rgb(153, 9, 9)";
                    
                }
                i++;
            }
        }   
    } else {
        for (let i = 0; i < Sentences.length; i++) 
        {
            for (let h = 0; h < inputs.length; h++) {
                if (inputs[h].value===Sentences[i]) 
                {
                    inputs[h].style.border="2px solid green";
                    score+=1;
                }
                else{
                    inputs[h].style.border="2px solid rgb(153, 9, 9)";
                    
                }
                i++;
            }
        }   
    }
document.getElementById("FinalScore").innerHTML=score+" /4";
}

function Wordsyy() {
    let inputs=document.querySelectorAll('input[type="text"]');
    document.querySelector("table").style.visibility="hidden";
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value="";
        inputs[i].style.border="none";
    }
        
}

 
