$(function(){
  // var result = "FRED";

  $("#btn").click(function(event){
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    console.log(side1, side2, side3);
    var result = checkNat (side1, side2, side3);
    console.log(result);
    $("#answer").show();
    $("#answer").text(result);
  });

  var checkNat = (function(side1, side2, side3){
    if((side1 + side2 <= side3) ||
    (side2 + side3 <= side1) ||
    (side3 + side1 <= side2)){
      var result = "not a triangle";
    } else if  ((side1 != side2) && (side2 != side3)) {
      var result = "Scalene";
    } else if ((side1 === side2) &&
    (side2 === side3)) {
      var result = "Equalateral";
    } else {
      var result = "Isoceles";
    }
    return result;
  });

});
