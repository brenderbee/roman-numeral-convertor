// Begin business logic.
var numerals = [];

function convertor(number) {
  if (number === 5){
    numerals.push("V");
    return numerals;
  }
}


// Begin User interface logic.

$(document).ready(function(){
  $("form.convertor").submit(function(event){
    event.preventDefault();

    var inputNumber = parseInt($("#number").val());

    var output = convertor(inputNumber);

    alert(output);


  });
});
