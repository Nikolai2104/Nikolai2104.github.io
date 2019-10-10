$(document).ready(function(){
    $('.text').slideUp();

    $('.bar').on('click', function(){
        $(this).find('h3').toggleClass('active');
        $(this).find('.vertical').toggleClass('active');
        $(this).find('.text').slideToggle(300);
    });

    $('.right img').on('click', function(){
        if($(this).hasClass('img-2')){
            $('.img-1').addClass('img-2');
            $('.img-2').removeClass('img-1');
            $('.img-3').addClass('img-1');
            $('.img-1').removeClass('img-3');
            $(this).addClass('img-3');
            $(this).removeClass('img-2');
        }
        // $('.img-3').addClass('img-1');
        // $('img').removeClass('img-3');
        // $('.img-2').addClass('img-3');
        // $('.img-2').removeClass('img-2');
        // $('.img-1').addClass('img-2');
        // $('.img-1').removeClass('img-1');
        console.log($(this));
    });
});