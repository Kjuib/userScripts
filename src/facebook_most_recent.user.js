// ==UserScript==
// @name         Facebook force most recent
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make sure the Facebook icon on the header takes you to most recent
// @author       heber.billings@gmail.com
// @match        https://www.facebook.com
// @match        https://www.facebook.com/*
// ==/UserScript==

(function() {
    'use strict';

    var nodes = document.querySelectorAll('a[data-testid="blue_bar_fb_logo"]');
    var node = nodes && nodes.item(0);
    if (node) {
        node.setAttribute('href', 'https://www.facebook.com/?sk=h_chr');
    }
})();
