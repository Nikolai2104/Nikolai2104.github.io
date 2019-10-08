$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
});
$('#blog').slick({
  centerMode: true,
  centerPadding: '80px',
  slidesToShow: 4,
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 520,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});

// burger-menu

var button = document.querySelector('.burger-menu__button');
var menu = document.querySelector('.burger-menu');
var overlay = document.querySelector('.burger-menu__overlay');

function burgerMenu() {
  if(menu.classList.contains('burger-menu_active')){
    menu.classList.remove('burger-menu_active');
  } else {
      menu.classList.add('burger-menu_active');
  }
}

button.addEventListener('click', burgerMenu);
overlay.addEventListener('click', burgerMenu);

// clientSlider ========================================

var btnClP = $('#prev-cl')
var btnClN = $('#next-cl');
let clientsPh = $('#clients-photo .photo');
let clientsDs = $('#clients-description .description');
let current = 2;

function slidClN(){
  for (let i = 0; i < clientsPh.length; i++) {
    clientsPh[i].classList.remove('active');
    clientsDs[i].classList.remove('active');
  }
  if(current +1 == clientsPh.length) {
    current = 0;
  } else {
    current++;
  }
  clientsDs[current].classList.add('active');
  clientsPh[current].classList.add('active');
};

function slidClP(){
  for (let i = 0; i < clientsPh.length; i++) {
    clientsPh[i].classList.remove('active');
    clientsDs[i].classList.remove('active');
  }
  if(current == 0) {
    current = clientsPh.length-1;
  } else {
    current--;
  }
  clientsDs[current].classList.add('active');
  clientsPh[current].classList.add('active');
};
btnClN.click(slidClN);
btnClP.click(slidClP);


$("input").each(function ()
{
    var v = this.value;

    $(this).blur(function ()
    {
        if (this.value.length == 0) this.value = v;
    }).focus(function ()
    {
        this.value = "";
    }); 
});

$('a[href^="#"]').click(function () { 
  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top;
    $('html').animate( { scrollTop: destination }, 1100 );
  return false;
});










