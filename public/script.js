function change_color(){
    $(".change-color").toggleClass('bg-red-500');

}

setInterval(change_color,1000)


$(document).ready(function(){

    $('#owl-carousel1').owlCarousel({


        loop:true,
        margin:10,
        nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      dots:true,
       autoplayHoverPause: true,
      autoplaySpeed: 2000,
      rtl:true,
      dotsEach: 3,
      responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        },
        1000:{
            items:3
        }
    }
      
    
    });

$('#owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
  autoplay:true,
  autoplayTimeout:3000,
  dots:false,
   autoplayHoverPause: true,
  autoplaySpeed: 2000,
  rtl:true,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:2
    }
}
})

$('#owl-carousel3').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
  autoplay:true,
  autoplayTimeout:3000,
  dots:true,
   autoplayHoverPause: true,
  autoplaySpeed: 2000,
  rtl:true,
  dotsEach: 3,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


})


$(document).ready(function() {
    // When the input field gains focus
    $("#email").focus(function() {
        // Remove slide-down class and add slide-up class after a small delay
        $("#slide").removeClass("custom-slide-down");
        setTimeout(function() {
            $("#slide").addClass("custom-slide-up");
        }, 20); // Adjust delay to ensure smooth animation
    });

    // When the input field loses focus
    $("#email").blur(function() {
        // Add slide-down class and remove slide-up class after a small delay
        $("#slide").addClass("custom-slide-down");
        setTimeout(function() {
            $("#slide").removeClass("custom-slide-up");
        }, 20); // Adjust delay to ensure smooth animation
    });
});




var screenWidth = $(window).width();
        console.log("Screen width: " + screenWidth);

// Log the text content

