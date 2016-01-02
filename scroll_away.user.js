// ==UserScript==
// @name        Scroll Away
// @namespace   peter.hozak.info
// @description Find all unscrollable elements (position: fixed;) and make them scrollable (position: absolute;).
// @include     *
// @exclude     https://*.facebook.com/*
// @exclude     https://*.google.tld/*
// @version     0.9
// @grant       none
// ==/UserScript==

document.onreadystatechange = function scroll_away() {
  'use strict'
  if (document.readyState === 'complete') {
    // get an Array of all body elements that contain css rule position: fixed
    var fixed_elements = Array.prototype.filter.call(document.querySelectorAll('body *'), function (e) {
      return window.getComputedStyle(e).getPropertyValue('position') === 'fixed'
    })
    if (fixed_elements.length > 0) {
      console.log('Scroll Away UserScript updated following elements from fixed to absolute position:\n',
                  // using ES6 ...spread operator to preserve the clickable element objects
                  ...fixed_elements)
      fixed_elements.forEach(function (e) {
        // change style of to position: absolute, but keep the other styles
        e.style.cssText += 'position: absolute !important;'
      })
    }
  }
}
