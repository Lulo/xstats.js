xStats.js
========

#### Javascript Performance Monitor ####

[![Flattr this](http://api.flattr.com/button/button-compact-static-100x17.png)](http://flattr.com/thing/1993/stats-js)

This class provides a simple info box that will help you monitor your code performance.

* **FPS** Frames rendered in the last second. The higher the number the better.
* **MS** Milliseconds needed to render a frame. The lower the number the better.
* **MEM** Mbytes of memory allocated. Make sure it doesn't keep incrementing. (Webkit-based browsers only)

### Screenshots ###

![stats_js_fps.png](http://mrdoob.github.com/stats.js/assets/stats_js_fps.png)
![stats_js_ms.png](http://mrdoob.github.com/stats.js/assets/stats_js_ms.png)
![stats_js_mem.png](http://mrdoob.github.com/stats.js/assets/stats_js_mem.png)

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
  * MacOS: Open `~/Library/Preferences/com.apple.Safari.plist` file for editing, and add & set enabled a boolean preference *WebKitMemoryInfoEnabled* ([pic](http://mrdoob.github.com/stats.js/assets/safari_enablemem.png))
