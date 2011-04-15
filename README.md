# xStats.js
## Cross-browser JavaScript Performance Monitor

xStats provides simple charts to help monitor your code performance.

* **FPS** Frames rendered per second. The higher the number the better.
* **MS** Milliseconds needed to render a frame. The lower the number the better.
* **MEM** Megabytes of memory used. Make sure it doesn't keep incrementing. *(WebKit-based browsers only)*

## Screenshots

![xStats](https://github.com/jdalton/xstats.js/raw/master/xstats.png)

## Documentation

The documentation for xStats.js can be viewed here: [/docs/README.md](https://github.com/jdalton/xstats.js/blob/master/docs/README.md#readme)

## Usage

    var stats = new xStats;
    document.body.appendChild(stats.element);

## Enable MEM

* **Chrome**
  * Linux: `/opt/google/chrome/google-chrome --enable-memory-info`
  * Windows: `"C:\Program Files\Google\Chrome\Application\chrome.exe" --enable-memory-info`
  * MacOS: `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --enable-memory-info`

* **Safari**
  * MacOS: Open `~/Library/Preferences/com.apple.Safari.plist` file for editing, and
    check `WebKitMemoryInfoEnabled` *([screenshot](http://mrdoob.github.com/stats.js/assets/safari_enablemem.png))*
