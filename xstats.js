/*!
 * xStats.js
 * Copyright 2011 John-David Dalton <http://allyoucanleet.com/>
 * Based on Stats.js, copyright Ricardo Cabello <http://mrdoob.com/>
 * Available under MIT license <https://github.com/jdalton/xstats.js/raw/master/LICENSE>
 */
(function(window, document) {

  /** Detect memory object */
  var memoryNS = (memoryNS = window.webkitPerformance || window.console) && memoryNS.memory && memoryNS,

  /** Detect available memory */
  memoryTotal = memoryNS && memoryNS.memory.totalJSHeapSize,

  /** Internal cached used by various methods */
  cache = {
    'counter': 1,
    'frames': 0,
    'lastSecond': null,
    'lastTime': null,
    'data': { 'fps': [], 'ms': [], 'mem': [] }
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Adds a css class name to an element's className property.
   * @private
   * @param {Object} element The element.
   * @param {String} className The class name.
   */
  function addClass(element, className) {
    element.className += (element.className ? ' ' : '') + className;
  }

  /**
   * Registers an event listener on an element.
   * @private
   * @param {Object} element The element.
   * @param {String} eventName The name of the event to listen to.
   * @param {Function} handler The event handler.
   */
  function addListener(element, eventName, handler) {
    if (typeof element.addEventListener != 'undefined') {
      element.addEventListener(eventName, handler, false);
    } else if (element.attachEvent != 'undefined') {
      element.attachEvent('on' + eventName, handler);
    }
  }

  /**
   * Shortcut for document.createElement().
   * @private
   * @param {String} tag The tag name of the element to create.
   * @returns {Object} A new of the given tag name element.
   */
  function createElement(tagName) {
    return document.createElement(tagName);
  }

  /**
   * Creates and appends a style sheet to the document.
   * @private
   * @param {String} cssText The css text of the style sheet.
   */
  function createStyleSheet(cssText) {
    var head = document.getElementsByTagName('head')[0],
        style = createElement('style'),
        rules = document.createTextNode(cssText);

    style.type = 'text/css';
    if (typeof style.styleSheet != 'undefined') {
      style.styleSheet.cssText = rules.nodeValue;
    } else {
      style.appendChild(rules);
    }
    head.appendChild(style);
  }

  /**
   * Copies own/inherited properties of a source object to the destination object.
   * @private
   * @param {Object} destination The destination object.
   * @param {Object} [source={}] The source object.
   * @returns {Object} The destination object.
   */
  function extend(destination, source) {
    source || (source = { });
    for (var key in source) {
      destination[key] = source[key];
    }
    return destination;
  }

  /**
   * Modify a string by replacing named tokens with matching object property values.
   * @private
   * @param {String} string The string to modify.
   * @param {Object} object The template object.
   * @returns {String} The modified string.
   */
  function interpolate(string, object) {
    for (var key in object) {
      string = string.replace(RegExp('#\\{' + key + '\\}', 'g'), String(object[key]));
    }
    return string;
  }

  /**
   * Removes a css class name from an element's className property.
   * @private
   * @param {Object} element The element.
   * @param {String} className The class name.
   */
  function removeClass(element, className) {
    var cn,
        classNames = element.className.split(' '),
        filtered = [];

    while (cn = classNames.pop()) {
      if (className != cn) {
        filtered.push(cn);
      }
    }
    element.className = filtered.join(' ');
  }

  /**
   * Repeat a string a given number of times using the `Exponentiation by squaring` algorithm.
   * http://www.merlyn.demon.co.uk/js-misc0.htm#MLS
   * @private
   * @param {String} string The string to repeat.
   * @param {Number} count The number of times to repeat the string.
   * @returns {String} The repeated string.
   */
  function repeat(string, count) {
    if (count < 1) return '';
    if (count % 2) return repeat(string, count - 1) + string;
    var half = repeat(string, count / 2);
    return half + half;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates the click event handler that controls swaping modes and redrawing the display.
   * @private
   * @param {Object} me The xStats instance.
   * @returns {Function} The event handler.
   */
  function createSwapMode(me) {
    return function() {
      if (!me.locked) {
        var nodes,
            uid = me.uid,
            mode = me.mode == 'fps' ? 'ms' : me.mode == 'ms' ? (memoryNS ? 'mem' : 'fps') : 'fps',
            element = me.element,
            nodes = me.canvas.childNodes,
            data = cache.data[mode],
            entry = data[0],
            pad = me.innerWidth,
            length = pad--;

        me.mode = mode;
        setTitle(me, entry && entry.value);
        while (length--) {
          entry = data[pad - length];
          setBar(me, nodes[length], entry && entry.percent);
        }
        removeClass(element, uid + '-fps');
        removeClass(element, uid + '-ms');
        removeClass(element, uid + '-mem');
        addClass(element, uid + '-' + mode);
      }
    };
  }

  /**
   * Records a value for the given mode.
   * @private
   * @param {String} mode The mode to record.
   * @param {Mixed} value The value recorded.
   */
  function record(mode, value) {
    var data = cache.data[mode],
        percent = Math.min(100, 100 * (value / (mode == 'fps' ? 120 : mode == 'ms' ? 1e3 : memoryTotal)));

    value = Math.round(mode == 'mem' ? percent : value);
    percent = mode == 'mem' ? percent / 2 : percent;
    data.min = Math.min(data.min != null ? data.min : value, value);
    data.max = Math.max(data.max != null ? data.max : value, value);
    data.length = [data.length, data.unshift({ 'value': value, 'percent': percent })][0];
  }

  /**
   * Sets the LI element's border top width based on the given value.
   * @private
   * @param {Object} me The xStats instance.
   * @param {Object} node The LI element.
   * @param {Number} percent The bar height as a percentage.
   */
  function setBar(me, node, percent) {
    var height = me.innerHeight,
        base = (height / 6) * 5,
        portion = (base / 100) * percent,
        value = percent != null ? (base - portion).toFixed(2) : height;

    node.style.borderTopWidth = value + 'px';
  }

  /**
   * Sets a chart's title based on the given value.
   * @private
   * @param {Object} me The xStats instance.
   * @param {Number} value The value.
   */
  function setTitle(me, value) {
    var mode = me.mode,
        data = cache.data[mode];

    me.title.innerHTML = value == null ? '&nbsp;' :
      value + mode.toUpperCase() + ' (' + data.min + '-' + data.max + ')';
  }

  /**
   * Updates chart data and display of all xStats instances.
   * @private
   */
  function update() {
    var canvas,
        entry,
        me,
        mode,
        data = cache.data,
        now = new Date,
        secValue = now - cache.lastSecond,
        subclasses = xStats.subclasses,
        length = subclasses.length;

    // skip first call
    if (cache.lastTime != null) {
      // record data
      cache.frames++;
      record('ms', now - cache.lastTime);
      if (secValue > 999) {
        record('fps', 1e3 / (secValue / cache.frames));
        memoryNS && record('mem', memoryNS.memory.usedJSHeapSize);
        cache.frames = 0;
        cache.lastSecond = now;
      }
      // render instances
      while (length--) {
        me = subclasses[length];
        mode = me.mode;
        entry = data[mode][0];
        if (entry && (mode == 'ms' || !cache.frames)) {
          canvas = me.canvas;
          setTitle(me, entry.value);
          setBar(me, canvas.appendChild(canvas.firstChild), entry.percent);
        }
      }
    } else {
      cache.lastSecond = now;
    }
    cache.lastTime = now;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * xStats constructor.
   * @constructor
   * @param {Object} [options={}] Options object.
   * @example
   *
   * // basic usage
   * var stats = new xStats;
   *
   * // or using options
   * var stats = new xStats({
   *   'mode': 'ms',
   *   'height': 130,
   *   'width':200,
   *   'padding':10,
   *   'locked': false,
   *   'fps': {
   *     'bg': '#330000',
   *     'fg': '#cc6600'
   *   },
   *   'ms': {
   *     'bg': '#000033',
   *     'fg': '#3366ff'
   *   },
   *   'mem': {
   *     'bg': '#000033',
   *     'fg': '#660099'
   *   }
   * });
   *
   * // insert into document
   * document.body.appendChild(stats.element);
   */
  function xStats(options) {
    var length,
        padding,
        me = this,
        data = cache.data,
        element = createElement('div'),
        fps = extend({ }, me.fps),
        ms = extend({ }, me.ms),
        mem = extend({ }, me.mem),
        tmp = { },
        uid = 'xstats' + cache.counter++;

    // apply options
    extend(me, options || (options = { }));
    me.uid = uid;

    fps = me.fps = extend(fps, options.fps);
    ms = me.ms = extend(ms, options.ms);
    mem = me.mem = extend(mem, options.mem);

    // compute dimensions
    padding = me.padding * 2;
    length = me.innerWidth = me.width - padding;
    me.innerHeight = (tmp.miHeight = me.height - padding) - 14;

    // increase shared data if needed
    if (data.ms.length < length) {
      data.fps.length =
      data.ms.length =
      data.mem.length = length;
    }
    // create stylesheet (remember IE has a 32 stylesheet limit)
    createStyleSheet(
      interpolate(
        '.#{uid} p{margin:0 0 1px 0}' +
        '.#{uid}-fg{position:absolute}' +
        '.#{uid}-bg{opacity:.5;float:right}' +
        '.#{uid} ul{margin:0;padding:0;list-style:none;overflow:hidden;height:#{innerHeight}px}' +
        '.#{uid},.#{uid}-fg,.#{uid}-bg{width:#{width}px;height:#{height}px}' +
        '.#{uid} li{float:left;width:1px;height:100%;border-top-width:#{innerHeight}px;border-top-style:solid}' +
        '.#{uid}-mi{position:absolute;overflow:hidden;margin:#{padding}px;width:#{innerWidth}px;height:#{miHeight}px}' +
        '.#{uid}{cursor:pointer;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;font-family:Helvetica,Arial,sans-serif;font-size:.6em}', extend(tmp, me)) +
      interpolate('.#{uid}-fps{color:#{fg}}.#{uid}-fps .#{uid}-bg{background:#{bg}}.#{uid}-fps li{background:#{fg};border-color:#{bg}}', extend(tmp, fps)) +
      interpolate('.#{uid}-ms{color:#{fg}}.#{uid}-ms .#{uid}-bg{background:#{bg}}.#{uid}-ms li{background:#{fg};border-color:#{bg}}', extend(tmp, ms)) +
      interpolate('.#{uid}-mem{color:#{fg}}.#{uid}-mem .#{uid}-bg{background:#{bg}}.#{uid}-mem li{background:#{fg};border-color:#{bg}}', extend(tmp, mem)));

    // build interface
    element.className = interpolate('xstats #{uid} #{uid}-' + me.mode, me);
    element.innerHTML = interpolate('<div class=#{uid}-bg></div><div class=#{uid}-mi><p>&nbsp;</p><ul>' + repeat('<li></li>', length) + '</ul></div><div class=#{uid}-fg></div>', me);
    addListener(element, 'click', createSwapMode(me));

    // grab elements
    me.element = element;
    me.canvas = element.getElementsByTagName('ul')[0];
    me.title = element.getElementsByTagName('p')[0];

    // keep track of instances to animate
    xStats.subclasses.push(me);
  }

  /*--------------------------------------------------------------------------*/

  /**
   * An array of xStat instances.
   * @static
   * @member xStats
   * @type Array
   */
  xStats.subclasses = [];

  xStats.prototype = {

    /**
     * The height of the chart (px).
     * @member xStats
     * @type Number
     */
    'height': 48,

    /**
     * The width of the chart (px).
     * @member xStats
     * @type Number
     */
    'width': 94,

    /**
     * The inner padding of the chart that doesn't affect dimensions (px).
     * @member xStats
     * @type Number
     */
    'padding': 3,

    /**
     * A flag to indicate if the chart is locked at its current display mode.
     * @member xStats
     * @type Boolean
     */
    'locked': false,

    /**
     * The charts current display mode (fps, ms, mem).
     * @member xStats
     * @type String
     */
    'mode': 'fps',

    /**
     * The "frames per second" display mode options object.
     * @member xStats
     * @type Object
     */
    'fps': {

      /**
       * The background color of the chart for the display mode.
       * @member xStats#fps
       * @type String
       */
      'bg': '#282845',

      /**
       * The foreground color of the chart for the display mode.
       * @member xStats#fps
       * @type String
       */
      'fg': '#1affff'
    },

    /**
     * The "millisecond" display mode options object.
     * @member xStats
     * @type Object
     */
    'ms':  {

      /**
       * The background color of the chart for the display mode.
       * @member xStats#ms
       * @type String
       */
      'bg': '#284528',

      /**
       * The foreground color of the chart for the display mode.
       * @member xStats#ms
       * @type String
       */
      'fg': '#1aff1a'
    },

    /**
     * The "memory" display mode options object.
     * @member xStats
     * @type Object
     */
    'mem': {

      /**
       * The background color of the chart for the display mode.
       * @member xStats#mem
       * @type String
       */
      'bg': '#452831',

      /**
       * The foreground color of the chart for the display mode.
       * @member xStats#mem
       * @type String
       */
      'fg': '#ff1a8d'
    }
  };

  /*--------------------------------------------------------------------------*/

  // expose
  window.xStats = xStats;

  // ensure we can read memory info
  memoryNS = memoryTotal && memoryNS;

  // start recording
  (function() {
    var reqFrame = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame;

    function callback() {
      update();
      reqFrame(callback);
    }
    if (reqFrame) {
      reqFrame(callback);
    } else {
      setInterval(update, 1e3/60);
    }
  }());

}(this, this.document));