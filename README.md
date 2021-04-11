# Password Generator Starter Code
// Assignment code here
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = `!"#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`;

// Set password length
function setPasswordLength() {
  const regex = /^\d+$/;
  const min = 8;
  const max = 128;

  var passwordLength = 0;

  var userInput = prompt(
    `Choose how long should your password be between ${min}-${max} or press 'OK' to default to a random password length`
  );

  if (userInput === null || typeof userInput === "undefined") {
    alert("Sorry to see you go!");
    return;
  } else if (userInput === "") {
    passwordLength = Math.floor(
      Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + min
    );
    alert(
      `Your password length has been set to random number: ${passwordLength}`
    );# password - generator
