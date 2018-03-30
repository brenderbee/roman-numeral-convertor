// Begin business logic.


function convert(numbers) {

  var reverseNumerals = [];
  var reverseNumbers = numbers.reverse();

  if (reverseNumbers[0] <= 3) {
    reverseNumerals.push("I".repeat(reverseNumbers[0]));
  } else if (reverseNumbers[0] > 4 && reverseNumbers[0] < 9) {
    reverseNumerals.push("I".repeat(reverseNumbers[0]-5), "V");
  } else if (reverseNumbers[0] === 4) {
    reverseNumerals.push("V", "I");
  } else if (reverseNumbers[0] === 9) {
    reverseNumerals.push("X", "I");
  }

  // There needs to be a guard clause checking for presence, something like
  // if ( typeof reverseNumbers[1] !== 'NaN' ) { thisWholeBlock }
  // Likely a better way to do it (and what they intended) is to
  // loop over all your reverseNumbers via forEach(number, index)
  // then use the index to determine which set of roman numerals you should use
  // (ie for number === 4,  my_set.push romanSet[index][number]) which would
  // correspond to romanSet = { 1: { 4: 'LX' } }
  if (reverseNumbers[1] <= 3) {
    reverseNumerals.push("X".repeat(reverseNumbers[1]));
  } else if (reverseNumbers[1] > 4 && reverseNumbers[1] < 9) {
    reverseNumerals.push("X".repeat(reverseNumbers[1]-5), "L");
  } else if (reverseNumbers[1] === 4) {
    reverseNumerals.push("L", "X");
  } else if (reverseNumbers[1] === 9) {
    reverseNumerals.push("C", "X");
  }

  if (reverseNumbers[2] <= 3) {
    reverseNumerals.push("C".repeat(reverseNumbers[2]));
  } else if (reverseNumbers[2] > 4 && reverseNumbers[2] < 9) {
    reverseNumerals.push("C".repeat(reverseNumbers[2]-5), "D");
  } else if (reverseNumbers[2] === 4) {
    reverseNumerals.push("D", "C");
  } else if (reverseNumbers[2] === 9) {
    reverseNumerals.push("M", "C");
  }

  if (reverseNumbers[3] <= 3) {
    reverseNumerals.push("M".repeat(reverseNumbers[3]));
  }

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

    $("#result").text(output);

    console.log(output);
  });
});
