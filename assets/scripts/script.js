// Assignment Code
var generateBtn = document.querySelector("#generate");
var tieCount = 0
var winCount = 0
var lossCount = 0

// Game Function
function startGame() {
    // Prompt user for game choice
    var userChoice = prompt("Enter r, p, or s to play the game.");
    var choices = ["r", "p", "s"];
    if (!choices.includes(userChoice)) {
      alert("Please only enter r, p, or s")
      startGame()
    }
    var computerChoice =  choices[Math.floor(Math.random() * choices.length)];
    alert("The computer chose " + computerChoice)
    if (userChoice === computerChoice){
      alert("tie")
      tieCount += 1
    }
      else if(userChoice==="r" && computerChoice==="p"){
        alert("Computer Wins")
        lossCount += 1
      }
      else if(userChoice==="p" && computerChoice==="r"){
        alert("User Wins")
        winCount += 1
      }
      else if(userChoice==="s" && computerChoice==="p"){
        alert("User Wins")
        winCount += 1
      }
      else if(userChoice==="r" && computerChoice==="s"){
        alert("User Wins")
        winCount += 1
      }
      else if(userChoice==="p" && computerChoice==="s"){
        alert("Computer Wins")
        lossCount += 1
      }
      else if(userChoice==="s" && computerChoice==="r"){
        alert("Computer Wins")
        lossCount += 1
      }
    
    var playAgain = confirm("Wins: " + winCount + "\nLosses: " + lossCount + "\nTies: " + tieCount + "\nWould you like to play again?")
    if (playAgain) {
      startGame()
    }
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", startGame);

