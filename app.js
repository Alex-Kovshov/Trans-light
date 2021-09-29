$('.slick-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2
  });

  $('.single-item').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
  const tabsItems = document.querySelectorAll(".tabs__item");

  tabsBtn.forEach(onTablick);
   
  

  function onTablick(item) {
 item.addEventListener("click", function() {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if( ! currentBtn.classList.contains('active')){
        tabsBtn.forEach(function(item) {
          item.classList.remove('active');
        });
  
        tabsItems.forEach(function(item) {
          item.classList.remove('active');
        });
  
  
        currentBtn.classList.add('active');
        currentTab.classList.add('active')
      }
   });
  }

  document.querySelector('.tabs__nav-btn').click();

  $(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__list,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
});
});

$(function() {
  
  let intro = $("#intro");
  let header = $("#header");
  let introH = intro.innerHeight();
  let headerH = header.innerHeight();
  
  
  $(window).on("scroll resize", function(){
      
       introH = intro.innerHeight();
       headerH = header.innerHeight();
      let scrollTop = $(this).scrollTop();
  
      if( scrollTop >= introH - headerH) {
        header.addClass("header--dark");
      } else {
        header.removeClass("header--dark");
      }
      
  });
  
  
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
  
    let scrollEl = $(this).data("scroll");
    let scrollElPos = $(scrollEl).offset().top;

    
    $('.header__burger,.header__list,.header__menu').removeClass('active');
    $('body').removeClass('lock');
      

  
    $("html, body"). animate({
      scrollTop: scrollElPos 
  
    }, 500)
  
    console.log(scrollElPos);
  });
});
/*Smooth Scroll*/ 


