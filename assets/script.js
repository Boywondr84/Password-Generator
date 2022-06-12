// Assignment code here
window.alert("Click the Generate Password button to begin creating your password");
  //var generatePassword = function () {
//VARIABLE LIST
  const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const xyz = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const special = ["!", `"`, "#", "$", "%", "&", "'", "(", ")", "*", `,`, "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
  var total = (">=8" && "<=128");

//INSTRUCTIONS FOR GENERATOR

  var generatePassword = function () {
  var total = parseInt(window.prompt("How many characters would you like your password to have? Enter a number between 8 - 128."));
  //console.log("click works", total);
  if (total >= 8 && total <= 128) {
      console.log(total);
      console.log(typeof(total));
  }else {
    window.alert("Incorrect choice. Try again.");
    return;
  }
  
//Window Prompts
  let upperCase = window.confirm("Do you want to include upper case letters?");  
      if (upperCase) {
        window.alert("Password Criteria upper case letters selected.");
      }else {
        console.log("not selected");
    }
  
  let lowerCase = window.confirm("Do you want to include lower case letters?");
      if (lowerCase) {
        window.alert("Password Criteria lower case letters selected.");
      }else {
        console.log("not selected");
    }
  
  let numChar = window.confirm("Do you want to include numbers?");
      if (numChar) {
        window.alert("Password Criteria numbers selected.");
      }else {
        console.log("not selected");
    }
  
  let specialChar = window.confirm("Do you want to include special characters?");
      if (specialChar) {
        window.alert("Password Criteria special characters selected.");
      }else {
        console.log("not selected");
    }

  let allChar = []
  

//Password selections added to allChar [].
  if (upperCase) {
    allChar.push(...abc);
  }

  if (lowerCase) {
    allChar.push(...xyz);
  }

  if (numChar) {
    allChar.push(...numerals);
  }

  if (specialChar) {
    allChar.push(...special);
  }
//Return Output criteria selected
  console.log(allChar)

  //For loop - take all characters selected in allChar[], randomly select using selections stored in allChar
  
  function createPassword() {
    var completePass = []
    for(i=0; i<total; i++) {
      var charIndex = Math.floor(Math.random() * allChar.length);
      completePass.push(allChar[charIndex])
    }
    console.log(completePass);
    return completePass.join("")
  }

    return createPassword();
  

  //output.push(allChar[Math.rand() * allChar.length]

  //}
  //return output

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
if (password) {
  passwordText.value = password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);