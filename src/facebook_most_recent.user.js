// ==UserScript==
// @name         Facebook force most recent
// @namespace    https://github.com/Kjuib/userScripts/raw/master/src/facebook_most_recent.user.js
// @version      0.1
// @description  Make sure the Facebook icon on the header takes you to most recent
// @author       heber.billings@gmail.com
// @match        https://www.facebook.com
// @match        https://www.facebook.com/*
// ==/UserScript==

(function() {
    'use strict';

    let nodes = document.querySelectorAll('a[href="https://www.facebook.com/?ref=logo"]');
    if (nodes) {
        nodes.forEach((node) => {
            node.setAttribute('href', 'https://www.facebook.com/?sk=h_chr');
        });
    }
})();
