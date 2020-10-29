// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

//start when button is clicked
function generatePassword () {


//List of Arrays
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var numbers = [0,1,2,3,4,5,6,7,8,9];

var symbols = ['!', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[','{', ']', '}', '|', ';', ':', '<', ',', '>', '.', '?', '~', '`'];

//all true conditions array
var characters = [];

  //Ask user how many characters they would like their passowrd to contain
  var numberOfCharacters = prompt("How many characters would you like your password to contain? (Password must be 8 - 128 characters long)");

  //check to see if answer meets condition; if not it will repeat the question
      while (numberOfCharacters < 8 || numberOfCharacters > 128) { 
        
        //alert the user the condition and ask the prompt again
        alert("PASSWORD MUST BE 8-128 CHARACTERS LONG!");
        
        numberOfCharacters = prompt("How many characters would you like your password to contain? (Password must be 8 - 128 characters long)");

        writePassword();

  }
  
    //if user hits OK, add symbols array to characters array
    if (confirm("Click OK to confirm including special characters")) {
      characters.push(symbols);
    }

    //if user hits OK, add numbers to characters array
    if (confirm("Click OK to confirm including numeric characters")) {
      characters.push(numbers);
    }

    //if user hits OK, add lowecaseLetters to character array
    if (confirm("Click OK to confirm including lowercase letters")) {
      characters.push(lowercaseLetters);
    }

    //if user hits OK, add uppercaseLetters to character array
    if (confirm("Click OK to confirm including uppercase letters")) {
      characters.push(uppercaseLetters);
    }

    let password = [];
    //for loop for generating password
for (var i = 0; i < numberOfCharacters; i++ ) {
    var randomArray = characters[Math.floor(Math.random() * characters.length)];
    password += randomArray[Math.floor(Math.random() * randomArray.length)];
  }

  console.log(password);
  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

