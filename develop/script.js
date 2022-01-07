//password characters Array
var numeric = ['1','2','3','4','5','6','7','8','9'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var special = ['!','@','#','$','%','&','*','?','<','>','~'];

//Variable Declaration
var confrimLength = "";
var confrimSpecailCharacters;
var confrimNumericCharecters;
var confirmUpperCase;
var confirmLowerCase;

// Assignment code here
function generatePassword() {

  //Validate length 8-128

  var confrimLength = (prompt("How many Characters do you want in your password? Choose between 8-128 Characters."));
  //if outside requirment
  while(confrimLength < 8 || confrimLength > 128) {
    alert("Password length must be between 8-128 characters long! Try again");
    var confrimLength = (prompt("How many Characters do you want in your password? Choose between 8-128 Characters."));
  };

  //Determine Parameters

var confrimSpecailCharacters = confirm ("Click OK to confirm if you would like to include special characters");
var confrimNumericCharecters = confirm ("Click OK to confirm if you would like to include numeric characters");
var confirmLowerCase = confirm ("Click OK to confirm if you would like to include lowercase characters");
var confirmUpperCase = confirm ("Click OK to confirm if you would like to include uppercase characters");
  //if answer is no
  while (confrimSpecailCharacters === false && confrimNumericCharecters === false && confirmLowerCase === false && confirmUpperCase === false) {
    alert ("You must choose at least one parameter");
          var confrimSpecailCharacters = confirm ("Click OK to confirm if you would like to include special characters");
      var confrimNumericCharecters = confirm ("Click OK to confirm if you would like to include numeric characters");
      var confirmLowerCase = confirm ("Click OK to confirm if you would like to include lowercase characters");
      var confirmUpperCase = confirm ("Click OK to confirm if you would like to include uppercase characters");
  }

    //Password parameters
    var passowrdCharacters = []

  if (confrimSpecailCharacters) {
    passowrdCharacters = passowrdCharacters.concat(special)
  }

  if (confrimNumericCharecters) {
    passowrdCharacters = passowrdCharacters.concat(numeric)
  }

  if (confirmLowerCase) {
    passowrdCharacters = passowrdCharacters.concat(lowercase)
  }

  if (confirmUpperCase) {
  passowrdCharacters = passowrdCharacters.concat(uppercase)
  }

    // random passwod generated
    var randomPassword = ""

    for (var i = 0; i < confrimLength; i++) {
      randomPassword = randomPassword + passowrdCharacters[Math.floor(Math.random() * passowrdCharacters.length)];
      
    }
//display passowrd on page
  return randomPassword;
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