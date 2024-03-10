let userScore = 0;
let computerScore = 0;


const selection = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");

const userScorePara = document.querySelector("#yourScore");
const compScorePara = document.querySelector("#compScore");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const indexNo = Math.floor(Math.random() *3);
    return options[indexNo];

};

const drawGame = () =>{
    console.log("Draw game!");
    message.innerText = "It's a Draw!";
}

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        message.innerText = "Congratulation, You Win!"
    }
    else{
        computerScore++;
        compScorePara.innerText = computerScore;
        console.log("You Loose!");
        message.innerText = "You Lost! :("
    }
}

const playgame =(userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice = " +compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = "true";
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ?false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "rock" ? true :false;
        }
        else {
            userWin = compChoice ==="paper"? true:false;
        }

        showWinner(userWin);
    }
}


selection.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})

