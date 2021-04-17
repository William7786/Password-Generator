// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()[]{}<>;:-_=+~`";
  var password = "Password: ";
  var passwordLength = 15;

  for (var i = 0; i< passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNum, randomNum+1, randomNum+2)
    
  }
document.getElementById("password").value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);