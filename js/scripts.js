$('.dropdown-trigger').dropdown({
    coverTrigger: false
});

$( document ).ready(function() {
    $("#dashboard").toggle(false),
    $("#other").toggle(false),
    $("#search-bar").toggle(false)

    
});
$("#dashboard-btn").click(function(){
    $("#dashboard").toggle('slow'),
    $("#other").toggle(false),
    $("#search-bar").toggle(false)
});
$("#other-btn").click(function(){
    $("#dashboard").toggle(false),
    $("#other").toggle('slow'),
    $("#search-bar").toggle(false)
});
$("#search-bar-btn").click(function(){
    $("#dashboard").toggle(false),
    $("#other").toggle(false),
    $("#search-bar").slideToggle()
});