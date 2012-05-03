# xStats.js <sup>v1.0.0-pre</sup>

<!-- div -->


<!-- div -->

## `xStats`
* [`xStats`](#xstatsoptions)
* [`xStats.subclasses`](#xstatssubclasses)

<!-- /div -->


<!-- div -->

## `xStats.prototype`
* [`xStats.prototype.height`](#xstatsprototypeheight)
* [`xStats.prototype.locked`](#xstatsprototypelocked)
* [`xStats.prototype.mode`](#xstatsprototypemode)
* [`xStats.prototype.padding`](#xstatsprototypepadding)
* [`xStats.prototype.sampleRate`](#xstatsprototypesamplerate)
* [`xStats.prototype.width`](#xstatsprototypewidth)
* [`xStats.prototype.addListener`](#xstatsprototypeaddlistenertype-listener)
* [`xStats.prototype.emit`](#xstatsprototypeemittype)
* [`xStats.prototype.on`](#xstatsprototypeon)
* [`xStats.prototype.removeAllListeners`](#xstatsprototyperemovealllistenerstype)
* [`xStats.prototype.removeListener`](#xstatsprototyperemovelistenertype-listener)

<!-- /div -->


<!-- div -->

## `xStats.prototype.fps`
* [`xStats.prototype.fps`](#xstatsprototypefps)
* [`xStats.prototype.fps.bg`](#xstats-fpsbg)
* [`xStats.prototype.fps.fg`](#xstats-fpsfg)

<!-- /div -->


<!-- div -->

## `xStats.prototype.mem`
* [`xStats.prototype.mem`](#xstatsprototypemem)
* [`xStats.prototype.mem.bg`](#xstats-membg)
* [`xStats.prototype.mem.fg`](#xstats-memfg)

<!-- /div -->


<!-- div -->

## `xStats.prototype.ms`
* [`xStats.prototype.ms`](#xstatsprototypems)
* [`xStats.prototype.ms.bg`](#xstats-msbg)
* [`xStats.prototype.ms.fg`](#xstats-msfg)

<!-- /div -->


<!-- div -->

## `xStats.Event`
* [`xStats.Event`](#xstatseventtype)

<!-- /div -->


<!-- div -->

## `xStats.Event.prototype`
* [`xStats.Event.prototype.type`](#xstatseventprototypetype)

<!-- /div -->


<!-- /div -->


<!-- div -->


<!-- div -->

## `xStats`

<!-- div -->


<!-- div -->

### `xStats([options={}])`
<a id="xstatsoptions" href="#xstatsoptions">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L95 "View in source") [&#x24C9;][1]

The xStats constructor.

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

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.subclasses`
<a id="xstatssubclasses" href="#xstatssubclasses">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L566 "View in source") [&#x24C9;][1]

*(Array)*: An array of xStat instances.

* * *

<!-- /div -->


<!-- /div -->


<!-- div -->

## `xStats.prototype`

<!-- div -->


<!-- div -->

### `xStats.prototype.height`
<a id="xstatsprototypeheight" href="#xstatsprototypeheight">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L578 "View in source") [&#x24C9;][1]

*(Number)*: The height of the chart *(px)*.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.prototype.locked`
<a id="xstatsprototypelocked" href="#xstatsprototypelocked">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L602 "View in source") [&#x24C9;][1]

*(Boolean)*: A flag to indicate if the chart is locked at its current display mode.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.prototype.mode`
<a id="xstatsprototypemode" href="#xstatsprototypemode">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L610 "View in source") [&#x24C9;][1]

*(String)*: The charts current display mode *(fps, ms, mem)*.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.prototype.padding`
<a id="xstatsprototypepadding" href="#xstatsprototypepadding">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L594 "View in source") [&#x24C9;][1]

*(Number)*: The inner padding of the chart that doesn't affect dimensions *(px)*.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.prototype.sampleRate`
<a id="xstatsprototypesamplerate" href="#xstatsprototypesamplerate">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L618 "View in source") [&#x24C9;][1]

*(Number)*: The rate at which the "sample" event is emitted *(secs)*.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.prototype.width`
<a id="xstatsprototypewidth" href="#xstatsprototypewidth">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L586 "View in source") [&#x24C9;][1]

*(Number)*: The width of the chart *(px)*.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.prototype.addListener(type, listener)`
<a id="xstatsprototypeaddlistenertype-listener" href="#xstatsprototypeaddlistenertype-listener">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L330 "View in source") [&#x24C9;][1]

Registers a single listener for the specified event type(s).

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

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.prototype.emit(type)`
<a id="xstatsprototypeemittype" href="#xstatsprototypeemittype">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L347 "View in source") [&#x24C9;][1]

Executes all registered listeners of the specified event type.

#### Arguments
1. `type` *(String|Object)*: The event type or object.

#### Returns
*(Boolean)*: Returns `true` if all listeners were executed, else `false`.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.prototype.on`
<a id="xstatsprototypeon" href="#xstatsprototypeon">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L626 "View in source") [&#x24C9;][1]

Alias of [`xStats#addListener`](#xStats:addListener).

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.prototype.removeAllListeners(type)`
<a id="xstatsprototyperemovealllistenerstype" href="#xstatsprototyperemovealllistenerstype">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L409 "View in source") [&#x24C9;][1]

Unregisters all listeners or those for the specified event type(s).

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

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.prototype.removeListener(type, listener)`
<a id="xstatsprototyperemovelistenertype-listener" href="#xstatsprototyperemovelistenertype-listener">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L378 "View in source") [&#x24C9;][1]

Unregisters a single listener for the specified event type(s).

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

* * *

<!-- /div -->


<!-- /div -->


<!-- div -->

## `xStats.prototype.fps`

<!-- div -->


<!-- div -->

### `xStats.prototype.fps`
<a id="xstatsprototypefps" href="#xstatsprototypefps">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L634 "View in source") [&#x24C9;][1]

*(Object)*: The "frames per second" display mode options object.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.prototype.fps.bg`
<a id="xstats-fpsbg" href="#xstats-fpsbg">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L642 "View in source") [&#x24C9;][1]

*(String)*: The background color of the chart for the display mode.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.prototype.fps.fg`
<a id="xstats-fpsfg" href="#xstats-fpsfg">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L650 "View in source") [&#x24C9;][1]

*(String)*: The foreground color of the chart for the display mode.

* * *

<!-- /div -->


<!-- /div -->


<!-- div -->

## `xStats.prototype.mem`

<!-- div -->


<!-- div -->

### `xStats.prototype.mem`
<a id="xstatsprototypemem" href="#xstatsprototypemem">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L684 "View in source") [&#x24C9;][1]

*(Object)*: The "memory" display mode options object.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.prototype.mem.bg`
<a id="xstats-membg" href="#xstats-membg">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L692 "View in source") [&#x24C9;][1]

*(String)*: The background color of the chart for the display mode.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.prototype.mem.fg`
<a id="xstats-memfg" href="#xstats-memfg">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L700 "View in source") [&#x24C9;][1]

*(String)*: The foreground color of the chart for the display mode.

* * *

<!-- /div -->


<!-- /div -->


<!-- div -->

## `xStats.prototype.ms`

<!-- div -->


<!-- div -->

### `xStats.prototype.ms`
<a id="xstatsprototypems" href="#xstatsprototypems">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L659 "View in source") [&#x24C9;][1]

*(Object)*: The "millisecond" display mode options object.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.prototype.ms.bg`
<a id="xstats-msbg" href="#xstats-msbg">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L667 "View in source") [&#x24C9;][1]

*(String)*: The background color of the chart for the display mode.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `xStats.prototype.ms.fg`
<a id="xstats-msfg" href="#xstats-msfg">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L675 "View in source") [&#x24C9;][1]

*(String)*: The foreground color of the chart for the display mode.

* * *

<!-- /div -->


<!-- /div -->


<!-- div -->

## `xStats.Event`

<!-- div -->


<!-- div -->

### `xStats.Event(type)`
<a id="xstatseventtype" href="#xstatseventtype">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L52 "View in source") [&#x24C9;][1]

The Event constructor.

#### Arguments
1. `type` *(String|Object)*: The event type.

* * *

<!-- /div -->


<!-- /div -->


<!-- div -->

## `xStats.Event.prototype`

<!-- div -->


<!-- div -->

### `xStats.Event.prototype.type`
<a id="xstatseventprototypetype" href="#xstatseventprototypetype">#</a> [&#x24C8;](https://github.com/bestiejs/xstats.js/blob/master/xstats.js#L724 "View in source") [&#x24C9;][1]

*(String)*: The event type.

* * *

<!-- /div -->


<!-- /div -->


<!-- /div -->


  [1]: #readme "Jump back to the TOC."