# Promise Click

Preload content of links before clicking

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/KATT/promise-click/master/dist/promise-click.min.js
[max]: https://raw.github.com/KATT/promise-click/master/dist/promise-click.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/promise-click.min.js"></script>
<script>
jQuery(function($) {
  $(document).on('promiseclick', 'a.ajax', function(event) {
	  event.preventDefault();
	  var $this = $(this);

	  event.data.promise.done(function (data) {
	    // do something with the data
	  });
	});
});
</script>
```

## Documentation
_(Coming soon)_

## Examples
See [`demos/`](demos/index.html).

## Todo / wish list

* Delay mouseover promise with X milliseconds
* Options
	* Mouseover delay
	* Override promise generation
	* Auto `preventDefault` on click
* Unit tests
* Clean-up old promises
* Prevent caching on rejected promises?

### Implemented

* Implement as a jQuery event, `jQuery.Event.promsieclick`
* Ability to unbind
* Support [virtual mouse][vclick]
* Clean-up interface (jQuery `.on()`-esque?)


[vclick]: http://api.jquerymobile.com/vclick/

## Release History
_(Nothing yet)_
