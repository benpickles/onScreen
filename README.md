# onScreen

onScreen is a jQuery plugin to detect whether an element is currently visible on-screen. It adds the `:onScreen` selector which you can use like so: `$("span:onScreen")`.

    $(function() {                          // On document load
      $(window).scroll(function() {         // when the page is scrolled
        $("h2")                             // get all <h2>s
          .css("background-color", "")      // reset their background colours
          .filter(":onScreen")              // get only <h2>s on screen
            .css("background-color", "red") // give them a red background
      })
    })

## Copyright

Copyright 2011 [Ben Pickles](http://benpickles.com/). See [LICENSE](http://github.com/benpickles/onScreen/blob/master/LICENSE) for details.
