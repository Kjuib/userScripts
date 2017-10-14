// ==UserScript==
// @name         Garmin Weight Goals
// @namespace    https://github.com/Kjuib/userScripts/raw/master/src/garmin_weight_goals.user.js
// @version      0.1
// @description  Show how much you have left to lose to meet your weight goals on the Garmin dashboards
// @author       heber.billings@gmail.com
// @match        https://connect.garmin.com/modern/dashboard/*
// @match        https://connect.garmin.com/modern/weight/*
// ==/UserScript==

(function() {
    'use strict';

    let nodes = document.querySelectorAll('div.widget.weight');
    if (nodes) {
        console.log('nodes', nodes);
    }
})();
