// Assignment code here
window.alert("Click the Generate Password button to begin creating your password");
  //var generatePassword = function () {
  //VARIABLE LIST
  const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const xyz = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const special = [" ", "!", `"`, "#", "$", "%", "&", "'", "(", ")", "*", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "];
  var total = (">=8" && "<=128");

  //INSTRUCTIONS FOR GENERATOR

  var generatePassword = function () {
  var total = window.prompt("How many characters would you like your password to have? Enter a number between 8 - 128.");
  //console.log("click works", total);
  if (total >= 8 && total <= 128) {
      console.log(total);
  }else {
    window.alert("Incorrect choice. Try again.");
    generatePassword();
    //Restart
  }

    //start over function
  
  //total = !<8 && !>128

  //let upperCase = window.confirm("Do you want capital letters?");
  //let lowerCase = window.confirm("Do you want lowercase letters?");
  let numChar = window.confirm("Do you want to use numbers?");
  //let specialChar = window.confirm("Do you want to use special characters?");
  //let allChar = []
  //if (upperCase) {
  //  allChar.push(...abc);
  //}

  //if (lowerCase) {
  //  allChar.push(...xyz);
  //}

  if (numChar) {
    allChar.push(...numerals);
  }

  //if (specialChar) {
  //  allChar.push(...special);
  //}
  //console.log(allChar)

  //For loop
  //let output = ""
  //for(i=0, i<total, i++) {

  //output.push(allChar[Math.rand() * allChar.length]

  //}
  //return output

}
//if / else statement

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*password length = 8 - 128 characters
criteria: 
uppercase Y/N
lowercase Y/N
numeric Y/N
special characters Y/N
*/
/*
var total = (//password length 8 - 128 characters);
const ABC = (//"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
const xyz = (//"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
const numeric = (//"0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
const special = (//" ", "!", """, "#", "$", "%", "&", "'", "(", ")", "*", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^", "_", "`", "{", "}", "|", "~");
*/
