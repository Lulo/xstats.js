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


<!-- /div -->


<!-- div -->


<!-- div -->

## `xStats`

<!-- div -->

### <a id="xStats" href="" title="View in source">`xStats([options={}])`</a>
xStats constructor.
[&#9650;][1]

#### Arguments
1. `[options={}]` *(Object)*: Options object.

#### Example
~~~ js
// basic usage
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
### <a id="xStats" href="" title="View in source">`xStats([options={}])`</a>
xStats constructor.
[&#9650;][1]

<!-- div -->

### <a id="xStats.subclasses" href="https://github.com/jdalton/xstats.js/blob/master/xstats.js#L397" title="View in source">`xStats.subclasses`</a>
*(Array)*: An array of xStat instances.
[&#9650;][1]

<!-- /div -->


<!-- /div -->


<!-- div -->

## `xStats.prototype`
### <a id="xStats" href="" title="View in source">`xStats([options={}])`</a>
xStats constructor.
[&#9650;][1]

<!-- div -->

### <a id="xStats:height" href="https://github.com/jdalton/xstats.js/blob/master/xstats.js#L406" title="View in source">`xStats#height`</a>
*(Number)*: The height of the chart *(px)*.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:locked" href="https://github.com/jdalton/xstats.js/blob/master/xstats.js#L427" title="View in source">`xStats#locked`</a>
*(Boolean)*: A flag to indicate if the chart is locked at its current display mode.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:mode" href="https://github.com/jdalton/xstats.js/blob/master/xstats.js#L434" title="View in source">`xStats#mode`</a>
*(String)*: The charts current display mode *(fps, ms, mem)*.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:padding" href="https://github.com/jdalton/xstats.js/blob/master/xstats.js#L420" title="View in source">`xStats#padding`</a>
*(Number)*: The inner padding of the chart that doesn't affect dimensions *(px)*.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:width" href="https://github.com/jdalton/xstats.js/blob/master/xstats.js#L413" title="View in source">`xStats#width`</a>
*(Number)*: The width of the chart *(px)*.
[&#9650;][1]

<!-- /div -->


<!-- /div -->


<!-- div -->

## `fps`

<!-- div -->

### <a id="xStats:fps" href="" title="View in source">`fps`</a>
*(Object)*: The "frames per second" display mode options object.
[&#9650;][1]

<!-- /div -->


<!-- div -->

## `fps`
### <a id="xStats:fps" href="" title="View in source">`fps`</a>
*(Object)*: The "frames per second" display mode options object.
[&#9650;][1]

<!-- div -->

### <a id="xStats:fps.bg" href="https://github.com/jdalton/xstats.js/blob/master/xstats.js#L448" title="View in source">`xStats#fps.bg`</a>
*(String)*: The background color of the chart for the display mode.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:fps.fg" href="https://github.com/jdalton/xstats.js/blob/master/xstats.js#L455" title="View in source">`xStats#fps.fg`</a>
*(String)*: The foreground color of the chart for the display mode.
[&#9650;][1]

<!-- /div -->


<!-- /div -->


<!-- div -->

## `mem`

<!-- div -->

### <a id="xStats:mem" href="" title="View in source">`mem`</a>
*(Object)*: The "memory" display mode options object.
[&#9650;][1]

<!-- /div -->


<!-- div -->

## `mem`
### <a id="xStats:mem" href="" title="View in source">`mem`</a>
*(Object)*: The "memory" display mode options object.
[&#9650;][1]

<!-- div -->

### <a id="xStats:mem.bg" href="https://github.com/jdalton/xstats.js/blob/master/xstats.js#L492" title="View in source">`xStats#mem.bg`</a>
*(String)*: The background color of the chart for the display mode.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:mem.fg" href="https://github.com/jdalton/xstats.js/blob/master/xstats.js#L499" title="View in source">`xStats#mem.fg`</a>
*(String)*: The foreground color of the chart for the display mode.
[&#9650;][1]

<!-- /div -->


<!-- /div -->


<!-- div -->

## `ms`

<!-- div -->

### <a id="xStats:ms" href="" title="View in source">`ms`</a>
*(Object)*: The "millisecond" display mode options object.
[&#9650;][1]

<!-- /div -->


<!-- div -->

## `ms`
### <a id="xStats:ms" href="" title="View in source">`ms`</a>
*(Object)*: The "millisecond" display mode options object.
[&#9650;][1]

<!-- div -->

### <a id="xStats:ms.bg" href="https://github.com/jdalton/xstats.js/blob/master/xstats.js#L470" title="View in source">`xStats#ms.bg`</a>
*(String)*: The background color of the chart for the display mode.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="xStats:ms.fg" href="https://github.com/jdalton/xstats.js/blob/master/xstats.js#L477" title="View in source">`xStats#ms.fg`</a>
*(String)*: The foreground color of the chart for the display mode.
[&#9650;][1]

<!-- /div -->


<!-- /div -->


<!-- /div -->


  [1]: #readme "Jump back to the TOC."