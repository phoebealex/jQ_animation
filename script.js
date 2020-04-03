$(document).ready(function() {
  $(".up-btn").click(function() {
    $("#bunny").animate({ top: "-=70px" }, 2000);
  });

 $(".back-btn").click(function() {
    $("#bunny").animate({ top: "150" }, "fast");
  });
});

$(document).keypress(function (event) {
   if(event.keyCode = "l") {
     $("#carrot").animate({
      width: "toggle"
       });
     } else {
      alert('you pressed wrong key')
     }
});


