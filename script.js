// Assignment code here
function generatePassword(){
  //Prompt for length
  var length = 0;
  while(length < 8 || length > 128){
    length = +prompt("How many characters long would you like your password to be? (Enter 8-128)");
    if(length < 8 || length > 128 || typeof length !== 'number') {alert("Please try again, make sure to enter a number between 8 and 128.");}
  }
  
  //Prompt for letters
  var letters = confirm("Press OK if you would like to use letters in your password.");
  if(letters){
    var upper = confirm("Press OK if you would like to use uppercase letters in your password.");
    var lower = confirm("Press OK if you would like to use lowercase letters in your password.");
  }
  //Prompt for numeric
  var numbers = confirm("Press OK if you would like to use numbers in your password.");
  //Prompt for special characters
  var special = confirm("Press OK if you would like to use special characters in your password. (!@#$%^&*()_-+)");
  //Now we've got the prompts out of the way, time to use the variables we made.
  var charDeck = []; //Defining an array to act as a 'deck' of characters to pull from.
  if(upper){
    for(let char = 65; char < 90; char++){ //Iterate from 65-90 (uppercase char codes)
      charDeck.push(String.fromCharCode(char));
    }
  }
  if(lower){
    for(let char = 97; char < 123; char++){ //Iterate from 97-123 (lowercase char codes)
      charDeck.push(String.fromCharCode(char));
    }
  }
  if(numbers){

  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
