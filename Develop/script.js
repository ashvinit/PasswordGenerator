
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// When Generate Password button is clicked, the first prompt should appear. 
function startPrompt(){

  //Ask user how many characters they would like their passowrd to contain
  var numberOfCharacters = prompt("How many characters would you like your password to contain? (Password must be 8 - 128 characters long)");

  console.log(numberOfCharacters);

  //password length must be between 8-128 characters
      if (numberOfCharacters < 8 || numberOfCharacters > 128) { 
        
        //alert the user the condition and ask the prompt again
        alert("PASSWORD MUST BE 8-128 CHARACTERS LONG!");
        
        numberOfCharacters = prompt("How many characters would you like your password to contain? (Password must be 8 - 128 characters long)");
  }
  
  //Confirm including special characters
  var specialCharacters = confirm("Click OK to confirm including special chaacters");

  //Confirm including numeric characters
  var numericCharacters = confirm("Click OK to confirm including numeric characters");

  //Confirm including lowercase characters
  var lowercaseCharacters = confirm("Click OK to confirm including lowercase letters");

  //Confirm including uppercase characters
  var uppercaseCharacters = confirm("Click OK to confirm including uppercase letters");

}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
