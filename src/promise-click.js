/*
 * promise-click
 * https://github.com/KATT/promise-click
 *
 * Copyright (c) 2013 Alexander Johansson
 * Licensed under the MIT license.
 */

(function($) {
  var triggerType;

  var generatePromise = function generatePromise(elem) {
    var $elem = $(elem);
    var promise = $elem.data('promise');

    if (!promise) {
      promise = $.get($elem.attr('href'));
      $elem.data('promise', promise);
    }

    return promise;
  };

  var touchesBegan = function touchesBegan() {
    generatePromise(this);
  };
  var mouseover = function mouseover() {
    // TODO wait X milliseconds before preloading and ensure that mouse not leaves
    generatePromise(this);
  };

  var clicked = function clicked(event) {
    // trigger promiseclick event with orig click event
    event.type = 'promiseclick';
    $.event.trigger.call(this, event, {}, this, true);
    event.type = triggerType;
  };

  $.event.special.promiseclick = {
    add: function (handleObj) {
      var oldHandler = handleObj.handler;

      handleObj.handler = function(event) {
        event.data = event.data || {};
        event.data.promise = generatePromise(this);
        oldHandler.apply(this, arguments);
      };
    },
    setup: function (/*data, namespaces, eventHandle */) {
      var $this = $(this);

      $this.on('mouseover', mouseover);
      $this.on('mousedown touchstart', touchesBegan);

      // if we have support for fastclick, use that
      triggerType = ($.event.special.fastclick ? 'fastclick' : 'click');

      $this.on(triggerType, clicked);
    },
    teardown: function () {
      var $this = $(this);

      $this.off('touchstart', mouseover);
      $this.off('mousedown touchstart', touchesBegan);

      $this.off(triggerType, clicked);
    }
  };

  $.fn.promiseClick = function (callback) {
    return this.each(function() {
      $(this).on('promiseclick', callback);
    });
  };
}(jQuery));




