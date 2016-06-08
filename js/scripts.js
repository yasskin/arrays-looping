// For words that start with a vowel, add "ay" to the end.
// For words that start with one or more consonants, move all of the first consecutive consonants to the end and add "ay".
// (If the first consonants include // "qu", move the "u" along with the "q". Don't forget about words like "squeal" where the "qu" doesn't come first!)
//For words that start with "y", treat the "y" as a consonant.
// For words that begin with a single consonant, the program should move the first consonant to the end of the word, then add "ay".

// Pig Latin Business (or back-end) logic:
var result;

var wordTranslator = function(word) {
  var wordArray = word.split("");

  if (wordArray[0] === "q" && wordArray[1] === "u") {
    wordArray.push(wordArray.shift());
    wordArray.push(wordArray.shift());
  }
  //checking for three consonants
  else if (wordArray[2] !="a" && wordArray[2] !="e" && wordArray[2] !="i" && wordArray[2] !="o" && wordArray[2] !="u" && wordArray[1] !="a" && wordArray[1] !="e" && wordArray[1] !="i" && wordArray[1] !="o" && wordArray[1] !="u" && wordArray[0] != "a" && wordArray[0] != "e" && wordArray[0] != "i" && wordArray[0] != "o" && wordArray[0] != "u") {
    wordArray.push(wordArray.shift());
    wordArray.push(wordArray.shift());
    wordArray.push(wordArray.shift());
  }
  //checking for two consonants
  else if (wordArray[1] !="a" && wordArray[1] !="e" && wordArray[1] !="i" && wordArray[1] !="o" && wordArray[1] !="u" && wordArray[0] != "a" && wordArray[0] != "e" && wordArray[0] != "i" && wordArray[0] != "o" && wordArray[0] != "u") {
    wordArray.push(wordArray.shift());
    wordArray.push(wordArray.shift());
  }
//checking for one consonant
  else if (wordArray[0] != "a" && wordArray[0] != "e" && wordArray[0] != "i" && wordArray[0] != "o" && wordArray[0] != "u") {
    wordArray.push(wordArray.shift());
  }
//all words get this treatment
    wordArray.push("ay");
    result = wordArray.join("");
};

// Pig Latin User interface (or front-end) logic:
$(document).ready(function() {

  $("form#pig-latin-form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#pig-latin-input").val();
    wordTranslator(userInput);

    $(".pig-latin-result").text(result);

    $("#pig-latin-result").show();
  });


// Leap Year Business (or back-end) logic:
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

  // Leap-Year User interface (or front-end) logic:

  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = $("input#year").val();
    year = parseInt(year);
    var result = leapYear(year);

    if(year && !isNaN(year) && year > 0) {

      if (!result) { // same as writing if (result === false)
        $(".not").text("not");
      } else {
        $(".not").text("");
      }

      $(".year").text(year);
      $("#result").show();

    } else {
      alert("Please enter a year.");
    }

  });
});
