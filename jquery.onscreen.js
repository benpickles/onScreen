// onScreen jQuery plugin v0.2.2
// (c) 2011 Ben Pickles
//
// http://benpickles.github.com/onScreen
//
// Released under MIT license.
(function($) {
    $.expr[":"].onScreen = function(elem) {
        var $window = $(window);
        var viewport_top = $window.scrollTop();
        var viewport_left = $window.scrollLeft();
        var viewport_width = $window.width();
        var viewport_height = $window.height();
        var viewport_right = viewport_left + viewport_width;
        var viewport_bottom = viewport_top + viewport_height;
        var $elem = $(elem);
        var top = $elem.offset().top;
        var left = $elem.offset().left;
        var width = $elem.width();
        var height = $elem.height();
        var right = left + width;
        var bottom = top + height;

        var onScreen = (
                (
                (left >= viewport_left && left < viewport_right) ||
                (right > viewport_left && right <= viewport_right) ||
                (width > viewport_width && left <= viewport_left && right >= viewport_right)
                )
            &&
                (
                (top >= viewport_top && top < viewport_bottom) ||
                (bottom > viewport_top && bottom <= viewport_bottom) ||
                (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
                )
        );

        return onScreen;
    };
})(jQuery);