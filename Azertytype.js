let words=["ikchawen","isardonan","ifonasen","yazidan"]
let Sentences=["life jamila","elhawa sultan","isti9lal lmeghrib","dunald und angela"]


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
                i++;
            }
        }   
    }
document.getElementById("FinalScore").innerHTML=score+" /4";
}
 