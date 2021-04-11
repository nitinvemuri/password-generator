// Assignment code here
var generateBtn = document.querySelector("#generate")
var passwordLength;
var password
var passwordRules
var passwordTextInputField
var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]", ";",":","'","`,","~","<",",",">",".","?","/","|",];
var numbers = ["0","1","2", "3","4","5","6","7","8","9"];
const min = 8;
const max = 128;



// Write password to the #password input
// Set length for password by taking into account the user input and applies it to the generate password function to either get a randomized numher or user inputed number
function setPasswordLength () {
  passwordLength > 8;
  passwordLength < 128;

  var userInput = prompt(
    "Choose how long you want your generated password length to be, it must be betweem 8-128 or press 'ok' if you want a randomly generated one"
  );


  if (userInput > 8 || userInput < 128) {
    passwordLength = userInput;
  } else {
    alert (
      `${userInput} is not applicable`
    );
    return;
}

  if (userInput === null || typeof userInput === "undefined" || typeof userInput === "cancel") {
    alert ("Maybe next time")
    stop(passwordLength);

  } else if (userInput === "" || typeof userInput === "OK" || userInput === "Enter") {
    passwordLength = Math.floor (
      ((Math.floor(max ) - Math.ceil(min) + 1) * Math.random() + 8) 
    );
    alert (
      `Your password length has been set to random number: ${passwordLength}`
    );
    return passwordLength;


  } else {

    if (userInput.match()) {

      userInput = parseInt(userInput);

      if (userInput < min || userInput > max) {
        alert (
          "The password length that you inputed is not between 8-128, please try again"
        );
        return passwordRules;


        } else {
          userInput = passwordLength;
          return passwordLength;
      }

      }
    }
  }

// Set rules for password so it takes the user input and applies it to the generate password function
function setPasswordRules() {
  var passwordRules = []
  var userInput;
  

  userInput = confirm("Do you want password to have Uppercase letters?")

  if (userInput) {
    passwordRules.push.apply(passwordRules, uppercaseCharacters);
  }
  

  userInput = confirm("Do you want password to have Lowercase letters?") 

  if (userInput){
    passwordRules.push.apply(passwordRules, lowercaseCharacters);
  }

  userInput = confirm("Do you want password have Special characters?")

  if (userInput) {
    passwordRules.push.apply(passwordRules, specialCharacters);
  }

  userInput = confirm("Do you want password have Numbers?")

  if (userInput) {
    passwordRules.push.apply(passwordRules, numbers);

  } 
  if (passwordRules.length === 0) {
    alert (
      "Must pick one type"
    );
      return;
  }
  return passwordRules;
}



//generate password
function generatePassword(passwordLength, passwordRules) {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {

    var random = Math.floor(passwordRules.length * (Math.random(i)) )

    password += passwordRules[random].charAt(Math.floor(passwordRules[random].length * Math.random(i))

    );
  }
  return password;
}



     
//write password
 function writePassword() {
 var passwordLength;
 var passwordRules = [];
 var passwordTextInputField = document.querySelector("#password");

  alert("Generate your password");
  passwordLength = setPasswordLength();


  if (passwordLength === "" || typeof passwordLength === "undefined") {
    return;


  } else {
    passwordRules = setPasswordRules();
    var password = generatePassword(passwordLength, passwordRules);
    passwordTextInputField.value = password;
  }
  return;
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


