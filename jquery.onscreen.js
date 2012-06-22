// onScreen jQuery plugin v0.2.1
// (c) 2011 Ben Pickles
//
// http://benpickles.github.com/onScreen
//
// Released under MIT license.
;(function($) {
  $.expr[":"].onScreen = function(elem) {
    var $window = $(window),
    	viewport_top = $window.scrollTop(),
    	viewport_height = $window.height(),
    	viewport_bottom = viewport_top + viewport_height,
    	$elem = $(elem),
    	top = $elem.offset().top,
    	height = $elem.height(),
    	bottom = top + height;

    return (top >= viewport_top && top < viewport_bottom) ||
           (bottom > viewport_top && bottom <= viewport_bottom) ||
           (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom);
  }
})(jQuery);
