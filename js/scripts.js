//ROMAN NUMERALS

// Roman Numerals Business (or back-end) logic:
var arrayRomanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var arrayArabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

var ratioRomanator = function(userInputX) {

//finds the highest decimal value V that is less than or equal to the decimal number X (userInputX)
  var decimalNumberX = userInputX;
  var arrayRomanNumeralN = [ ];

  while (decimalNumberX > 0) {

    if (decimalNumberX <= 3) {
      romanNumeralN = "I";
      decimalNumberX = decimalNumberX - 1;
    }
    else if (decimalNumberX <= 4) {
      romanNumeralN = "IV";
      decimalNumberX = decimalNumberX - 4;
    }
    else if (decimalNumberX <= 8) {
      romanNumeralN = "V";
      decimalNumberX = decimalNumberX - 5;
    }
    else if (decimalNumberX <= 9) {
      romanNumeralN = "IX";
      decimalNumberX = decimalNumberX - 9;
    }
    else if (decimalNumberX <= 39) {
      romanNumeralN = "X";
      decimalNumberX = decimalNumberX - 10;
    }
    else if (decimalNumberX <= 40) {
      romanNumeralN = "XL";
      decimalNumberX = decimalNumberX - 40;
    }
    else if (decimalNumberX <= 89) {
      romanNumeralN = "L";
      decimalNumberX = decimalNumberX - 40;
    }
    else if (decimalNumberX <= 90) {
      romanNumeralN = "XC";
      decimalNumberX = decimalNumberX - 40;
    }
    else if (decimalNumberX <= 400) {
      romanNumeralN = "C";
      decimalNumberX = decimalNumberX - 40;
    }
    else if (decimalNumberX <= 400) {
      romanNumeralN = "CD";
      decimalNumberX = decimalNumberX - 40;
    }
    else if (decimalNumberX <= 899) {
      romanNumeralN = "D";
      decimalNumberX = decimalNumberX - 40;
    }
    else if (decimalNumberX <= 900) {
      romanNumeralN = "CM";
      decimalNumberX = decimalNumberX - 40;
    }
    else if (decimalNumberX <= 3999) {
      romanNumeralN = "M";
      decimalNumberX = decimalNumberX - 40;
    }
    else {decimalNumberX <= 4000
      alert("Don't you know Romans can't count above 3999!");
      break;
    }

    arrayRomanNumeralN.push(romanNumeralN);

    console.log(romanNumeralN);
    console.log(decimalNumberX);


  };
  //write the Roman numeral n

  return arrayRomanNumeralN.join("");
  console.log(arrayRomanNumeralN);
  console.log(ratioResult);
};


// Roman Numerals User Interface (or front-end) logic:
var userInput; // string
var userInputX; // number
 // roman numeral string

$(document).ready(function() {

  $("form#roman-numerals-form").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#roman-numerals-input").val();
    var userInputX = parseInt(userInput);

    var ratioResult = ratioRomanator(userInputX);

    $("#roman-numerals-result").text(ratioResult);
    $("#roman-numerals-result").show();
  });

});
