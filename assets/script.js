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



// Function Area
   
   var generateEl = document.getElementById("generate")

   generateBtn.onclick = function randomNum(input){
var Uppercase= prompt("Would you like UPPERCASE letters?, (y or n)" );
if (Uppercase === "y"){console.log("This UPPERCASE Function Is running"); Uppercase = true};
if (Uppercase === "n"){console.log("The user dosnt want special characters"); Uppercase = false};

var Lowercase= prompt("Would you like lowercase letters?, (y or n)" );
if (Lowercase === "y"){console.log("This Lowercase Function Is running"); Lowercase = true};
if (Lowercase === "n"){console.log("The user dosnt want lowercase characters"); Lowercase = false};

var Numbers= prompt("Would you like Numbers?, (y or n)" );
if (Numbers === "y"){console.log("This Numbers Function Is running"); Numbers = true};
if (Numbers === "n"){console.log("The user dosnt want Number prompt"); Numbers = false};

var Special = prompt("Would you like Special Characters?, (y or n)" );
if (Special === "y"){console.log("This Special Function Is running"); Special= true};
if (Special === "n"){console.log("The user dosnt want special characters"); Special = false};

var Length= prompt("How many characters long would you like your password to be? 8-118")
if(Length > 128){console.log("Too many characters"); alert("Your password cannot be over 128 Characters")}
if(Length < 8){console.log("Needs More characters"); alert("Your password cannot be Less then 8 Characters")}

     

    if (Uppercase === true){
       console.log("true");
       
     }
     if (Lowercase === true){
       console.log("true")
       
     }
     if(Numbers === true){
       console.log("true")
       
     }
     if (Special === true){
       console.log("true")
       
     }
     if (Uppercase === false){
        console.log("false");
        
     }
     if (Lowercase === false){
        console.log("false")
        
      }
     if(Numbers === false){
        console.log("false")
        
      }
     if (Special === false){
        console.log("false")
        
      }
     generateEl.addEventListener("click", function(){
       ResultEl.innerText = GeneratePassword(Uppercase, Lowercase, Numbers, Special);
     });}