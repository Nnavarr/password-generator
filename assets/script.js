// Assignment code here


// function to receive user input
function userInput(){

    //  user input for password length
    var lengthCustom = window.prompt('Would you like to customize the length? (yes or no) \n\ Default: 10');
    lengthCustom = lengthCustom.trim();

    // check for custom length
    if (lengthCustom.toLowerCase() === 'yes'){
      var length = parseInt(window.prompt('How many digits should it be? (8 - 128)'));
    } else {
      var length = 10;
    }

    // validate number entered, do not allow progress until met
    while (length < 8 | length > 128){
      length = parseInt(window.prompt('Please enter a valid length (8 - 128)'));
    } 

    // user input for special characters
    var specialCharacters = window.prompt('Would you like special characters? (yes or no) \n\ Default: yes \n\  Special Characters Include: Space, !, ", #, $, etc.');
    specialCharacters = specialCharacters.trim().toLowerCase();

    return {
      length,
      specialCharacters
    };
}

function generatePassword(userparams) {
  
  // read in user parameters for desired password
  var length = userparams.length;
  var specialChars = userparams.specialCharacters;

  // random string variables
  var alphabetic = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';


  // validate user input and generate password
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var settings  = userInput();
  var password = generatePassword(settings);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*
PseudoCode
----------
0. Create link to 'Generate Password' button
    i. When Clicked, bring a pop up of raido dials 
      a. Would you like a Special Length? 
      b. Would you like Special Characters? 

1. Look for the input on said radio dials
2. Based on the inputs generate a random password.

*/
