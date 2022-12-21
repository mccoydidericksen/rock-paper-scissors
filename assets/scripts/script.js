// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

}

// Write password to the #password input
function startGame() {
    // Prompt user for password length;
    var userChoice = prompt("Enter r, p, or s to play the game.");
    console.log(userChoice)
    var choices = ["r", "p", "s"];
    var computerChoice =  choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice)
}

// Add event listener to generate button
generateBtn.addEventListener("click", startGame);

