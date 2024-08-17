let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
  return Math.floor(Math.random()*10);
}

const compareGuesses = (user, computer,secret) =>{
  if(Math.abs(secret-user)>Math.abs(secret-computer)){
    return false;
  }
  else if(Math.abs(secret-computer)>Math.abs(secret-user)){
    return true;
  }
  else{
    return true;
  }
  
}

const updateScore = (winner) => {
  if(winner==='human'){
    humanScore=humanScore+1;
  }
  else{
    computerScore=computerScore+1;
  }
}

const advanceRound = () =>{
  currentRoundNumber+=1;

}
