(function ($) {
  Compass = {
    compass: null,

    init: function() {
      self = this;
      this.compass = $('i.fa-compass');

      $('body').mousemove(function(event) {
        var cpos = self.compass.position();
        var offset = 55;

        var b1 = cpos.left + (self.compass.outerWidth(true) / 2);
        var b2 = event.pageX;
        var b  = b2 - b1;

        var a1 = cpos.top + (self.compass.outerHeight(true) / 2);
        var a2 = event.pageY;
        var a  = a1 - a2;

        var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

        // Find the quadrant
        var q = (a >= 0 ? (b >= 0 ? 1 : 2) : (b < 0 ? 3 : 4));

        // Calculate the degree.
        // sin(x) = b/c
        // x = sin^-1(b/c)
        var r2d = 180 / 3.14;
        switch (q) {
          case 1:
            var x = Math.asin(a/c) * r2d;
            break;

          case 2:
            var x = Math.acos(b/c) * r2d;
            break;

          case 3:
            var x = Math.asin(-a/c) * r2d + 180;
            break;

          case 4:
            var x = Math.acos(-b/c) * r2d + 180;
            break;
        }

        // Adjust for the offset of the north pointer in the icon.
        x = -Math.round(x - offset);

        // Adjust the CSS to point the compass.
        css  = 'transform:rotate(' + x + 'deg);transform-origin: 50% 50%;';
        css += '-ms-transform:rotate(' + x + 'deg);-ms-transform-origin: 50% 50%;';
        css += '-webkit-transform:rotate(' + x + 'deg);-webkit-transform-origin: 50% 50%;';

        self.compass.attr('style', css);
      });
    }
  };

  $(document).ready(function() {
    Compass.init();
  });
})(jQuery);
