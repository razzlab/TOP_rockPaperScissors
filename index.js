function getComputerChoice() {
           let a= Math.floor(Math.random()*3)
           if(a==1){
             return "rock"
           }else if (a==2){
             return "paper"
           }else{
             return "scissors"
           }
         }



    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {

      // and for each one we add a 'click' listener
      button.addEventListener('click', () => {
        let playerSelection = button.className;
        const computerSelection = getComputerChoice();




       const playerScore= document.querySelector('span.player');
       const compScore=document.querySelector('span.computer');
       const outCome = document.querySelector('div.outcome');
       let player = Number(playerScore.innerHTML);
       let comp = Number(compScore.innerHTML);

 function game() {
    
    let gameResult = playRound(playerSelection,computerSelection);
    function playRound(playerSelection, computerSelection) {
      if (playerSelection == computerSelection) {
        return "It's a tie";
      } else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
          player = ++player;
          comp = comp;
          return "You win! paper beats rock";
        } else {
          player = player;
          comp = ++comp;
          return "You lose! rock beats scissors";
        }
      } else if (computerSelection == "paper") {
        if (playerSelection == "scissors") {
          player = ++player;
          comp = comp;
          return "You win! scissors beats paper";
        } else {
          player = player;
          comp = ++comp;
          return "You lose! paper beats rock";
        }
      } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
          player = ++player;
          comp = comp;
          return "You win! rock beats scissors";
        } else {
          player = player;
          comp = ++comp;
          return "You lose! scissors beats paper";
        }
      }
    
     }
     playerScore.textContent = player;
     compScore.textContent = comp;
      
     if(player+comp==5){
      if(player>comp){
      if(!alert('You Win!!!\nYour score: '+player+ '\nComputer Score: '+comp)){window.location.reload();}
      }
      else{
        if(!alert('You Lose!!!\nYour score: '+player +'\nComputer Score: ' +comp)){window.location.reload();}
      }
     }else{

    return gameResult;
    
     }
   
    }
      outCome.textContent = game()
      });
    });


    