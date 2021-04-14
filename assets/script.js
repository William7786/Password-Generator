// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = ("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()[]{}<>;:-_=+~`");
  var passwordLength = 15;
  var passwordText = document.querySelector("#password");


  for (var i = 0; i< passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * passwordLength);
    password += password.substring(randomNum ,randomNum+1, randomNum+2)
    
  }
document.getElementById("password").value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
