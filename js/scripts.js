// For words that start with a vowel, add "ay" to the end.
// For words that start with one or more consonants, move all of the first consecutive consonants to the end and add "ay". (If the first consonants include // "qu", move the "u" along with the "q". Don't forget about words like "squeal" where the "qu" doesn't come first!)
//For words that start with "y", treat the "y" as a consonant.

// Pig Latin Business (or back-end) logic:
$(document).ready(function() {

  $("form#pig-latin-form").submit(function(event) {
    event.preventDefault();
    $("pig-latin-result").text(result);


  $("pig-latin-result").show();
  });


// Pig Latin User interface (or front-end) logic:


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
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    if(year){

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
