let words=["ikchawen","isardonan","ifonasen","yazidan"]

// let userSays = prompt("Word or Sentence ?");
let ZoneTOShow= document.querySelector("span#TheText");

function ShowChosed(x) {

    
    if (words[x]===undefined) {
        GameFinished() 
    }else
    {
        ZoneTOShow.innerHTML=words[x]
    }
  
}

let order=0;

let ButtonClicked= document.getElementById("btnValiderMot");
ButtonClicked.addEventListener("click",function NextToShow() {
    ShowChosed(order)
    order++
    console.log(`am clicked in ${order}`)
})



function GameFinished() {
    document.getElementById("btnValiderMot").disabled=true;
    ZoneTOShow.innerHTML="Game Is Finished ";
}
