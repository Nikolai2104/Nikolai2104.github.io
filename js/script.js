$('a[href^="#"]').click(function () { 
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top -60;
      $('html').animate( { scrollTop: destination }, 1100 );
    return false;
  });