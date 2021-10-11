$(function(){

    $('.cars-inner').slick({
        infinite: true,
        arrows:false,
        dots:true,
        speed: 500,
      autoplay:true,
        autoplaySpeed:1400,
        slidesToShow: 3,

        responsive: [
          {
            breakpoint: 1215,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
          

});