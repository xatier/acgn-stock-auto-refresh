// ==UserScript==
// @name         acgn stock auto refresh
// @namespace    https://github.com/xatier/acgn-stock-auto-refresh
// @version      0.2
// @description  get my 1000 salary everyday!
// @author       @xatier
// @match        https://acgn-stock.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 5 min
    var numMinutes = 5*60;
    setTimeout (function() {
        window.top.document.location.replace(window.top.document.location.href);
    }, numMinutes*1000);

    // clear ads
    setTimeout (function() {
        $('body > div.fixed-bottom > div > div.snackbar-container').remove();
    }, 3000);
})();


