# xStats.js
#### Cross-browser Javascript Performance Monitor ####

xStats provides simple charts to help monitor your code performance.

* **FPS** Frames rendered in the last second. The higher the number the better.
* **MS** Milliseconds needed to render a frame. The lower the number the better.
* **MEM** Percentage of memory allocated. Make sure it doesn't keep incrementing. (Webkit-based browsers only)

## Screenshots

![xStats](/jdalton/xstats.js/raw/master/xstats.png)

## Documentation

The documentation for xStats.js can be viewed here: <[/docs/xstats.md](/jdalton/xstats.js/blob/master/docs/xstats.md#readme)>

## Usage

    var stats = new Stats;
    document.body.appendChild(stats.element);

## Enable MEM

* **Chrome**
  * Linux: `/opt/google/chrome/google-chrome --enable-memory-info`
  * Windows: `"C:\Program Files\Google\Chrome\Application\chrome.exe" --enable-memory-info`
  * MacOS: `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --enable-memory-info`

* **Safari**
  * MacOS: Open `~/Library/Preferences/com.apple.Safari.plist` file for editing, and 
    check `WebKitMemoryInfoEnabled` *([screenshot](http://mrdoob.github.com/stats.js/assets/safari_enablemem.png))*
