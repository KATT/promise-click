/*
 * preload-click
 * https://github.com/ajax/preload-click
 *
 * Copyright (c) 2013 Alexander Johansson
 * Licensed under the MIT license.
 */

(function($) {
  var generatePromise = function(elem) {
    var $elem = $(elem);
    var promise = $elem.data('promise');

    if (!promise) {
      promise = $.get($elem.attr('href'));
      $elem.data('promise', promise);
    }

    return promise;
  };

  // Collection method.
  $.fn.preloadClick = function(selector, fn, data) {
    // Do something awesome to each selected element.
    if ( data == null && fn == null ) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if ( fn == null ) {
      if ( typeof selector === "string" ) {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    return this.each(function() {
      var $this = $(this);

      $this.on('mouseover touchstart', selector, function () {
        // TODO wait X milliseconds before preloading and ensure that mouse not leaves
        generatePromise(this);
      });

      $this.on('mousedown', selector, function () {
        generatePromise(this);
      });

      $this.on('click', selector, function(event) {
        var promise = generatePromise(this);
        fn.call( this, event, promise);
      });

    });
  };

}(jQuery));


