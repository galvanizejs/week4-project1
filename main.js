// Add your JS here.
$(document).ready(function(){
  
  $("div").click(function(){
  $(".hideMe").hide();
});

  $(".changeColor").click(function(){
  $(li:nth-child(3)").css("color", "#8A2BE2");  
});
  
  $("li:nth-child(4)").click(function () {
	$(this).after("<li>This is a new item</li>");
});

  $("#removeLi").click(function(){
  $("li:nth-child(2)").hide();
});  
  
  $("li:nth-child(5)").click(function () {
	$("li:nth-child(5)").css("font-size", "40px");
	$("li:nth-child(n+2):nth-child(-n+4)").hide();
});
  
  $(".cute").click(function() {
  $(".cute").clone(true).insertAfter("cute");
});
  
  $("body").dblclick(function(){
  $("#makeSquare").css({'border-radius': '0', 'height': '100px', 'width' :'100px'});
});

  $("#dontClick").click(function(){
    alert("Do not click this button");
});
  
  $(".black").click(function(){
  $("body").addClass('black');
  });
  
  $(".wood").click(function(){
  $("body").addClass('wood');
  });
  
  $(".chaos").click(function(){
  $("body").addClass('chaos');
  });
  
  $(".restore").click(function(){
  $("body").removeClass('black, wood, chaos');
  });
  
  $("#hover").mouseOver(function(){
  $("#hover").css('background-color''red');
  });
  
  $("#hover").click(function(){
  $("#hover").addClass('background-color''green');
  });
  
  $("#hover").click(function(){
  $("#hover").removeClass('background-color''green');
  });
  
});
