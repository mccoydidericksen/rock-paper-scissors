// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

}

// Game Function
function startGame() {
    // Prompt user for game choice
    var userChoice = prompt("Enter r, p, or s to play the game.");
    console.log(userChoice)
    var choices = ["r", "p", "s"];
    var computerChoice =  choices[Math.floor(Math.random() * choices.length)];
    var decision= ""
    alert("The computer chose " + computerChoice)
    if (userChoice === computerChoice){
      alert("tie")
    }
      else if(userChoice="r" && computerChoice=="p"){
        alert("Computer Wins")
      }
      else if(userChoice="p" && computerChoice=="r"){
        alert("User Wins")
      }
      else if(userChoice="s" && computerChoice=="p"){
        alert("User Wins")
      }
      else if(userChoice="r" && computerChoice=="s"){
        alert("User Wins")
      }
      else if(userChoice="p" && computerChoice=="s"){
        alert("Computer Wins")
      }
      else if(userChoice="s" && computerChoice=="r"){
        alert("Computer Wins")
      }
    confirm("Would You like to play again")
    console.log(computerChoice)
}

// Add event listener to generate button
generateBtn.addEventListener("click", startGame);

