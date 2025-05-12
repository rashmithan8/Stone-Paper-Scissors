let userScore=0;
let comScore=0;
let choices=document.querySelectorAll(".img1");
let scoreCom=document.querySelector("#scoreCom");
let scoreU=document.querySelector("#scoreU");
let playButton=document.querySelector(".play-button");
const drawGame=()=>{
    console.log("draw");
    playButton.innerText="Draw Play Again";
    playButton.style.backgroundColor="black";
}

const winnerSelect=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        console.log("u won");
        userScore++;
        scoreU.innerText=userScore;
        playButton.innerText=`You Won :) your ${userChoice} beats ${computerChoice} `;
        playButton.style.backgroundColor="green";
    }
    else{
        console.log("u lose");
        comScore++;
        scoreCom.innerText=comScore;
        playButton.innerText=`You lost :( ${computerChoice} beats your ${userChoice}`;
        playButton.style.backgroundColor="red";
    }
    console.log("ur score is "+userScore +" and com score is "+comScore);
}

const playGame=(userChoice)=>{
    console.log("u enetred "+ userChoice);
    const computerChoice=comChoice();
    console.log("com entered "+computerChoice);
    
    if(userChoice===computerChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor paper
            userWin=computerChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=computerChoice==="scissor"?false:true;
        }
        else if(userChoice==="scissor"){
            userWin=computerChoice==="rock"?false:true;
        }
        winnerSelect(userWin,userChoice,computerChoice);
    } 
}
const comChoice=()=>{
    let options=["rock","paper","scissor"];
    const indx=Math.floor(Math.random()*3);
    return options[indx];
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
})