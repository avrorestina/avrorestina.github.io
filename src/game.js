//-----------------------------------------------------------
//  ROCK PAPER SCISSOR REMASTERED VERSION 1.1
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
let playerSelected;
let canPick = true;
let randSelect;
let randSelected;
let battleStatus;
let winSFX;
let loseSFX;
let drawSFX;
let buttonSFX;

//-----------------------------------------------------------
//  Main function, adds all button listener and sounds
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
        playerSelected = playerSelection.fontcolor("#ce1d3a");
        canPick = false;
        enemySelect();
        document.getElementById("click").play();
    }
}

function rockFunc(){
    if(canPick){
        playerSelection = 'Rock';
        playerSelected = playerSelection.fontcolor("#743f14");
        canPick = false;
        enemySelect();
        document.getElementById("click").play();
    }
}

function paperFunc(){
    if(canPick){
        playerSelection = 'Paper';
        playerSelected = playerSelection.fontcolor("#005073");
        canPick = false;
        enemySelect();
        document.getElementById("click").play();
    }
}

//-----------------------------------------------------------
//  Enemy select its type
//-----------------------------------------------------------

function enemySelect(){
    let typeArray = ["Rock", "Paper", "Scissor"];
    randSelect = typeArray[Math.floor(Math.random() * typeArray.length)];
    if(randSelect == "Rock"){
        randSelected = randSelect.fontcolor("#743f14")
    }
    else if(randSelect == "Paper"){
        randSelected = randSelect.fontcolor("#005073")
    }
    else if(randSelect == "Scissor"){
        randSelected = randSelect.fontcolor("#ce1d3a")
    }
    battleTime();
}

//-----------------------------------------------------------
//  Execute Order 6-- battle time XD
//-----------------------------------------------------------

function battleTime(){
    battleList();
    battleText.innerHTML = 'You pick ' + playerSelected;
    setTimeout(function(){
        battleText.innerHTML = 'Enemy pick ' + randSelected;
    }, 1000);
    setTimeout(function(){
        battleText.innerHTML = playerSelected + ' vs ' + randSelected + " <br> " + 'You ' + battleStatus + '!';   
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
            setTimeout(function(){document.getElementById("draw").play();}, 2000);  
        }
        else if(randSelect == 'Rock'){
            battleStatus = 'Lose';
            setTimeout(function(){document.getElementById("lose").play();}, 2000);
        }
        else if(randSelect == 'Paper'){
            battleStatus = 'Win';
            setTimeout(function(){document.getElementById("win").play();}, 2000);        
        }
    }
    else if(playerSelection == 'Rock'){
        if(randSelect == 'Scissor'){
            battleStatus = 'Win';
            setTimeout(function(){document.getElementById("win").play();}, 2000); 
        }
        else if(randSelect == 'Rock'){
            battleStatus = 'Draw';
            setTimeout(function(){document.getElementById("draw").play();}, 2000); 
        }
        else if(randSelect == 'Paper'){
            battleStatus = 'Lose';
            setTimeout(function(){document.getElementById("lose").play();}, 2000);
        }
    }
    else if(playerSelection == 'Paper'){
        if(randSelect == 'Scissor'){
            battleStatus = 'Lose';
            setTimeout(function(){document.getElementById("lose").play();}, 2000);
        }
        else if(randSelect == 'Rock'){
            battleStatus = 'Win';
            setTimeout(function(){document.getElementById("win").play();}, 2000); 
        }
        else if(randSelect == 'Paper'){
            battleStatus = 'Draw';
            setTimeout(function(){document.getElementById("draw").play();}, 2000); 
        }
    }

}

//-----------------------------------------------------------
//  Load main function on page load
//-----------------------------------------------------------

window.onload = function(){
    this.main();
}