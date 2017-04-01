
  // closing navbar on click -- since it stays open on its own //
<script>
    $(document).on('click',function(){
    $('.collapse').collapse('hide');
    })
</script>


    //Smooth scrolling
<script>
    $(document).ready(function(){
      $('a[href^="#"]').on('click',function (e) {
          e.preventDefault();
          var target = this.hash,
          $target = $(target);
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top
          }, 900, 'swing')
      });
    });
</script>


  // Adding Animate.css class when scrolled into viewport
<script>
  function isScrolledIntoView(elem) {
      var $window = $(window),
          docViewTop = $window.scrollTop(),
          docViewBottom = docViewTop + $window.height(),
          elemTop = $(elem).offset().top,
          elemBottom = elemTop + $(elem).outerHeight() - 200;
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $(window).on("scroll", function() {

      $('.fade').each(function() {
          if (isScrolledIntoView(this)) {
              $(this).addClass('animated fadeInUp');
          }

      });
  });
</script>


  // Changing the color of the navbar when scrolled
<script>
  jQuery(document).ready(function($) {
    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop(),
          navbar = $('.navbar-default');

      if (scrollPos > 20) {
        navbar.addClass('change-color');
      } else {
        navbar.removeClass('change-color');
      }
    });
  });
</script>

//GA tracking tag
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-93769116-2', 'auto');
  ga('send', 'pageview');

</script>
