# xStats.js
## Cross-browser JavaScript Performance Monitor

xStats provides simple charts to help monitor your code performance.

* **FPS** Frames rendered per second. The higher the number the better.
* **MS** Milliseconds needed to render a frame. The lower the number the better.
* **MEM** Megabytes of memory used. Make sure it doesn't keep incrementing. *(WebKit-based browsers only)*

## Screenshots

![xStats](https://github.com/bestiejs/xstats.js/raw/master/xstats.png)

## Documentation

The documentation for xStats.js can be viewed here: [/docs/README.md](https://github.com/bestiejs/xstats.js/blob/master/docs/README.md#readme)

For more information on the techniques and code behind xStats.js please check out [my screencast](http://allyoucanleet.com/2011/02/28/learned-from-creating-xstats-js) over what I learned creating it.

## Usage

~~~ js
var stats = new xStats;
document.body.appendChild(stats.element);
~~~

## Enable MEM

* **Chrome**
  * Linux: `/opt/google/chrome/google-chrome --enable-memory-info`
  * Windows: `"C:\Program Files\Google\Chrome\Application\chrome.exe" --enable-memory-info`
  * MacOS: `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --enable-memory-info`

* **Safari**
  * MacOS: Open `~/Library/Preferences/com.apple.Safari.plist` file for editing, and
    check `WebKitMemoryInfoEnabled` *([screenshot](http://mrdoob.github.com/stats.js/assets/safari_enablemem.png))*

## Cloning this repo

To clone this repository including all submodules, using git 1.6.5 or later:

~~~ bash
git clone --recursive https://github.com/bestiejs/xstats.js.git
cd xstats.js
~~~

For older git versions, just use:

~~~ bash
git clone https://github.com/bestiejs/xstats.js.git
cd xstats.js
git submodule update --init
~~~

Feel free to fork if you see possible improvements!