<?php

  // cleanup requested filepath
  $_GET["f"] = isset($_GET["f"]) ? $_GET["f"] : "xstats";
  $_GET["f"] = preg_replace("#(\.*[\/])+#", "", $_GET["f"]);
  $_GET["f"] = $_GET["f"] . (preg_match("/\.[a-z]+$/", $_GET["f"]) ? "" : ".js");

  // output filename
  $_GET["o"] = isset($_GET["o"]) ? $_GET["o"] : basename($_GET["f"]);

  /*--------------------------------------------------------------------------*/

  require("../vendor/docdown/docdown.php");

  // generate Markdown
  $markdown = docdown(array(
    "path"  => "../" . $_GET["f"],
    "title" => "xStats.js API documentation",
    "url"   => "https://github.com/jdalton/xstats.js/blob/master/xstats.js"
  ));

  // save to a .md file
  file_put_contents($_GET["o"] . ".md", $markdown);

  // print
  header("Content-Type: text/plain;charset=utf-8");
  echo $markdown . PHP_EOL;

?>