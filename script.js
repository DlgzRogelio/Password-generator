// Assignment Code
var generateBtn = document.querySelector("#generate");
/*criteria 1*/ var pnumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
/*criteria 2*/ var pword = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
/*criteria 3*/var pspecial = [" ", "!", "#", "\"", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
/*criteria 4*/var uword = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //textarea.textContent = passwordText;

}

function generatePassword() {
  var Uppword; var number; var word; var special; var plenght; var passwordString = "";
 var justone = 0;

  do{
  if (confirm("With lowercase letters?")) {
    word = true; justone++;
  } else { number = false; };
  if (confirm("with uppercase letters?")) {
    Uppword = true; justone++;
  } else { Uppword = false; }
  if (confirm("With numbers?")) {
    number = true; justone++;
  } else { word = false; };
  if (confirm("With special characthers? (such as ?&$)")) {
    special = true; justone++;
  } else { special = false; };
}while(justone < 1)
  plenght = chooseLenght();




  var j = 0;///to choose between number(0 to 2) letter(3 to 5) special (6 to 8);
  var p;///to save the new character before concate



  for (var i = 0; i <= plenght;) {
    ///escoger entre numero palabra o especial
    j = Math.floor(Math.random() * 9);
    console.log("for check " + j);

    ////////////
    if (j > -1 && j < 3) {
      if (number) {

        p = chooseNumber();

        passwordString = passwordString.concat(p);

        i++;
      }
    }

    else if (j > 2 && j < 6) {
      if (word) {

        p = chooseWord();

        passwordString = passwordString.concat(p);

        i++;
      }
    }
    else if (j > 5 && j < 8) {
      if (special) {
        p = chooseSpecial();

        passwordString = passwordString.concat(p);

        i++;
      }
    }
    else {
      if (Uppword) {
        p = chooseUppercase();

        passwordString = passwordString.concat(p);
        i++;
      }

    }

  }////for 


  return passwordString;


}

function chooseNumber() {
  var y; //to storage the value of the new number

  y = Math.floor(Math.random() * pnumber.length);
  var r = pnumber[y];
  return r;

};

function chooseWord() {

  var y = Math.floor(Math.random() * pword.length);
  var r = pword[y];
  return r;

};

function chooseSpecial() {

  var y = Math.floor(Math.random() * pspecial.length);
  var r = pspecial[y];
  return r;

};

function chooseUppercase() {

  var y = Math.floor(Math.random() * uword.length);
  var r = uword[y];
  return r;
}

function chooseLenght() {
  var x;//positive integer to return
  x = prompt("Type the lenght of your password");
  x = parseInt(x, 10);
  errorMessage = "Type a integer bigger than 7 and less than 121";

  if (Number.isInteger(x)) {

    if (x > 7 && x < 121) {
      return x;

    }
    else {
      alert(errorMessage);
      x = chooseLenght();
      return x;
    }
  }
  else {
    alert(errorMessage);
    x = chooseLenght();
    return x;
  }

}



//////////////////////////////////////









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
