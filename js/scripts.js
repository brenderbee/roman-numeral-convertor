// Begin business logic.
function convert(numbers) {

  var reverseNumerals = [];
  var reverseNumbers = numbers.reverse();
  var numerals = ["I", "V", "X", "L", "C", "D", "M"];
  var j = 0;

  reverseNumbers.forEach(function(number) {
    if (number <= 3) {
      reverseNumerals.push(numerals[j].repeat(number));
      j += 2;
    } else if (number > 4 && number < 9) {
      reverseNumerals.push(numerals[j].repeat(number-5), numerals[j+1]);
      j += 2;
    } else if (number === 4) {
      reverseNumerals.push(numerals[j+1], numerals[j]);
      j += 2;
    } else if (number === 9) {
      reverseNumerals.push(numerals[j+2], numerals[j]);
      j += 2;
    }
  });
  return reverseNumerals.reverse().join("");
}

// Begin User interface logic.
$(document).ready(function(){
  $("form.convertor").submit(function(event){
    event.preventDefault();
    $(".result").hide();

    var inputString = $("#number").val();
    var inputValidation = parseInt($("#number").val());
    var inputNumbers = inputString.split("").map(function(number) {
      return parseInt(number);
    });

    if (isNaN(inputValidation)) {
      var error = "Please enter a number!"
      $(".result").fadeIn();
      return $("#result").text(error);
    } else if (inputValidation <= 0 || inputValidation > 3999) {
      var error = "Fun fact: Roman numerals are very limited and only range from 1 to 3,999!"
      $(".result").fadeIn();
      return $("#result").text(error);
    }


    var output = convert(inputNumbers);

    $(".result").fadeIn();
    $("#result").text(output);
  });
});
