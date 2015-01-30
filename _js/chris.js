(function($) {
  var Chris = {
    // Init
    init: function() {
      $("#logo a").click(function(event) {
        event.preventDefault();
        $("body").toggleClass('open');
      });
    }
  };

  $(document).ready(function() {
    Chris.init();
  });
})(jQuery);
