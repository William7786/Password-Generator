// Assignment Code
var generateBtn = document.querySelector("#generate");

var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Lowercase = "abcdefghijklmnopqrstuvwxyz";
var Numbers = "0123456789";
var Special = "!@#$%^&*()[]{}<>;:-_=+~`";
var answer1="";
var answer2="";
var answer3="";
var answer4="";
//ALERT AND PROMPT AREA
alert("Welcome to my password generator! Lets create your password!") 

// let Length= prompt("How many characters long would you like your password to be? 8-118")

 

  var answer1= prompt("Would you like UPPERCASE letters?, (y or n)" )
    if (answer1 === "y"){console.log("This UPPERCASE Function Is running"); answer1 = true}
    else if (answer1 === "n"){console.log("The user dosnt want special characters"); answer1 = false}
    
  var answer2= prompt("Would you like lowercase letters?, (y or n)" );
    if (answer2 === "y"){console.log("This Lowercase Function Is running"); answer2 = true}
    else if (answer2 === "n"){console.log("The user dosnt want lowercase characters"); answer2 = false}

  var answer3= prompt("Would you like Numbers?, (y or n)" );
    if (answer3 === "y"){console.log("This Numbers Function Is running"); answer3 = true}
    else if (answer3 === "n"){console.log("The user dosnt want Number prompt"); answer3 = false}
  
  var answer4= prompt("Would you like Special Characters?, (y or n)" );
    if (answer4 === "y"){console.log("This Special Function Is running"); answer4 = true}
    else if (answer4 === "n"){console.log("The user dosnt want special characters"); answer4 = false}
   
function generate() {
  answer1();
  answer2();
  answer3();
  answer4();
 
  

function writePassword() {
  var characters= document.querySelector("#password");
  var password = "Password: ";

  var passwordLength = 15;
  

  for (var i = 0; i< passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * passwordLength);
    password += password.substring(randomNum, randomNum+1,)

  }
document.getElementById("password").value = password;
}}


