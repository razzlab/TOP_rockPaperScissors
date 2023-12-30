// function game(){

//     function playRound(playerSelection, computerSelection) {
//       if (playerSelection == computerSelection){
//          return "It's a tie";
//        } else if(computerSelection== "rock"){
//          if(playerSelection=="paper"){
//            player = ++player;
//            comp= comp;
//            return "You win! paper beats rock";
//          }else{
//            player =player;
//            comp= ++comp;
//            return "You lose! rock beats scissors"
//          }
//        } else if(computerSelection== "paper"){
//          if(playerSelection=="scissors"){
//            player = ++player;
//             comp= comp;
//            return "You win! scissors beats paper";
//          }else{
//            player = player;
//             comp= ++comp;
//            return "You lose! paper beats rock";
//          }
//        } else if(computerSelection== "scissors"){
//          if(playerSelection=="rock"){
//            player = ++player;
//             comp=comp;
//            return "You win! rock beats scissors";
//          }else{
//            player = player;
//             comp= ++comp;
//            return "You lose! scissors beats paper";
//          }
//        } 
    
//     }
    
    
    
    
//        function getComputerChoice() {
//          let a= Math.floor(Math.random()*3)
//          if(a==1){
//            return "rock"
//          }else if (a==2){
//            return "paper"
//          }else{
//            return "scissors"
//          }
//        }         
    
    
    
//     const playerSelection = prompt ("Choose Rock, Paper, Scissors");
//     const computerSelection = getComputerChoice();
    
//     console.log(playRound(
//               playerSelection,computerSelection)
//                 ,"yourscore = " + player,
//                 "compscore = " + comp
//                );
    
    
//     } 
    
    
//     let player = 0
//     let comp = 0
//     console.log(game());
//     console.log(game());
//     console.log(game());
//     console.log(game());
//     console.log(game());



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




        let player = 0
       let comp = 0


// function game(){

            function playRound(playerSelection, computerSelection) {
      if (playerSelection == computerSelection){
         return "It's a tie";
       } else if(computerSelection== "rock"){
         if(playerSelection=="paper"){
           player = ++player;
           comp= comp;
           return "You win! paper beats rock";
         }else{
           player =player;
           comp= ++comp;
           return "You lose! rock beats scissors"
         }
       } else if(computerSelection== "paper"){
         if(playerSelection=="scissors"){
           player = ++player;
            comp= comp;
           return "You win! scissors beats paper";
         }else{
           player = player;
            comp= ++comp;
           return "You lose! paper beats rock";
         }
       } else if(computerSelection== "scissors"){
         if(playerSelection=="rock"){
           player = ++player;
            comp=comp;
           return "You win! rock beats scissors";
         }else{
           player = player;
            comp= ++comp;
           return "You lose! scissors beats paper";
         }
       } 
    
    }


 // }









        console.log(playRound(computerSelection,playerSelection));
        
      });
    });