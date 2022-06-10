/*password length = 8 - 128 characters
criteria: 
uppercase Y/N
lowercase Y/N
numeric Y/N
special characters Y/N
*/
var z = ("8", "9", "10");
// Assignment code here

    window.alert("Welome to your password generator! Click the Generate Password button to select password criteria.");
//Person clicks generate button
    var generate = function() {
    var z = window.prompt("Please enter a number to be your password length.");
    //console.log("good so far");
  
  if (z === "8" || z === "9" || z === "10") {
    console.log("working");
  }else {
    console.log("incorrect");
  }
  
  
  

  
  

  
/*
// Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;

// Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);}
*/
  }
  generate();