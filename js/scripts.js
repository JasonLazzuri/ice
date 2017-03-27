$(document).ready(function() {

var icecreams= ["chocolate","vanilla","strawberry","apple"];

icecreams.forEach(function(icecream){

  $("ul").prepend($("<li>").text(icecream));
  });

});
