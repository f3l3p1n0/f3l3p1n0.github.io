$(document).ready(function() {
    var lastScrollTop = 0;
    var floatWrapperHeight = $(".float_wrapper").outerHeight();
  
    $(window).scroll(function() {
      var currentScrollTop = $(this).scrollTop();
  
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        $(".float_wrapper").removeClass("no-scroll");
      } else {
        // Scrolling up
        $(".float_wrapper").addClass("no-scroll");
      }
  
      if (currentScrollTop >= 50) {
        $(".float_wrapper").addClass("scroll");
      } else {
        $(".float_wrapper").removeClass("scroll");
      }
  
      lastScrollTop = currentScrollTop;
    });
  });
  