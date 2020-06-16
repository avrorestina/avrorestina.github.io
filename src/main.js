var canvas = document.getElementById("gameScreen");
var battleText = document.getElementById("battleText");
var scissor_image = document.getElementById("scissor");
var rock_image = document.getElementById("rock");
var paper_image = document.getElementById("paper");

Main();

function Main() {
  let isCurrentDone = true;

  if (isCurrentDone) {
    scissor_image.addEventListener("click", function() {
      //battleText.innerHTML = "Scissor";
      update(battleText, "Scissor");
    });

    rock_image.addEventListener("click", function() {
      //battleText.innerHTML = "Rock";
      update(battleText, "Rock");
    });

    paper_image.addEventListener("click", function() {
      //battleText.innerHTML = "Paper"
      update(battleText, "Paper");
    });
  }
}

function update(text, type) {
  var typeArray = ["Rock", "Paper", "Scissor"];
  var rand = typeArray[Math.floor(Math.random() * typeArray.length)];
  console.log(rand);
  let isDone = false;

  if (rand == "Rock") {
    if (type == "Scissor") {
      text.innerHTML = " You pick Scissor";
      setTimeout(function() {
        text.innerHTML = "Opponent pick Rock";
      }, 1500);
      setTimeout(function() {
        text.innerHTML = "Scissor vs Rock = You lose!";
      }, 2500);
    } else if (type == "Rock") {
      text.innerHTML = "You pick Rock";
      setTimeout(function() {
        text.innerHTML = "Opponent pick Rock";
      }, 1500);
      setTimeout(function() {
        text.innerHTML = "Rock vs Rock = Draw!";
      }, 2500);
    } else if (type == "Paper") {
      text.innerHTML = "You pick Paper";
      setTimeout(function() {
        text.innerHTML = "Opponent pick Rock";
      }, 1500);
      setTimeout(function() {
        text.innerHTML = "Paper vs Rock = You win!";
      }, 2500);
    }
  } else if (rand == "Paper") {
    if (type == "Scissor") {
      text.innerHTML = "You pick Scissor";
      setTimeout(function() {
        text.innerHTML = "Opponent pick paper";
      }, 1500);
      setTimeout(function() {
        text.innerHTML = "Scissor vs Paper = You win!";
      }, 2500);
    } else if (type == "Rock") {
      text.innerHTML = "You pick Rock";
      setTimeout(function() {
        text.innerHTML = "Opponent pick paper";
      }, 1500);
      setTimeout(function() {
        text.innerHTML = "Rock vs Paper = You lose!";
      }, 2500);
    } else if (type == "Paper") {
      text.innerHTML = "You pick Paper";
      setTimeout(function() {
        text.innerHTML = "Opponent pick paper";
      }, 1500);
      setTimeout(function() {
        text.innerHTML = "Paper vs Paper = Draw!";
      }, 2500);
    }
  } else if (rand == "Scissor") {
    if (type == "Scissor") {
      text.innerHTML = " You pick Scissor";
      setTimeout(function() {
        text.innerHTML = "Opponent pick Scissor";
      }, 1500);
      setTimeout(function() {
        text.innerHTML = "Scissor vs Scissor = Draw!";
      }, 2500);
    } else if (type == "Rock") {
      text.innerHTML = "You pick Rock";
      setTimeout(function() {
        text.innerHTML = "Opponent pick Scissor";
      }, 1500);
      setTimeout(function() {
        text.innerHTML = "Rock vs Scissor = You win!";
      }, 2500);
    } else if (type == "Paper") {
      text.innerHTML = "You pick Paper";
      setTimeout(function() {
        text.innerHTML = "Opponent pick Scissor";
      }, 1500);
      setTimeout(function() {
        text.innerHTML = "Paper vs Scissor = You lose!";
      }, 2500);
    }
  }
}
