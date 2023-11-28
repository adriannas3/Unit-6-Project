$(".player1").click(function() {
	$(".statement").text("You selected Vedesh!");
    $(".statement2").text("He receives a gift and leaves you alone.");
    $(".shut").hide();
    $(".restart").show();
    $(".truce").show();
    $(".truce").css("width", "300px");
});

$(".player1").mouseenter(function() {
	$(".player1").css("border", "solid 2px blue");
    
});

$(".player1").mouseleave(function() {
	$(".player1").css("border", "none");
});

$(".player2").click(function() {
    $(".statement").show();
    $(".statement2").show();
	$(".statement").text("You did not select Vedesh! He attacked you once again!");
    $(".statement2").text("How would you like to strike back?");
    $(".buttons").show();
    $(".bank").show();
    $(".shut").show();
    $(".truce").hide();
});

$(".player2").mouseenter(function() {
	$(".player2").css("border", "solid 2px blue");
});

$(".player2").mouseleave(function() {
	$(".player2").css("border", "none");
});

$(".start").mouseenter(function() {
	$(".start").css("border", "solid 2px blue");
    
});

$(".bank").mouseenter(function() {
	$(".bank").css("border", "solid 2px blue");
    
});

$(".shut").mouseenter(function() {
	$(".shut").css("border", "solid 2px blue");
    
});

$(".bank").mouseleave(function() {
	$(".bank").css("border", "none");
});

$(".shut").mouseleave(function() {
	$(".shut").css("border", "none");
});

$(".start").mouseleave(function() {
	$(".start").css("border", "none");
});

$(".restart").mouseenter(function() {
	$(".restart").css("border", "solid 2px blue");
    
});

$(".restart").mouseleave(function() {
	$(".restart").css("border", "none");
});


$(".start").click(function() {
  $(".friend").show();
  $(".player1").css("width", "250px");
  $(".player1").css("height", "250px");
  $(".player1").css("border", "solid 3px green");
  $(".player1").css("border-radius", "50%");
  $(".player2").css("width", "250px");
  $(".player2").css("height", "250px");
  $(".player2").css("border", "solid 3px green");
  $(".player2").css("border-radius", "50%");
  $(".select").text("Guess which character is Vedesh:");

});

$(".bank").click(function() {
  $(".secImage").show();
  $(".bankimg").show();
  $(".shutimg").hide();
  $(".thirdImage").hide();
  $(".restart").show();
});

$(".shut").click(function() {
  $(".shutimg").show();
  $(".thirdImage").show();
  $(".secImage").hide();
  $(".bankimg").hide();
  $(".restart").show();
});

$(".restart").dblclick(function() {
	$(".restart").hide();
    $(".thirdImage").hide();
    $(".shutimg").hide();
    $(".secImage").hide();
    $(".bankimg").hide();
    $(".shut").hide();
    $(".bank").hide();
    $(".truce").hide();
    $(".statement").hide();
    $(".statement2").hide();
    $(".select").hide();
    $(".friend").hide();
});



