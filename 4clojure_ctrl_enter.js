// ==UserScript==
// @name        4clojure_ctrl_enter
// @namespace   peter.hozak.info
// @include     http://www.4clojure.com/*
// @version     1
// @grant       none
// ==/UserScript==

document.onkeyup = function(e) {
  if (e.ctrlKey && e.keyCode == 13) { // Ctrl+Enter
    document.getElementById("run-button").click();
  }
};