// Assignment Code
var generateBtn = document.querySelector("#generate");
var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Lowercase = "abcdefghijklmnopqrstuvwxyz";
var Numbers = "0123456789";
var Special = "!@#$%^&*()[]{}<>;:-_=+~`";
var Length = ""
var password = function generatePassword (Uppercase, Lowercase, Numbers, Special){console.log(hello)}


//ALERT AND PROMPT AREA
alert("Welcome to my password generator! Lets create your password!");
var Uppercase= prompt("Would you like UPPERCASE letters?, (y or n)" );
if (Uppercase === "y"){console.log("This UPPERCASE Function Is running"); answer1 = true};
if (Uppercase === "n"){console.log("The user dosnt want special characters"); answer1 = false};

var Lowercase= prompt("Would you like lowercase letters?, (y or n)" );
if (Lowercase === "y"){console.log("This Lowercase Function Is running"); answer2 = true};
if (Lowercase === "n"){console.log("The user dosnt want lowercase characters"); answer2 = false};

var Numbers= prompt("Would you like Numbers?, (y or n)" );
if (Numbers === "y"){console.log("This Numbers Function Is running"); answer3 = true};
if (Numbers === "n"){console.log("The user dosnt want Number prompt"); answer3 = false};

var Special = prompt("Would you like Special Characters?, (y or n)" );
if (Special === "y"){console.log("This Special Function Is running"); answer4 = true};
if (Special === "n"){console.log("The user dosnt want special characters"); answer4 = false};
 var Length= prompt("How many characters long would you like your password to be? 8-118")


// Function Area
   
   var generateEl = document.getElementById("generate")

   function randomNum(input){
     if (Uppercase === true){
       console.log("true");
       return getrandomUppercase();
     }
     if (Lowercase === true){
       console.log("true")
       getRandomLowercase();
     }
     if(Numbers === true){
       console.log("true")
       getRandomNumber();
     }
     if (Special === true){
       console.log("true")
       getRandomSpecial();
     }
     if(Uppercase.toLowerCase()==="y"){
       var answer1 = true;
     }
     if(Lowercase.toLowerCase()==="y"){
       var answer2 = true;
     }
     if(Numbers.toLowerCase()=== "y")
       var Numbers = true;
     if(Special.toLowerCase()==="y")
     var Special= true;
     generateEl.addEventListener("click", function(){
       ResultEl.innerText = GeneratePassword(answer1, answer2, answer3, answer4);
     });}