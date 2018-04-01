// Begin business logic.
function convert(numbers, validation) {

  var reverseNumerals = [];
  var reverseNumbers = numbers.reverse();
  var numerals = ["I", "V", "X", "L", "C", "D", "M"];
  var j = 0;

  if (isNaN(validation)) {
    var error = "Please enter a number!"
    return error;
  } else if (validation < 0 || validation > 3999) {
      var error = "Fun fact: Roman numerals are very limited and only range from 1 to 3,999!"
      return error;
    }


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

    var inputString = $("#number").val();
    var inputValidation = parseInt($("#number").val());
    var inputNumbers = inputString.split("").map(function(number) {
      return parseInt(number);
    });

    var output = convert(inputNumbers, inputValidation);

    $("#result").text(output);
  });
});
