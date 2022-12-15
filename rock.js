let rs = require('readline-sync')


function computerChoice() {
  let choice = Math.floor(Math.random() * 3);
  let output = '';
  switch(choice){
    case 0:
      output = 'Scissors';
    case 1:
      output = 'Paper';
      break;
    case 2:
      output = 'Rock';
      break;
  }
  return output.toUpperCase();
}

function playerChoice(){
  let valid = false;
  let output = '';
  while(valid === false){
    let playerChoice = rs.question('Pick rock, paper, or scissors: ').toUpperCase();

    if(playerChoice === 'ROCK'){
      output = playerChoice;
      valid = true;
    } else if(playerChoice === 'PAPER'){
      output = playerChoice;
      valid = true;
    } else if(playerChoice === 'SCISSORS'){
      output = playerChoice;
      valid = true;
    } else {console.log('Invalid Input Try Again')}
  }
  return output.toUpperCase();
}

let playRound = () => {
  let player = playerChoice();
  let computer = computerChoice();

  console.log(computer)

  if(player === 'ROCK' && computer === 'PAPER') {
    return 'YOU LOSE';
  } else if(player === 'PAPER' && computer === 'SCISSORS'){
    return 'YOU LOSE';
  } else if(player === 'SCISSORS' && computer === 'ROCK'){
    return 'YOU LOSE';
  } else if(player === computer){
    return('TIE');
  } else{return 'YOU WIN'}
}

console.log(playRound())