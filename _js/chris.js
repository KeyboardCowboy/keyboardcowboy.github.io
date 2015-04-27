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
    }
  };

  $(document).ready(function() {
    Chris.init();
    Chris.toggleMenu();
  });
})(jQuery);
