import { Convert } from './convert.js';
import './../css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      var error = "";
      error = "Please enter a number!";
      $(".result").fadeIn();
      return $("#result").text(error);
    } else if (inputValidation <= 0 || inputValidation > 3999) {
      error = "Fun fact: Roman numerals are very limited and only range from 1 to 3,999!";
      $(".result").fadeIn();
      return $("#result").text(error);
    }

    var output = Convert(inputNumbers);

    $(".result").fadeIn();
    $("#result").text(output);
  });
});
