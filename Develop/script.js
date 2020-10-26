// When Generate Password button is clicked, the first prompt should appear. 
function startPrompt(){
  var numberOfCharacters = prompt("How many characters would you like your password to contain?");
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
