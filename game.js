function computerPlay(){
const selectionVals=['Rock',"Paper","Scissors"];

const num_low = 0;
const num_high = selectionVals.length;
const randomIndex = Math.floor((Math.random() * (num_high - num_low)) + num_low);

return selectionVals[randomIndex]
}

function playRound(player, computer) {
    let playerSelection = player.toLowerCase();
    let computerSelection = computer.toLowerCase();

    if (playerSelection == computerSelection) {
        return 'Tie, please play again.'
    }
  switch(playerSelection){
      case "rock":
      if (computerSelection == "paper"){
          return "You lose. Paper beats Rock";
      }
      else {
          return "You win. Rock beats Scissors"
      }
      break;

      case "paper":
      if (computerPlay == "scissors") {
          return "You lose. Scissors beats paper";
      }
      else {
          return "You win. Paper beats rock."
      }
      break;

      case "scissors":
      if(computerPlay == "rock"){
          return "You lose. Rock beats scissors.";
      }
      else {
          return "You win. Scissors beats paper.";
      }
      break;
  }
}

console.log(playRound('rock', computerPlay())); 

function game(){
    for (var i = 0; i<5; i++){
        let playerChoice = prompt("Rock, Paper, Scissors?");
        let computerChoice = computerPlay();
        console.log(playRound(playerChoice, computerChoice))
    }
}


game();