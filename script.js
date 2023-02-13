// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() { 
  const useUppercase = true 
  const useLowercase = true 
  const useNumerics = true 
  const useSpecialcharacters = true 
  const length = 9 
  var randomLetters = []
  var randomAll = ""
  var letter = "abcdefghijklmnopqrstuvwxyz" 
  var capLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var special = "!@#$%^&*?"
  if (useUppercase) { 
    randomAll = capLetter + randomAll
  }  
  if (useLowercase) { 
    randomAll = letter + randomAll 
  }
  if (useNumerics) { 
    randomAll = numbers + randomAll
  }
  if (useSpecialcharacters) { 
    randomAll = special + randomAll
  }
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * randomAll.length);  
    var randomLetter = randomAll[random] 
    randomLetters.push(randomLetter)
}
console.log(randomLetters)
return ("This is your password " + randomLetters.join(""))

} 




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
