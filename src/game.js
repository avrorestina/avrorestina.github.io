//-----------------------------------------------------------
//  ROCK PAPER SCISSOR REMASTERED VERSION 1.0
//  Copyright by Reemays Narmi
//  Licensed under GNU GENERAL PUBLIC LICENSE 
//          Version 3, 29 June 2007 
//
//             Enjoy your stay!
//
//                /\_____/\
//               /  o   o  \
//              ( ==  ^  == )     ~-~- meow!
//               )~~~~o~~~~(     
//              (           )
//             ( (  )   (  ) )
//            (__(__)___(__)__)
//-----------------------------------------------------------


//-----------------------------------------------------------
//  Global variables declaration
//-----------------------------------------------------------

let battleText = document.getElementById("battleText");
let scissor_image = document.getElementById("scissor");
let rock_image = document.getElementById("rock");
let paper_image = document.getElementById("paper");

let playerSelection = 'None';
let canPick = true;
var randSelect;
var battleStatus;

//-----------------------------------------------------------
//  Main function, adds all button listener
//-----------------------------------------------------------
function main() {
    scissor_image.addEventListener("click", function(){scissorFunc()});
    rock_image.addEventListener("click", function(){rockFunc()});
    paper_image.addEventListener("click", function(){paperFunc()});
}

//-----------------------------------------------------------
//  Button Function
//-----------------------------------------------------------
function scissorFunc(){
    if(canPick){
        playerSelection = 'Scissor';
        canPick = false;
        enemySelect();
    }
}

function rockFunc(){
    if(canPick){
        playerSelection = 'Rock';
        canPick = false;
        enemySelect();
    }
}

function paperFunc(){
    if(canPick){
        playerSelection = 'Paper';
        canPick = false;
        enemySelect();
    }
}

//-----------------------------------------------------------
//  Enemy select its type
//-----------------------------------------------------------

function enemySelect(){
    let typeArray = ["Rock", "Paper", "Scissor"];
    randSelect = typeArray[Math.floor(Math.random() * typeArray.length)];
    battleTime();
}

//-----------------------------------------------------------
//  Execute Order 6-- battle time XD
//-----------------------------------------------------------

function battleTime(){
    battleList();
    battleText.innerHTML = 'You pick ' + playerSelection;
    setTimeout(function(){
        battleText.innerHTML = 'Enemy pick ' + randSelect;
    }, 1000);
    setTimeout(function(){
        battleText.innerHTML = playerSelection + ' vs ' + randSelect + " <br> " + 'You ' + battleStatus + '!';   
    }, 2000); 
    setTimeout(function(){
        canPick = true;
    }, 2500); 
}

//-----------------------------------------------------------
//  List of battle condition
//-----------------------------------------------------------

function battleList(){
    if(playerSelection == 'Scissor'){
        if(randSelect == 'Scissor'){
            battleStatus = 'Draw';
        }
        else if(randSelect == 'Rock'){
            battleStatus = 'Lose';
        }
        else if(randSelect == 'Paper'){
            battleStatus = 'Win';
        }
    }
    else if(playerSelection == 'Rock'){
        if(randSelect == 'Scissor'){
            battleStatus = 'Win';
        }
        else if(randSelect == 'Rock'){
            battleStatus = 'Draw';
        }
        else if(randSelect == 'Paper'){
            battleStatus = 'Lose';
        }
    }
    else if(playerSelection == 'Paper'){
        if(randSelect == 'Scissor'){
            battleStatus = 'Lose';
        }
        else if(randSelect == 'Rock'){
            battleStatus = 'Win';
        }
        else if(randSelect == 'Paper'){
            battleStatus = 'Draw';
        }
    }

}

//-----------------------------------------------------------
//  Load main function on page load
//-----------------------------------------------------------

window.onload = function(){
    this.main();
}