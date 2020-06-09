$(".call-menu").on("click", function(){
    $(".nav-menu").addClass("active-menu");
});

$(".close-menu").on("click", function(){
    $(".nav-menu").removeClass("active-menu");
});

$('.main-element').hover(
    function(){
        $('.main-element').removeClass("active-elem-li");
        $(this).addClass("active-elem-li");
},
    function(){

});

$('.sub-menu').hover(
    function(){
},
    function(){
        $('.main-element').removeClass("active-elem-li");
});


$("ul li").each(function() {
    this_li = $(this);
    if ($(this_li).find("ul").length > 0) {
      $(this_li).append('<div class="arrow-mob"></i></div>')
    }
});

$('.arrow-mob').click(function() {
    $(this).toggleClass("minus");
    $(".nav-menu").toggleClass("scroll");
    $(this).toggleClass("active-elem").closest('li').find('ul').eq(0).slideToggle(250); 
});