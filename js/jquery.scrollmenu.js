$(document).ready(function(){

        var $menu = $("#box-top-header");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
    });