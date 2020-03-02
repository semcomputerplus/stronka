$(document).ready(function() {
    $(".mainMenu").prepend("<button class='hamburger' title='Pacnij by odkryć'>Menu</button>");
    $(".mainMenu ul").addClass("closedMenu");
    $(".hamburger").on("click", function() {
        $(".mainMenu ul").slideToggle("closedMenu");
    })
});