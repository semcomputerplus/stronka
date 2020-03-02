$(document).ready(function(){
	$(".mainMenu").prepend("<button class=\"hamburger\">menu</button>");
	$(".mainMenu ul").addClass("closedMenu");
	$(".hamburger").on("click",function(){
		$(".mainMenu ul").slideToggle("closedMenu");
	});
});
