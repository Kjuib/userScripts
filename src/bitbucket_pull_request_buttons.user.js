// ==UserScript==
// @name         Bitbucket pull request buttons
// @namespace    https://github.com/Kjuib/userScripts/raw/master/src/bitbucket_pull_request_buttons.user.js
// @version      0.1
// @description  Fix the buttons so they are always on the screen. You don't need to scroll to top to approve a pull request.
// @author       heber.billings@gmail.com
// @match        https://bitbucket.org/*/pull-requests/*
// ==/UserScript==

(function() {
    'use strict';

    let node = document.getElementById('pullrequest-actions');
    if (node) {
        node.style = 'position: fixed; top: 5px; right: 5px; padding: 10px; background: white; border: solid 1px grey; border-radius: 5px; z-index: 10;';
    }
})();
