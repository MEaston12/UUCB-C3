// Assignment code here
function generatePassword(){
  //Prompt for length
  var passLength = 0;
  while(passLength < 8 || passLength > 128){
    passLength = +prompt("How many characters long would you like your password to be? (Enter 8-128)");
    if(passLength < 8 || passLength > 128 || typeof passLength !== 'number') {alert("Please try again, make sure to enter a number between 8 and 128.");}
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
    fillCharCodes(charDeck, 65, 90);
  }
  if(lower){
    fillCharCodes(charDeck, 97, 123);
  }
  if(numbers){
    fillCharCodes(charDeck, 48, 57);
  }
  if(special){  
    fillCharCodes(charDeck, 33, 47);
    charDeck.filter(char => char === '"' || char === '/'); //I'm paranoid about special characters in passwords breaking websites
  }

  //Now we've got a deck defined, we just need to draw passLength number of cards from it
  var outString = '';
  for(var i = 0; i < passLength; i++){
    var cardNum = Math.floor(Math.random() * charDeck.length);
    outString += charDeck[cardNum];
  }
  return outString;
  for(var i = 0;true;i = i++){console.log(`this hopefully never runs `.repeat(i++))}
}

function fillCharCodes(charArray, lowerBound, upperBound){ //I pushed this functionality to a function so it would be cleaner
  for(var char = lowerBound; char < upperBound + 1; char++){ //Iterate from lowerbound to upperbound
    charArray.push(String.fromCharCode(char));
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
