// Begin business logic.

var numerals = [];
function convert(numbers) {
  if (numbers.length === 4) {
    debugger;
    var insertM = "M".repeat(numbers[0]);
    numerals.push(insertM);
    return numerals.join("");
    alert(numerals);

  } else if (numbers.length === 3) {

  } else if (numbers.length === 2) {

  } else {

  }
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

    alert(output);


  });
});
