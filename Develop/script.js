
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

//List of Arrays
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lowecaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var numbers = [0,1,2,3,4,5,6,7,8,9];

var symbols = ['!', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[','{', ']', '}', '|', ';', ':', '<', ',', '>', '.', '?', '~', '`'];


// When Generate Password button is clicked, the first prompt should appear. 
function startPrompt(){

  //Ask user how many characters they would like their passowrd to contain
  var numberOfCharacters = prompt("How many characters would you like your password to contain? (Password must be 8 - 128 characters long)");

  //check to see if answer meets condition; if not it will repeat the question
      while (numberOfCharacters < 8 || numberOfCharacters > 128) { 
        
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
