
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// When Generate Password button is clicked, the first prompt should appear. 
function startPrompt(){
  var numberOfCharacters = prompt("How many characters would you like your password to contain?");

  //Confirm including special characters
  var specialCharacters = confirm("Click OK to confirm including special chaacters");

  //Confirm including numeric characters
  var numericCharacters = confirm("Click OK to confirm including numeric characters");

  //Confirm including lowercase characters
  var lowercaseCharacters = confirm("Click OK to confirm including lowercase letters");

  //Confirm including uppercase characters
  var uppercaseCharacters = confirm("Click OK to confirm including uppercase letters");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
