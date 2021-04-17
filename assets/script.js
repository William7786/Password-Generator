// Assignment Code
var generateBtn = document.querySelector("#generate");

var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Lowercase = "abcdefghijklmnopqrstuvwxyz";
var Numbers = "0123456789";
var Special = "!@#$%^&*()[]{}<>;:-_=+~`";
//ALERT AND PROMPT AREA
alert("Welcome to my password generator! Lets create your password!")
let Upper= prompt("Would you like UPPERCASE letters? y or n")
// let Lower= prompt("Would you like Lowercase letters? y or n")
// let Number= prompt("Would you like Numbers? Yes/No")
// let SpecialChar= prompt("Would you like Special Characters? Yes/No")
// let Length= prompt("How many characters long would you like your password to be? 8-118")
function generatePassword() {
  
}

function writePassword() {
  var characters = "";
  var password = "Password: ";
  var passwordLength = 15;
  var charactersLength = "78";

  for (var i = 0; i< passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNum, randomNum+1, randomNum+2)
  for (var i = 0; i< charactersLength; i++) {
    var randomNum = Math.floor(Math.random() * charactersLength);
    password += characters.substring(randomNum, randomNum+1,)

  }
document.getElementById("password").value = password;
}}

generateBtn.addEventListener("click", writePassword);
