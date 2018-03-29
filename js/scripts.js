// Begin business logic.


















// Begin User interface logic.

$(document).ready(function(){
  $("form.convertor").submit(function(event){
    event.preventDefault();

    var inputNumber = parseInt($("#number").val());
    alert(inputNumber);



  });
});
