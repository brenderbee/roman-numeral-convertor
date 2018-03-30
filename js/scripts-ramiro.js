// Begin business logic.

var reverseNumerals = [];

function convert(numbers) {
  var reverseNumbers = numbers.reverse();

  for (var number=0; number < reverseNumbers.length; number++;) {
    if (number <= 3) {
      reverseNumerals.push("I".repeat(reverseNumbers[0]));
    } else if (number > 4 && reverseNumbers[0] < 9) {
      reverseNumerals.push("I".repeat(reverseNumbers[0]-5), "V");
    } else if (number === 4) {
      reverseNumerals.push("V", "I");
    } else if (number === 9) {
      reverseNumerals.push("X", "I");
      console.log('I expect this for 9');
    } else {
      return reverseNumerals;
    }
  }



  if (reverseNumbers[1] <= 3) {
    reverseNumerals.push("X".repeat(reverseNumbers[1]));
  } else if (reverseNumbers[1] > 4 && reverseNumbers[1] < 9) {
    reverseNumerals.push("X".repeat(reverseNumbers[1]-5), "L");
  } else if (reverseNumbers[1] === 4) {
    reverseNumerals.push("L", "X");
  } else if (reverseNumbers[1] === 9) {
    reverseNumerals.push("C", "X");
    console.log('I expect this for 9 at digit 2');
  } else {
    return reverseNumerals;
  }

  if (reverseNumbers[2] <= 3) {
    reverseNumerals.push("C".repeat(reverseNumbers[2]));
  } else if (reverseNumbers[2] > 4 && reverseNumbers[2] < 9) {
    reverseNumerals.push("C".repeat(reverseNumbers[2]-5), "D");
  } else if (reverseNumbers[2] === 4) {
    reverseNumerals.push("D", "C");
  } else if (reverseNumbers[2] === 9) {
    reverseNumerals.push("M", "C");
  } else {
    return reverseNumerals;
  }

  if (reverseNumbers[3] <= 3) {
    reverseNumerals.push("M".repeat(reverseNumbers[3]));
  } else {
    return reverseNumerals;
  }

  // We Should reach here but we don't
  console.log('I expect to reach here');
  return reverseNumerals.reverse().join("");
}


// Begin User interface logic.

$(document).ready(function(){
  $("form.convertor").submit(function(event){
    event.preventDefault();

    var inputString = $("#number").val();
    var inputNumbers = inputString.split("").map(function(number) {
      return parseInt(number);
    });

    var output = convert(inputNumbers);

    console.log(output);
  });
});
