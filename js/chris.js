(function($) {
  var Chris = {

    // Init
    init: function() {
      $('#logo a').click(function(event) {
        event.preventDefault();
        $("#under").toggleClass('active');
        return false;
      });
    }
  };

  Chris.init();
})(jQuery);
