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

    // Various parameters for the randomly generated password
    // lowercase alphabetic
    var lowerCase = window.prompt('lower case alphabetic? (yes or no) \n\ Defailt: yes');
    lowerCase = lowerCase.trim().toLowerCase();

    // uppercase alphabetic
    var upperCase = window.prompt('upper case alphabetic? (yes or no) \n\ Defailt: yes');
    upperCase = upperCase.trim().toLowerCase();

    // numeric
    var numericVals = window.prompt('numeric values? (yes or no) \n\ Defailt: yes');
    numericVals = numericVals.trim().toLowerCase();

    // special characters
    var specialCharacters = window.prompt('Would you like special characters? (yes or no) \n\ Default: yes \n\  Special Characters Include:Space, !, ", #, $, etc.');
    specialCharacters = specialCharacters.trim().toLowerCase();

    // create pw param object
    var pwParams = {};
    pwParams.lower = lowerCase;
    pwParams.upper = upperCase;
    pwParams.numeric = numericVals;
    pwParams.special = specialCharacters;

    return {length, pwParams};
}

function generatePassword(userparams) {

  // read in user parameters for desired password
  var length = userparams.length;
  var pwParams = userparams.pwParams;

  // random string variables
  var alphabeticLower = 'abcdefghijklmnopqrstuvwxyz';
  var alphabeticUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numeric = '0123456789'
  var special = ' !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  // var full_chars = alphabeticLower + alphabeticUpper + numeric + special;

  // generate random password
  var password = ''
  switch(specialChars) {
    // special characters case
    case 'yes':
      for (var i = 0; i < length; i++){
        password += full_chars.charAt(Math.floor(Math.random() * full_chars.length));
      }
    // alphabetic characters case
    default:
      for (var i = 0; i < length; i++){
        password += alphabetic.charAt(Math.floor(Math.random() * alphabetic.length));
      }
  }

  // update value of text area with the newly generated password
  document.getElementById('password').value = password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var settings  = userInput();
  generatePassword(settings);
  document.querySelector("#password").value;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
