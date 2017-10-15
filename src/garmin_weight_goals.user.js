// ==UserScript==
// @name         Garmin Weight Goals
// @namespace    https://github.com/Kjuib/userScripts/raw/master/src/garmin_weight_goals.user.js
// @version      0.1
// @description  Show how much you have left to lose to meet your weight goals on the Garmin dashboards
// @author       heber.billings@gmail.com
// @match        https://connect.garmin.com/modern
// @match        https://connect.garmin.com/modern/*
// ==/UserScript==

(function () {
    'use strict';

    const CLASS_DONE = 'augmented404';
    const START_DATE = 1505628000000;

    let startData;

    let createDataBlock = (currentWeight, goalWeight, top, left) => {
        let toGo = Math.round((currentWeight - goalWeight) * 100) / 100;
        let gone = Math.round((startData.weight - currentWeight) * 100) / 100;
        let element = document.createElement('div');
        element.innerHTML = `<div style="margin-top: -10px;">(${toGo} lbs to go)</div><div style="margin-top: -10px;">(${gone} lbs gone)</div>`;
        element.style = `position: absolute; top: ${top}; left: ${left}; font-size: .7rem;`;

        return element;
    };

    let updateWidget = (widgetBits) => {
        let currentWeight = parseFloat(widgetBits[0].innerText.split(' ')[0]);
        let goalWeight = parseFloat(widgetBits[1].innerText.split(' ')[0]);

        widgetBits[1].style = 'position: relative;';
        widgetBits[1].appendChild(createDataBlock(currentWeight, goalWeight, '5px', '65px'));
    };

    let handleWidgets = (widget) => {
        let checkCount = 0;
        let checking = setInterval(function () {
            checkCount++;
            let widgetBits = widget.querySelectorAll('.data-block .data-bit');
            if ((widgetBits.length > 0 && startData) || checkCount > 50) {
                clearInterval(checking);
                updateWidget(widgetBits);
            }
        }, 100);
    };

    let updatePage = (page) => {
        let goalWeightElement = page.querySelector('input.goal-edit-input');
        let currentWeightElement = page.querySelector('input#previousWeight');
        if (!currentWeightElement || !goalWeightElement) {
            return;
        }

        let parentElement = currentWeightElement.parentElement;

        let goalWeight = parseInt(goalWeightElement.value);
        let currentWeight = parseInt(currentWeightElement.value);

        parentElement.style = 'position: relative;';
        parentElement.appendChild(createDataBlock(currentWeight, goalWeight, '100%', '0'));
    };

    let handlePage = (page) => {
        let checkCount = 0;
        let checking = setInterval(function () {
            checkCount++;
            if (startData || checkCount > 50) {
                clearInterval(checking);
                updatePage(page);
            }
        }, 100);
    };

    let checkForAugmentations = () => {
        setInterval(function () {
            let elementWidgets = document.querySelectorAll('div.widget.weight');
            if (elementWidgets.length > 0) {
                elementWidgets.forEach((widget) => {
                    if (!widget.classList.contains(CLASS_DONE)) {
                        widget.classList.add(CLASS_DONE);
                        handleWidgets(widget);
                    }
                });
            }

            let elementPage = document.querySelector('div.weight-entry-container');
            if (elementPage) {
                if (!elementPage.classList.contains(CLASS_DONE)) {
                    elementPage.classList.add(CLASS_DONE);
                    handlePage(elementPage);
                }
            }
        }, 500);
    };
    checkForAugmentations();

    let checkForData = () => {
        let checkCount = 0;
        let fetchData = setInterval(function () {
            checkCount++;
            if ($ || checkCount > 50) {
                clearInterval(fetchData);
                $.get(`https://connect.garmin.com/modern/proxy/userprofile-service/userprofile/personal-information/weightWithOutbound/filterByDay?from=${START_DATE}&until=${START_DATE}`, (response) => {
                    startData = {
                        date: new Date(response[0].date),
                        weight: response[0].weight / 453.592
                    };
                });
            }
        }, 500);
    };
    setTimeout(checkForData, 1000);
})();
