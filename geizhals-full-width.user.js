// ==UserScript==
// @name        Geizhals full width
// @namespace   Violentmonkey Scripts
// @match       https://geizhals.de/*
// @grant       none
// @version     1.0
// @author      manuuurino
// @description Removes width limitations on Geizhals.de to use full browser width
// @namespace   https://github.com/manuuurino/userscript-geizhals-full-width
// @license     MIT
// @downloadURL https://update.greasyfork.org/scripts/530922/Geizhals%20full%20width.user.js
// @updateURL https://update.greasyfork.org/scripts/530922/Geizhals%20full%20width.meta.js
// ==/UserScript==

(function () {
  "use strict";

  function removeWidthCap() {
    const style = document.createElement("style");

    style.textContent = `
      :root {
        --max-width-site: 100% !important;
      }
    `;

    document.head.appendChild(style);

    console.log("Geizhals width cap removed");
  }

  removeWidthCap();
})();
