$(window).ready(function () {

    $('#burger i').on('click', function () {
        $('.burger-menu').toggleClass('active-menu');
    });
    $('.burger-menu a').on('click', function () {
        $('.burger-menu').toggleClass('active-menu');
    });

    $('.sb').parent().find('ul').hide();
    $('.sb').on('click', function () {
        $(this).parent().find('ul').toggle();
        console.log($(this).parent().find('ul'));
    });

    // .block 

    $(window).resize(function () {

        if ($('#block').width() < 640) {
            $('#block').removeClass('w-640');
            $('#block').removeClass('w-1024');
            $('#block').removeClass('w-1599');
        }
        if ($('#block').width() >= 640 && $('#block').width() < 1024) {
            $('#block').removeClass('w-1024');
            $('#block').removeClass('w-1599');
            $('#block').addClass('w-640');
        }
        if ($('#block').width() >= 1024 && $('#block').width() < 1599) {
            $('#block').removeClass('w-640');
            $('#block').removeClass('w-1599');
            $('#block').addClass('w-1024');
        }
        if ($('#block').width() >= 1599) {
            $('#block').removeClass('w-1024');
            $('#block').removeClass('w-1599');
            $('#block').addClass('w-1599');
        }
    });
});