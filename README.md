# Preload Click

Preload content of links before clicking

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/KATT/preload-click/master/dist/preload-click.min.js
[max]: https://raw.github.com/KATT/preload-click/master/dist/preload-click.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/preload-click.min.js"></script>
<script>
jQuery(function($) {
  $(document).preloadClick('a.ajax', function(event, promise) {
	  event.preventDefault();
	  var $this = $(this);

	  promise.done(function (data) {
	    // do something with the data
	  });
	});
});
</script>
```

## Documentation
_(Coming soon)_

## Examples
See this [Code Pen](http://codepen.io/KATT/pen/jpntu).

## Todo / wish list

* Implement as a jQuery event, `jQuery.Event.promsieclick`
* Ability to unbind
* Implement / support [FastClick][fastclick]
* Delay mouseover promise with X milliseconds
* Options
	* Mouseover delay
	* Override promise generation
	* Auto `preventDefault` on click
* Clean-up interface (jQuery `.on()`-esque?)
* Unit tests
* Clean-up old promises
* Prevent caching on rejected promises?


[fastclick]: https://github.com/Plaputta/jquery.event.special.fastclick

## Release History
_(Nothing yet)_
