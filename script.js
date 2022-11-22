// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lettersL= []
for(let letter of lettersU){
  lettersL.push(letter.toLowerCase());
}
console.log(lettersU, lettersL);

function generatePassword(){
  var password = "";
  var passwordLength = prompt("How many characters would you like your password to be? (8-128)");
  var passwordLowercase = confirm("Would you like to include lowercase letters?");
  var passwordUppercase = confirm("Would you like to include uppercase letters?");
  var passwordNumeric = confirm("Would you like to include numbers?");
  var passwordSpecial = confirm("Would you like to include special characters?");
  var passwordCharacters = [];
  if(passwordLowercase){
    passwordCharacters = passwordCharacters.concat(lettersL);
  }
  if(passwordUppercase){
    passwordCharacters = passwordCharacters.concat(lettersU);
  }
  if(passwordNumeric){
    passwordCharacters = passwordCharacters.concat([0,1,2,3,4,5,6,7,8,9]);
  }
  if(passwordSpecial){
    passwordCharacters = passwordCharacters.concat(['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']','|',';',':','<','>',',','.','?','/']);
  }
  
  for(let i = 0; i < passwordLength; i++){
    password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
