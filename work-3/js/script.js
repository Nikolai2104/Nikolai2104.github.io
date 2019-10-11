$(document).ready(function () {

    // Плавный скролл по странице
    $('a[href^="#"]').click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top - 48;
        $('html').animate({ scrollTop: destination }, 1100);
        return false;
    });

    // Слайдер в head-line
    let img = $('#slider img');
    let current = 0;
    let next = $('.next');
    let prev = $('.prev');
    function slider() {
        for (let i = 0; i < img.length; i++) {
            img[i].classList.add('opacity');
        }
        img[current].classList.remove('opacity');
    }
    next.on('click', function () {
        if (current + 1 == img.length) {
            current = 0;
        } else {
            current++;
        }
        slider();
    });
    prev.on('click', function () {
        if (current == 0) {
            current = img.length - 1;
        } else {
            current--;
        }
        slider();
    });

    // Выпадающие описания в About Us
    $('.text').slideUp();

    $('.bar').on('click', function () {
        $(this).find('h3').toggleClass('active');
        $(this).find('.vertical').toggleClass('active');
        $(this).find('.text').slideToggle(300);
    });

    // Слайдер в About Us
    $('.right img').on('click', function () {
        if ($(this).hasClass('img-2')) {
            $('.img-1').addClass('img-2');
            $('.img-2').removeClass('img-1');
            $('.img-3').addClass('img-1');
            $('.img-1').removeClass('img-3');
            $(this).addClass('img-3');
            $(this).removeClass('img-2');
        }
    });

    // Сортирока портфолио
    $('#portfolio-var li').on('click', function () {
        $('#portfolio-var li').removeClass('active');
        $(this).addClass('active');
        console.log($('#portfolio-var li'));
        if ($('#all').hasClass('active')) {
            $('.portfolio__portfolio-var img').show(500);
        }
        if ($('#illustration').hasClass('active')) {
            $('.portfolio__portfolio-var img:not(.illustration)').hide(500);
            $('.portfolio__portfolio-var img.illustration').show(500);
        }
        if ($('#digital').hasClass('active')) {
            $('.portfolio__portfolio-var img:not(.digital)').hide(500);
            $('.portfolio__portfolio-var img.digital').show(500);
        }
        if ($('#design').hasClass('active')) {
            $('.portfolio__portfolio-var img:not(.design)').hide(500);
            $('.portfolio__portfolio-var img.design').show(500);
        }
    });

    // Портфолио наведение на фото
    // $('.portfolio__portfolio-var img').hover(function(){
    //     $(this).animate({opacity: "0.5"},300);
    // });
    // $('.portfolio__portfolio-var img').mouseLeave(function(){
    //     $(this).animate({opacity: "1"},300);
    // });
    // let a = 1.05;
    // let b = 1;
    // $('.portfolio__portfolio-var img').hover(function () {
    //     // over
    //     $(this).css({ transform: "scale( 1.05 )" });
    //     console.log($(this));

    // }, function () {
    //     // out
    //     $(this).css({ transform: "scale( 1 )" });
    // }
    // );

});