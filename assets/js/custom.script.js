(function ($) {
  "use strict";

  $(document).ready(function () {
    /*=========================================================================

         ===  MENU SCROLL FIXED

         ========================================================================== */

    var s = $(".lgx-header-position");

    var pos = s.position();

    $(window).on("scroll", function () {
      var windowpos = $(window).scrollTop();

      if (windowpos >= pos.top) {
        s.addClass("menu-onscroll");
      } else {
        s.removeClass("menu-onscroll");
      }
    });
    /*=========================================================================

         ===  MENU SCROLL FIXED END

         ========================================================================== */

    /*=========================================================================

         ===  Circular CountDown

         ========================================================================== */

    if ($("#circular-countdown").length) {
      $("#circular-countdown").TimeCircles({
        animation: "smooth",

        bg_width: 1.0,

        fg_width: 0.1,

        circle_bg_color: "#ddd",

        time: {
          Days: {
            text: "Days",

            color: "#ec398b",

            show: true,
          },

          Hours: {
            text: "Hours",

            color: "#fac400",

            show: true,
          },

          Minutes: {
            text: "Minutes",

            color: "#00acee",

            show: true,
          },

          Seconds: {
            text: "Seconds",

            color: "#483fa1",

            show: true,
          },
        },
      });
    }

    /*=========================================================================

         ===  Circular CountDown End

         ========================================================================== */

    /*=========================================================================

         ===  // SITE PATH

         ========================================================================== */

    var lgx_path = window.location.protocol + "//" + window.location.host;

    var pathArray = window.location.pathname.split("/");

    for (var i = 1; i < pathArray.length - 1; i++) {
      lgx_path += "/";

      lgx_path += pathArray[i];
    }

    /*=========================================================================

         ===  // SITE PATH END

         ========================================================================== */

    /*=========================================================================

         ===  COUNTER START

         ========================================================================== */

    var lgxCounter = $(".lgx-counter");

    if (lgxCounter.length) {
      lgxCounter.counterUp({
        delay: 10,

        time: 5000,
      });
    }

    /*=========================================================================

         ===  COUNTER END

         ========================================================================== */

    /*=========================================================================

         ===  Modal Video

         ========================================================================== */

    /* Get iframe src attribute value i.e. YouTube video url

         and store it in a variable */

    var url = $("#modalvideo").attr("src");

    /* Remove iframe src attribute on page load to

         prevent autoplay in background */

    $("#modalvideo").attr("src", "");

    /* Assign the initially stored url back to the iframe src

         attribute when modal is displayed */

    $("#lgx-modal").on("shown.bs.modal", function () {
      $("#modalvideo").attr("src", url);
    });

    /* Assign empty url value to the iframe src attribute when

         modal hide, which stop the video playing */

    $("#lgx-modal").on("hide.bs.modal", function () {
      $("#modalvideo").attr("src", "");
    });

    /*=========================================================================

         ===  Modal Video END

         ========================================================================== */

    /*=========================================================================

         ===  countdown

         ========================================================================== */

    if ($("#lgx-countdown").length) {
      var dataTime = $("#lgx-countdown").data("date"); // Date Format : Y/m/d

      $("#lgx-countdown").countdown(dataTime, function (event) {
        var $this = $(this).html(
          event.strftime(
            "" +
              /*+ '<span class="lgx-weecks">%w <i> weeks </i></span> '*/

              '<span class="lgx-days">%D <i> Days </i></span> ' +
              '<span class="lgx-hr">%H <i> Hour </i></span> ' +
              '<span class="lgx-min">%M <i> Minu </i></span> ' +
              '<span class="lgx-sec">%S <i> Seco </i></span>'
          )
        );
      });
    }

    /*=========================================================================

         ===  countdown END

         ========================================================================== */

    /*=========================================================================

         ===  SMOOTH SCROLL - REQUIRES JQUERY EASING PLUGIN

         ========================================================================== */

    $("a.lgx-scroll").on("click", function (event) {
      var $anchor = $(this);

      var topTo = $($anchor.attr("href")).offset().top;

      if (window.innerWidth < 768) {
        topTo = topTo - 90;
      }

      $("html, body").stop().animate(
        {
          scrollTop: topTo,
        },
        1500,
        "easeInOutExpo"
      );

      event.preventDefault();

      return false;
    });

    /*=========================================================================

         ===  SMOOTH SCROLL END

         ========================================================================== */

    /*=========================================================================

         ===  magnific popup

         ========================================================================== */

    $(".lgx-gallery-popup").magnificPopup({
      delegate: "a", // child items selector, by clicking on it popup will open

      type: "image",

      gallery: {
        enabled: true,
      },

      image: {
        titleSrc: "title",
      },

      // other options
    });

    /*=========================================================================

         ===  magnific popup END

         ========================================================================== */

    if ($("#instafeed").length) {
      var userFeed = new Instafeed({
        get: "user",

        userId: "623597756",

        clientId: "02b47e1b98ce4f04adc271ffbd26611d",

        accessToken: "623597756.02b47e1.3dbf3cb6dc3f4dccbc5b1b5ae8c74a72",

        resolution: "standard_resolution",

        template:
          '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',

        sortBy: "most-recent",

        limit: 8,

        links: false,
      });

      userFeed.run();
    }

    /*=========================================================================

         ===  HOME PAGE Slider

         ========================================================================== */

    if ($("#lgx-main-slider").length) {
      $("#lgx-main-slider").owlCarousel({
        margin: 0,

        items: 1,

        loop: true,

        animateOut: "fadeOut",

        autoplay: true,

        dots: false,

        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],

        autoplayTimeout: 5000,

        autoplaySpeed: 500,

        nav: true,

        addClassActive: true,
      });
    }

    /*=========================================================================

         ===  HOME PAGE Slider END

         ========================================================================== */

    /*=========================================================================

         ===  gallery SLIDER

         ========================================================================== */

    if ($("#lgx-owlgallery").length) {
      $("#lgx-owlgallery").owlCarousel({
        margin: 0,

        items: 3,

        loop: true,

        autoplay: true,

        dots: false,

        navText: [
          "<img src='./assets/img/arrow-left.png'>",
          "<img src='./assets/img/arrow-right.png'>",
        ],

        autoplayTimeout: 5000,

        autoplaySpeed: 500,

        nav: true,

        addClassActive: true,

        responsive: {
          0: {
            items: 1,
          },

          480: {
            items: 2,
          },

          992: {
            items: 3,
          },
        },
      });
    }

    /*=========================================================================

         ===  gallery SLIDER END

         ========================================================================== */

    /*=========================================================================

         ===  HOME PAGE Slider

         ========================================================================== */

    if ($("#lgx-slider-center").length) {
      $("#lgx-slider-center").owlCarousel({
        margin: 0,

        center: true,

        items: 1,

        loop: true,

        //animateOut: 'fadeOut',

        autoplay: true,

        dots: false,

        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],

        autoplayTimeout: 5000,

        autoplaySpeed: 500,

        nav: true,

        addClassActive: true,

        responsive: {
          991: {
            items: 2,
          },
        },
      });
    }

    /*=========================================================================

         ===  HOME PAGE Slider END

         ========================================================================== */

    /*=========================================================================

         ===  TESTIMONIAL SLIDER

         ========================================================================== */

    if ($("#lgx-owltestimonial").length) {
      $("#lgx-owltestimonial").owlCarousel({
        margin: 0,

        items: 2,

        loop: true,

        autoplay: true,

        dots: true,

        navText: [
          "<img src='./assets/img/arrow-left-ash.png'>",
          "<img src='./assets/img/arrow-right-ash.png'>",
        ],

        autoplayTimeout: 5000,

        autoplaySpeed: 500,

        nav: true,

        addClassActive: true,

        responsive: {
          0: {
            items: 1,
          },

          787: {
            items: 1,
          },
        },
      });
    }

    /*=========================================================================

         ===  TESTIMONIAL SLIDER END

         ========================================================================== */

    // HEADER DISPLAY FLEX ISSUE

    if ($(window).width() < 787) {
      $("#navbar").removeClass("lgx-collapse");
    }

    /*=========================================================================

         ===  Typed Animation START

         ========================================================================== */

    /* if ($("#lgx-typed-string").length) {
      $("#lgx-typed-string").typed({
        strings: ["Rapture 2k22", "Reverie 2k22"],

        // typing speed

        typeSpeed: 10,

        // time before typing starts

        startDelay: 0,

        // backspacing speed

        backSpeed: 0,

        // shuffle the strings

        shuffle: false,

        // time before backspacing

        backDelay: 500,

        // loop

        loop: true,

        // false = infinite

        loopCount: false,

        // show cursor

        showCursor: true,

        // character for cursor

        cursorChar: "|",

        // either html or text

        contentType: "html",
      });
    } */

    /*=========================================================================

         ===  Typed Animation END

         ========================================================================== */


    /* back to top */
    var btn = $("#back_to_top");

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
    });

    btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });
    /* flip card */
    $(".flip-card-button").on("click",function(e){
      /* console.log(e) */
      var current=e.target.classList
      e=e.target
      while(!(current.contains("flip-card-inner"))){
        e=e.parentElement 
        current=e.classList
      }
      e.classList.toggle("flipped")
    })

  }); //DOM READY
})(jQuery);