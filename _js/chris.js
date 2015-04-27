(function($) {
  var Chris = {
    // Init
    init: function() {
      this.menu = $("#under .inner");
    },

    // Bind menu toggle actions
    toggleMenu: function() {
      // Bind toggler to the main button
      $("a.js-menu-toggle").on('click', function(event) {
        event.preventDefault();
        $("body").toggleClass('open');
      });

      // Hide menu when link is clicked
      $("ul.posts a", this.menu).on('click', function(event) {
        var link = $(this);
        event.preventDefault();
        $("body").removeClass('open');
        var timer = setTimeout(function() {
          location.href = link.attr('href');
        }, 500);
      });
    },

    /**
     * Replace all SVG images with inline SVG
     */
    convertSVG: function() {
      $("img[src$='svg']").each(function () {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function (data) {
          // Get the SVG tag, ignore the rest
          var $svg = $(data).find('svg');

          // Add replaced image's ID to the new SVG
          if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');

          // Replace image with new SVG
          $img.replaceWith($svg);

        }, 'xml');
      });
    }
  };

  $(document).ready(function() {
    Chris.init();
    Chris.toggleMenu();
    Chris.convertSVG();
  });
})(jQuery);
