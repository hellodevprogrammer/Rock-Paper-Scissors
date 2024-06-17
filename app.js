let userScore=0;
let compScore=0;
const msg = document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score"); 
const compScorePara = document.querySelector("#comp-score"); 
const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor((Math.random()*3));
    return options[randIdx];
}
const drawGame = () =>{
    console.log("game was draw ");
    msg.innerText="Game was draw . Play Again"; 
    msg.style.backgroundColor= "blue";


}
const showWinner= (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        console.log("you win");
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }else{
        compScore++;
        compScorePara.innerText= compScore;
        console.log("you lose"); 
        msg.innerText=`You Lose! ${compChoice} beats your's ${userChoice}`;
        
        msg.style.backgroundColor= "red";


    }
}
const playGame=(userChoice) =>{
   console.log(userChoice)
   const compChoice = genCompChoice();
   console.log(compChoice);
   if(userChoice === compChoice){
    //draw condition
    drawGame();
   }else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice=== "paper" ? false : true;
    }else if(userChoice == "paper"){
        userWin = compChoice === "scissors" ? false:true; 
    }else{
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceId = choice.getAttribute("id")
        // console.log("choice is clicked");
        // console.log(choiceId);
        playGame(choiceId)
    })
})