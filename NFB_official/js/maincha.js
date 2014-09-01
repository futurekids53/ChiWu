$(document).ready(function() {
 
  $("#owl-example").owlCarousel();
  var owl = $("#owl-example").data('owlCarousel');
  var idNum = $("#chaId").data("id");
  owl.jumpTo(idNum);



 
});