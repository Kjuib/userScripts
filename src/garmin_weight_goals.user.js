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

    let updateWidget = (widgetBits) => {
        let currentWeight = parseFloat(widgetBits[0].innerText.split(' ')[0]);
        let goalWeight = parseFloat(widgetBits[1].innerText.split(' ')[0]);
        let toGo = Math.round((currentWeight - goalWeight) * 100) / 100;
        console.log('========================================> ' + toGo);

        let e = document.createElement('span');
        e.innerHTML = `(${toGo} to go)`;
        e.style = 'margin-left: 5px; font-size: .7em;';
        widgetBits[1].appendChild(e);
    };

    let getWidget = (widget) => {
        let checkCount = 0;
        let findWidget = setInterval(function() {
            checkCount++;
            let widgetBits = widget.querySelectorAll('.data-block .data-bit');
            if (widgetBits.length > 0 || checkCount > 50) {
                clearInterval(findWidget);
                updateWidget(widgetBits);
            }
        }, 100);
    };

    let getWidgets = () => {
        let checkCount = 0;
        let findWidgets = setInterval(function() {
            checkCount++;
            let elementWidgets = document.querySelectorAll('div.widget.weight');
            if (elementWidgets.length > 0 || checkCount > 10) {
                clearInterval(findWidgets);
                elementWidgets.forEach(getWidget);
            }
        }, 500);
    };
    getWidgets();
})();
