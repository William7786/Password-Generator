// Assignment Code
var generateBtn = document.querySelector("#generate");
var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Lowercase = "abcdefghijklmnopqrstuvwxyz";
var Numbers = "0123456789";
var Special = "!@#$%^&*()[]{}<>;:-_=+~`";
// Write password to the #password input
alert("Welcome to my password generator! Lets create your password!")
let Upper= prompt("Would you like UPPERCASE letters? Yes/No")
let Lower= prompt("Would you like Lowercase letters? Yes/No")
let Number= prompt("Would you like Numbers? Yes/No")
let SpecialChar= prompt("Would you like Special Characters? Yes/No")
let Length= prompt("How many characters long would you like your password to be? 8-118")

function Upper(){
  
}

function writePassword() {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()[]{}<>;:-_=+~`";
  var password = "Password: ";
  var charactersLength = "78";



  for (var i = 0; i< charactersLength; i++) {
    var randomNum = Math.floor(Math.random() * charactersLength);
    password += characters.substring(randomNum, randomNum+1,)
    
  }
 
  
document.getElementById("password").value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);