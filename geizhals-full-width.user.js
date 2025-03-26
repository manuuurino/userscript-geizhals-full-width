// ==UserScript==
// @name        Geizhals full width
// @namespace   https://github.com/manuuurino/userscript-geizhals-full-width
// @homepageURL https://github.com/manuuurino/userscript-geizhals-full-width
// @match       https://geizhals.de/*
// @match       https://geizhals.eu/*
// @match       https://geizhals.at/*
// @match       https://cenowarka.pl/*
// @match       https://skinflint.co.uk/*
// @grant       none
// @version     1.2.0
// @author      manuuurino
// @description Removes width limitations on Geizhals websites (de/eu/at), Cenowarka (pl), and Skinflint (uk) to use full browser width (capped at 1920px).
// @license     MIT
// @downloadURL https://github.com/manuuurino/userscript-geizhals-full-width/raw/main/geizhals-full-width.user.js
// @updateURL   https://github.com/manuuurino/userscript-geizhals-full-width/raw/main/geizhals-full-width.user.js
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
