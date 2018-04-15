export function Convert(numbers) {

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
