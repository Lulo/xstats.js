/*!
 * BunnyMark
 * Created by Iain Lobb <http://blog.iainlobb.com/search?q=bunny>
 * Ported to JS by Seb Lee-Delisle <http://sebleedelisle.com/2011/02/html5-canvas-sprite-optimisation/>
 * Modified by John-David Dalton <http://allyoucanleet.com/>
 */
(function(window, document) {

  /** fill style object of the background image */
  var fillStyle,

  /** background image object (repeat 0px 0px) */
  bgImg = new Image,

  /** bunny image object */
  bunnyImg = new Image,

  /** canvas element */
  canvas = document.createElement('canvas'),

  /** canvas context object */
  ctx = ('getContext' in canvas) && canvas.getContext('2d'),

  /** affect of simulated gravity */
  gravity = 3,

  /** right bounding box coordinate */
  maxX = 614,

  /** left bounding box coordinate */
  minX = 0,

  /** bottom bounding box coordinate */
  maxY = 443,

  /** top bounding box coordinate */
  minY = 0,

  /** shortcut for Math.random */
  random = Math.random,

  /** height of the canvas element */
  height = 480,

  /** width of the canvas element */
  width = 640;

  /*--------------------------------------------------------------------------*/

  /**
   * Adds bunnies hopping through the forest.
   * @private
   * @param {Number} number The number of bunnies to add.
   */
  function addBunnies(number) {
    if (typeof number != 'number') {
      number = 500;
    }
    while (number--) {
      Bunny.bunnies.push(new Bunny);
    }
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
   * Renders a single frame of animation.
   * @private
   */
  function render() {
    var bunny,
        bunnies = Bunny.bunnies,
        i = -1;

    ctx.fillStyle = fillStyle;
    ctx.fillRect(0, 0, width, height);

    while (bunny = bunnies[++i]) {
      bunny.x += bunny.speedX;
      bunny.y += bunny.speedY;
      bunny.speedY += gravity;

      if (bunny.x > maxX) {
        bunny.speedX *= -1;
        bunny.x = maxX;
      }
      else if (bunny.x < minX) {
        bunny.speedX *= -1;
        bunny.x = minX;
      }
      if (bunny.y > maxY) {
        bunny.speedY *= -.8;
        bunny.y = maxY;
        if (random() > .5){
          bunny.speedY -= random() * 12;
        }
      }
      else if (bunny.y < minY) {
        bunny.speedY = 0;
        bunny.y = minY;
      }
      ctx.drawImage(bunnyImg, bunny.x, bunny.y);
    }
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Bunny constructor.
   * @constructor
   */
  function Bunny() {
    this.speedX = random() * 10;
    this.speedY = (random() * 10) - 5;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * An array of Bunny instances.
   * @static
   * @member Bunny
   * @type Array
   */
  Bunny.bunnies = [];

  Bunny.prototype = {

    /**
     * The `x` coordinate of the bunny.
     * @member Bunny
     * @type Number
     */
    'x': 0,

    /**
     * The `y` coordinate of the bunny.
     * @member Bunny
     * @type Number
     */
    'y': 0,

    /**
     * The horizontal speed of the bunny.
     * @member Bunny
     * @type Number
     */
    'speedX': 0,

    /**
     * The vertical speed of the bunny.
     * @member Bunny
     * @type Number
     */
    'speedY': 0
  };

  /*--------------------------------------------------------------------------*/

  // expose
  window.Bunny = Bunny;

  // setup canvas
  if (ctx) {
    bgImg.src = 'data:image/gif;base64,' +
      'R0lGODlhIAAgAJEAADvWYkWlXcnvQAAAACH5BAAAAAAALAAAAAAgACAAAALxjAN5gIIgGHsxiWiSurq7' +
      'wCEZxDGXY2Fjoz5Kcyzbm2an9YJOaz0uO6lMJCaMJjQc0QzGTVOlcUFyuVgJ81FMYDZtSEkU2cY6YIy0' +
      '4F1iwM85JfmWpEKqChkSvrXepA9k0hEXlMG2oaRn9RS3duiB01c4FcVHsZK3JTP1lySos0V5VNHIGLbZ' +
      'kEmBIwNStlI2OVL3+seGUsEVW5K6iYMU6DQUNLQDKQlo6PNlo4cCISIsCSVFZNSEjJk2K4ZKkTXXqirB' +
      '1HiLyySIu+nsGSsbdE7G3HtSaDuODD+KD0iUGaesxRpoPCI1ImcvkzU/HPQUAAA7';

    bunnyImg.src = 'data:image/gif;base64,' +
      'R0lGODlhGgAlAKIFAOumBYVeA////wAAALiDBPT29gAAAAAAACH5BAEAAAUALAAAAAAaACUAAAPCWLrT' +
      'vcU9SCMBGAw1Mt4VQwikxo0lGFqkYLLperbvgLpqaLcEuMcy24hAbBCHr5XwyGQmdc0o8VlZSo9UytJa' +
      'nOaqR27PK7NcnV9tU4KuOqSkqMYRCdgDcIHU07jbz4AbEn+AYXRahBceTGkQA4QALSUARWWPeJGSJZVB' +
      'f5malD2Wnpqbop2YpS6cSqSloY0MrqCsOpC0tVWJHqG5iHiFsRyJfonCdcDFd76OfxKDeMeXsdOjAdR2' +
      '0tmt19bY3ZbSaQkAOw==';

    addListener(window, 'load', function() {
      var body = document.body,
          button = document.createElement('button'),
          callback = function() { render(); reqFrame(callback); },
          reqFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame;

      // append canvas
      canvas.id = 'bunnymark';
      canvas.width = width
      canvas.height = height;
      body.appendChild(canvas);

      // append button below canvas
      button.innerHTML = 'Add Bunnies!';
      body.insertBefore(button, canvas.nextSibling);
      addListener(button, 'click', addBunnies);

      // cache fillStyle and load bunnies
      fillStyle = ctx.createPattern(bgImg, 'repeat');
      addBunnies(50);

      // start animating
      if (reqFrame) {
        reqFrame(callback);
      } else {
        setInterval(render, 1e3/60);
      }
    });
  }
}(this, this.document));