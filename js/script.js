$(document).ready(function () {

    // Плавный скролл по странице
    $('a[href^="#"]').click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top - 60;
        $('html').animate({ scrollTop: destination }, 1100);
        return false;
    });

    var cc = 1;
    var time = 1;
    $(window).on('scroll', function () {
        var
            w_top = $(window).scrollTop(),
            e_top = $('#skills').offset().top - 65;
        // console.log(w_top + ' ' + e_top);
        if (e_top <= w_top) {
            if (cc < 2) {
                $('.number').each(function () {
                    console.log(this);
                    var
                        i = 1,
                        num = $(this).data('num'),
                        step = 1000 * time / num,
                        that = $(this),
                        int = setInterval(function () {
                            if (i <= num) {
                                that.html(i);
                            } else {
                                clearInterval(int);
                            }
                            i++;
                        }, step);
                        console.log(num);
                });

                $('.skill-now').each(function () {
                    var
                        i = 1,
                        num = $(this).data('num'),
                        step = 1000 * time / num,
                        that = $(this),
                        int = setInterval(function () {
                            if (i <= num) {
                                that.width(i + '%');
                            } else {
                                clearInterval(int);
                            }
                            i++;
                        }, step);
                });
                cc = cc + 2;
            }
        }
    });


});