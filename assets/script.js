 // Assignment Code
 var generateBtn = document.querySelector("#generate");

 var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var Lowercase = "abcdefghijklmnopqrstuvwxyz";
 var Numbers = "0123456789";
 var Special = "!@#$%^&*()[]{}<>;:-_=+~`";
 var characters=[answer1, answer2, answer3, answer4];
 
 //ALERT AND PROMPT AREA
 alert("Welcome to my password generator! Lets create your password!");
 
 // let Length= prompt("How many characters long would you like your password to be? 8-118")
 
  
 
   var answer1= prompt("Would you like UPPERCASE letters?, (y or n)" );
     if (answer1 === "y"){console.log("This UPPERCASE Function Is running"); answer1 = true};
     if (answer1 === "n"){console.log("The user dosnt want special characters"); answer1 = false};
     
   var answer2= prompt("Would you like lowercase letters?, (y or n)" );
     if (answer2 === "y"){console.log("This Lowercase Function Is running"); answer2 = true};
     if (answer2 === "n"){console.log("The user dosnt want lowercase characters"); answer2 = false};
     
   var answer3= prompt("Would you like Numbers?, (y or n)" );
     if (answer3 === "y"){console.log("This Numbers Function Is running"); answer3 = true};
     if (answer3 === "n"){console.log("The user dosnt want Number prompt"); answer3 = false};
     
   var answer4= prompt("Would you like Special Characters?, (y or n)" );
     if (answer4 === "y"){console.log("This Special Function Is running"); answer4 = true};
     if (answer4 === "n"){console.log("The user dosnt want special characters"); answer4 = false};
    
    var generateEl = document.getElementById("generate")

    function randomNum(input){
      if (answer1 === true){
        console.log("true");
        return getrandomUppercase();
      }
      if (answer2 === true){
        console.log("true")
        getRandomLowercase();
      }
      if(answer3 === true){
        console.log("true")
        getRandomNumber();
      }
      if (answer4 === true){
        console.log("true")
        getRandomSpecial();
      }
      if(Uppercase.toLowerCase()==="y"){
        var answer1 = true;
      }
      if(Lowercase.toLowerCase()==="y"){
        var answer2 = true;
      }
      if
    }
  
 generateBtn.onclick=function generate() {
   var characters ="";
   var characterslength="15";
   if (answer1 = true){Uppercase += characters};
   if (answer1 = false){};
   if (answer2 = true){Lowercase += characters};
   if (answer2 = false){};
   if (answer3 = true){Numbers += characters};
   if (answer3 = false){};
   if (answer4 = true){Special += characters};
   if (answer4 = false){};
  
   var password= "Password: "
   var passwordLength="15"
   password = writePassword(characters);
   for (var i = 0; i< passwordLength; i++) {
     var randomNum = Math.floor(Math.random() * characterslength);
     password += characters.substring(randomNum, randomNum+1, randomNum+2)
   }
 document.getElementById("password").value = password;
 generateBtn.addEventlistener("click", writePassword) 
 }
 
 
 


