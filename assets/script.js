// Assignment Code
var generateBtn = document.querySelector("#generate");

var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Lowercase = "abcdefghijklmnopqrstuvwxyz";
var Numbers = "0123456789";
var Special = "!@#$%^&*()[]{}<>;:-_=+~`";
var characters = answer1, answer2, answer3, answer4;
var answer1="";
var answer2="";
var answer3="";
var answer4="";
//ALERT AND PROMPT AREA
alert("Welcome to my password generator! Lets create your password!") 


// let Length= prompt("How many characters long would you like your password to be? 8-118")

 function checkUppercaseInput() {

  var answer1= prompt("Would you like UPPERCASE letters?, (y or n)" );
    if (answer1 === "y"){console.log("This UPPERCASE Function Is running"); answer1 = true}
    if (answer1 === "n"){confirm("Are You sure? The more Characters the stronger the password."); answer1 = false}
   
    
}

function checklowercaseInput() {

  var answer2= prompt("Would you like lowercase letters?, (y or n)" );
    if (answer2 === "y"){console.log("This Lowercase Function Is running"); answer2 = true}
    if (answer2 === "n"){confirm("Are You sure? The more Characters the stronger the password."); answer2 = false}
   
    
}
function checkNumbersInput() {

  var answer3= prompt("Would you like Numbers?, (y or n)" );
    if (answer3 === "y"){console.log("This Numbers Function Is running"); answer3 = true}
    if (answer3 === "n"){confirm("Are You sure? The more Characters the stronger the password."); answer3 = false}
   
    
}
function checkSpecialInput() {

  var answer4= prompt("Would you like Special Characters?, (y or n)" );
    if (answer4 === "y"){console.log("This Special Function Is running"); answer4 = true}
    if (answer4 === "n"){confirm("Are You sure? The more Characters the stronger the password."); answer4 = false}
   
    
}
 function generatePassword() {
  checkUppercaseInput();
  checklowercaseInput();
  checkSpecialInput();
  checkSpecialInput();

WritePassword.onclick = function writePassword() {
  var character= "";
  var password = "Password: ";
  var passwordLength = 15;
  var charactersLength = "78";

  for (var i = 0; i< charactersLength; i++) {
    var randomNum = Math.floor(Math.random() * charactersLength);
    password += characters.substring(randomNum, randomNum+1,)

  }
document.getElementById("password").value = password;
}}


