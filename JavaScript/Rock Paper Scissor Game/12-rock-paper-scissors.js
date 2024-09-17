let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

document.querySelector('.js-rock-button').addEventListener('click', ()=>{playGame('rock');});

document.querySelector('.js-paper-button').addEventListener('click', ()=> {playGame('paper');});

document.querySelector('.js-scissors-button').addEventListener('click', ()=> {playGame('scissors');});

/*
Play the game with keyboard.

type r => play rock.
type p => play paper.
type s => play scissors.
*/ 

//add an event listner 'keydown'.
document.body.addEventListener('keydown', (event)=>{
  if(event.key === 'r'){
    playGame('rock');
  }
  else if(event.key === 'p'){
    playGame('paper');
  }
  else if(event.key === 's'){
    playGame('scissors');
  }
});
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You  
  <img src="/JavaScript/Rock Paper Scissor Game/Images/${playerMove}-emoji.png" class="move-icon">
  <img src="/JavaScript/Rock Paper Scissor Game/Images/${computerMove}-emoji.png" class="move-icon">
  Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  if(!isAutoPlaying){
    //set Interval returns a number(Id), we can use it to stop the interval.
    //Every time we run the interval, we get a different Id.
    intervalId = setInterval(()=> {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000) //because we want to execute this function every second.
    isAutoPlaying = true;
  }
  else{
    //to stop the interval, we can call, clearInterval() method by passing the intervalId of the interval we want to stop.
    clearInterval(intervalId);
    isAutoPlaying = false;
  }  
}