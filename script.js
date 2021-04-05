// Assignment code here
function generatePassword(){
  //Prompt for length
  var length = 0;
  while(length < 8 || length > 128 || typeof length !== Number){
    length = prompt("How many characters long would you like your password to be? (Enter 8-128)");
    if(length < 8 || length > 128 || typeof length !== Number) alert("Please try again, make sure to enter a number between 8 and 128.");
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
