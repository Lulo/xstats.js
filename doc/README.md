# xStats.js API documentation

<!-- div -->


<!-- div -->

## `xStats`
* [`xStats`](#xStats)
* [`xStats.subclasses`](#xStats.subclasses)

<!-- /div -->


<!-- div -->

## `xStats.prototype`
* [`xStats#height`](#xStats:height)
* [`xStats#locked`](#xStats:locked)
* [`xStats#mode`](#xStats:mode)
* [`xStats#padding`](#xStats:padding)
* [`xStats#width`](#xStats:width)
* [`xStats#addListener`](#xStats:addListener)
* [`xStats#emit`](#xStats:emit)
* [`xStats#on`](#xStats:on)
* [`xStats#removeAllListeners`](#xStats:removeAllListeners)
* [`xStats#removeListener`](#xStats:removeListener)

<!-- /div -->


<!-- div -->

## `xStats#fps`
* [`xStats#fps`](#xStats:fps)
* [`xStats#fps.bg`](#xStats:fps.bg)
* [`xStats#fps.fg`](#xStats:fps.fg)

<!-- /div -->


<!-- div -->

## `xStats#mem`
* [`xStats#mem`](#xStats:mem)
* [`xStats#mem.bg`](#xStats:mem.bg)
* [`xStats#mem.fg`](#xStats:mem.fg)

<!-- /div -->


<!-- div -->

## `xStats#ms`
* [`xStats#ms`](#xStats:ms)
* [`xStats#ms.bg`](#xStats:ms.bg)
* [`xStats#ms.fg`](#xStats:ms.fg)

<!-- /div -->


<!-- div -->

## `xStats.Event`
* [`xStats.Event`](#xStats.Event)

<!-- /div -->


<!-- div -->

## `xStats.Event.prototype`
* [`xStats.Event#type`](#xStats.Event:type)

<!-- /div -->


<!-- /div -->


<!-- div -->


<!-- div -->

## `xStats`

<!-- div -->

### <a id="xStats" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L91" title="View in source">`xStats([options={}])`</a>
xStats constructor.
[&#9650;][1]

#### Arguments
1. `[options={}]` *(Object)*: Options object.

#### Example
~~~ js
// basic usage (the `new` operator is optional)
var stats = new xStats;

// or using options
var stats = new xStats({
  'mode': 'ms',
  'height': 130,
  'width':200,
  'padding':10,
  'locked': false,
  'fps': {
    'bg': '#330000',
    'fg': '#cc6600'
  },
  'ms': {
    'bg': '#000033',
    'fg': '#3366ff'
  },
  'mem': {
    'bg': '#000033',
    'fg': '#660099'
  }
});

// insert into document
document.body.appendChild(stats.element);
~~~

<!-- /div -->


<!-- div -->

## `xStats`
### <a id="xStats" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L91" title="View in source">`xStats([options={}])`</a>
xStats constructor.
[&#9650;][1]

<!-- div -->

### <a id="xStats.subclasses" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L532" title="View in source">`xStats.subclasses`</a>
*(Array)*: An array of xStat instances.
[&#9650;][1]

<!-- /div -->


<!-- /div -->


<!-- div -->

## `xStats.prototype`
### <a id="xStats" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L91" title="View in source">`xStats([options={}])`</a>
xStats constructor.
[&#9650;][1]

<!-- div -->

### <a id="xStats:height" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L543" title="View in source">`xStats#height`</a>
*(Number)*: The height of the chart *(px)*.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:locked" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L564" title="View in source">`xStats#locked`</a>
*(Boolean)*: A flag to indicate if the chart is locked at its current display mode.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:mode" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L571" title="View in source">`xStats#mode`</a>
*(String)*: The charts current display mode *(fps, ms, mem)*.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:padding" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L557" title="View in source">`xStats#padding`</a>
*(Number)*: The inner padding of the chart that doesn't affect dimensions *(px)*.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:width" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L550" title="View in source">`xStats#width`</a>
*(Number)*: The width of the chart *(px)*.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:addListener" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L318" title="View in source">`xStats#addListener(type, listener)`</a>
Registers a single listener for the specified event type(s).
[&#9650;][1]

#### Arguments
1. `type` *(String)*: The event type.
2. `listener` *(Function)*: The function called when the event occurs.

#### Returns
*(Object)*: The xStats instance.

#### Example
~~~ js
// register a listener for an event type
xs.addListener('sample', listener);

// register a listener for multiple event types
xs.addListener('start sample', listener);
~~~

<!-- /div -->


<!-- div -->

### <a id="xStats:emit" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L334" title="View in source">`xStats#emit(type)`</a>
Executes all registered listeners of the specified event type.
[&#9650;][1]

#### Arguments
1. `type` *(String|Object)*: The event type or object.

#### Returns
*(Boolean)*: Returns `true` if all listeners were executed, else `false`.

<!-- /div -->


<!-- div -->

### <a id="xStats:on" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L578" title="View in source">`xStats#on`</a>
Alias of [`xStats#addListener`](#xStats:addListener).
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:removeAllListeners" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L394" title="View in source">`xStats#removeAllListeners(type)`</a>
Unregisters all listeners or those for the specified event type(s).
[&#9650;][1]

#### Arguments
1. `type` *(String)*: The event type.

#### Returns
*(Object)*: The xStats instance.

#### Example
~~~ js
// unregister all listeners
xs.removeAllListeners();

// unregister all listeners for an event type
xs.removeAllListeners('sample');

// unregister all listeners for multiple event types
xs.removeAllListeners('start sample complete');
~~~

<!-- /div -->


<!-- div -->

### <a id="xStats:removeListener" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L364" title="View in source">`xStats#removeListener(type, listener)`</a>
Unregisters a single listener for the specified event type(s).
[&#9650;][1]

#### Arguments
1. `type` *(String)*: The event type.
2. `listener` *(Function)*: The function to unregister.

#### Returns
*(Object)*: The xStats instance.

#### Example
~~~ js
// unregister a listener for an event type
xs.removeListener('sample', listener);

// unregister a listener for multiple event types
xs.removeListener('start sample', listener);
~~~

<!-- /div -->


<!-- /div -->


<!-- div -->

## `xStats#fps`

<!-- div -->

### <a id="xStats:fps" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L585" title="View in source">`xStats#fps`</a>
*(Object)*: The "frames per second" display mode options object.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:fps.bg" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L592" title="View in source">`xStats#fps.bg`</a>
*(String)*: The background color of the chart for the display mode.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:fps.fg" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L599" title="View in source">`xStats#fps.fg`</a>
*(String)*: The foreground color of the chart for the display mode.
[&#9650;][1]

<!-- /div -->


<!-- /div -->


<!-- div -->

## `xStats#mem`

<!-- div -->

### <a id="xStats:mem" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L629" title="View in source">`xStats#mem`</a>
*(Object)*: The "memory" display mode options object.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:mem.bg" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L636" title="View in source">`xStats#mem.bg`</a>
*(String)*: The background color of the chart for the display mode.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:mem.fg" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L643" title="View in source">`xStats#mem.fg`</a>
*(String)*: The foreground color of the chart for the display mode.
[&#9650;][1]

<!-- /div -->


<!-- /div -->


<!-- div -->

## `xStats#ms`

<!-- div -->

### <a id="xStats:ms" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L607" title="View in source">`xStats#ms`</a>
*(Object)*: The "millisecond" display mode options object.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:ms.bg" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L614" title="View in source">`xStats#ms.bg`</a>
*(String)*: The background color of the chart for the display mode.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:ms.fg" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L621" title="View in source">`xStats#ms.fg`</a>
*(String)*: The foreground color of the chart for the display mode.
[&#9650;][1]

<!-- /div -->


<!-- /div -->


<!-- div -->

## `xStats.Event`

<!-- div -->

### <a id="xStats.Event" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L49" title="View in source">`xStats.Event(type)`</a>
Event constructor.
[&#9650;][1]

#### Arguments
1. `type` *(String|Object)*: The event type.

<!-- /div -->


<!-- /div -->


<!-- div -->

## `xStats.Event.prototype`
### <a id="xStats.Event" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L49" title="View in source">`xStats.Event(type)`</a>
Event constructor.
[&#9650;][1]

<!-- div -->

### <a id="xStats.Event:type" href="https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L666" title="View in source">`xStats.Event#type`</a>
*(String)*: The event type.
[&#9650;][1]

<!-- /div -->


<!-- /div -->


<!-- /div -->


  [1]: #readme "Jump back to the TOC."