//ROMAN NUMERALS

// Roman Numerals Business (or back-end) logic:
var ratioRomanator;

var ratioRomanator = (function(userInput) {
  if (userInput = "1") {
     romanNumerals = "I";
    console.log(romanNumerals);
  } else {
    alert("try again")
  }
});



// Roman Numerals User Interface (or front-end) logic:
var userInput;
var ratioResult;
var romanNumerals = [];

$(document).ready(function() {

  $("form#roman-numerals-form").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#roman-numerals-input").val();
    userInput = parseInt(userInput)
    console.log(userInput);
    ratioRomanator(userInput);
    var ratioResult = romanNumerals;
    console.log(romanNumerals);

    $("#roman-numerals-result").text(ratioResult);
    $("#roman-numerals-result").show();
  });

});
