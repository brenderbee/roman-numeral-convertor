// Begin business logic.
//
// var numerals = [];
//
// function adjustArray(inputNumbers) {
//   if (inputNumbers.length === 3) {
//     var test = inputNumbers.unshift(0);
//     return test;
// } else if (inputNumbers.length === 2) {
//     return inputNumbers.unshift(0, 0);
// } else {
//     return inputNumbers.unshift(0, 0, 0);
// } alert(inputNumbers);
// }

function convert(numbers) {
// THOUSANDS
  for(var i=0; i<numbers.length; i++) {
    if (numbers.length === 4) {
      numerals.push("M".repeat(numbers[i]));
      return numerals.join("");
      // var test = numbers.length-1;
    }
// HUNDREDS
    else if (numbers.length === 3) {
        if (numbers[i] <= 3) {
          numerals.push("C".repeat(numbers[0]));
          return numerals.join("");


        } else if (numbers[i] > 4 && numbers[0] < 9) {
          numerals.push("D", "C".repeat(numbers[0]-5));
          return numerals.join("");

        } else if (numbers[i] === 4) {
          numerals.push("CD");
          return numerals.join("");

        } else if (numbers[i] === 9) {
          numerals.push("CM");
          return numerals.join("");
        }
// TENS
    } else if (numbers.length === 2) {
      numerals.push("C".repeat(numbers[0]));
      return numerals.join("");
// SINGLES
    } else {

    }

}
convert(300);
alert(numerals);








// Begin User interface logic.

$(document).ready(function(){
  $("form.convertor").submit(function(event){
    event.preventDefault();

    var inputString = $("#number").val();
    var inputNumbers = inputString.split("").map(function(number) {
        return parseInt(number);
        });

    var output = convert(inputNumbers);

    alert(output);


  });
});
