# xStats.js
#### Javascript Performance Monitor ####

xStats provides a simple chart to help monitor your code performance.

* **FPS** Frames rendered in the last second. The higher the number the better.
* **MS** Milliseconds needed to render a frame. The lower the number the better.
* **MEM** Percentage of memory allocated. Make sure it doesn't keep incrementing. (Webkit-based browsers only)

### Screenshots ###

![xStats](/jdalton/xstats.js/raw/master/xstats.png)

### Usage ###

	var stats = new Stats;
	stats.element.style.cssText = "position:absolute;left:0;top:0";
	document.body.appendChild(stats.element);

### Enable MEM ###

* **Chrome**
  * Linux: `/opt/google/chrome/google-chrome --enable-memory-info`
  * Windows: `"C:\Program Files\Google\Chrome\Application\chrome.exe" --enable-memory-info`
  * MacOS: `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --enable-memory-info`

* **Safari** 
  * MacOS: Open `~/Library/Preferences/com.apple.Safari.plist` file for editing, and add &
    set enabled a boolean preference *WebKitMemoryInfoEnabled* ([pic](http://mrdoob.github.com/stats.js/assets/safari_enablemem.png))
