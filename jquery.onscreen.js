// onScreen jQuery plugin
// (c) 2011 Ben Pickles
//
// http://benpickles.github.com/onScreen
//
// Released under MIT license.
;(function($) {
  $.expr[":"].onScreen = function(elem) {
    var $window = $(window)
    var scroll_top = $window.scrollTop()
    var scroll_bottom = scroll_top + $window.height()
    var top = $(elem).offset().top
    return top > scroll_top && top < scroll_bottom
  }
})(jQuery);
