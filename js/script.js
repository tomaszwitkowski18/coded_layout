$(document).ready(function(){
    $('.close-menu').click(function(){
        $('.header__menu-responsive').css('display', 'none');
    })
    $('.bars').click(function(){
        $('.header__menu-responsive').css('display', 'flex');
    });
    $(window).resize(function(){
        if($(window).width()<601){
            $('.header__our-offer').appendTo('.header__menu-responsive');
        }else {
            $('.header__our-offer').insertBefore('.header__fake-insert');
        };
        if($(window).width()<421){
            $('.header__phone').prependTo('.header__title');
        }else {
            $('.header__phone').prependTo('.header__top-bar-right-side');
        };
    });
    if($(window).width()<601){
        $('.header__our-offer').appendTo('.header__menu-responsive');
    };
    if($(window).width()<421){
        $('.header__phone').prependTo('.header__title');
    };
});