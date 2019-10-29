$(document).ready(function () {
    $('.nav-responsive').hide(0);
    $('#res-menu').on('click', function () {
        $('.nav-responsive').slideToggle(300);
    });

    $('.nav-responsive a').on('click', function(){
        $('.nav-responsive').slideToggle(300);
    });
});