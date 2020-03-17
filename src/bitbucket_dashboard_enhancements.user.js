// ==UserScript==
// @name         Bitbucket Dashboard Enhancements
// @namespace    https://github.com/Kjuib/userScripts/raw/master/src/bitbucket_dashboard_enhancements.user.js
// @version      0.1
// @description  Fix the buttons so they are always on the screen. You don't need to scroll to top to approve a pull request.
// @author       heber.billings@gmail.com
// @match        https://bitbucket.org/dashboard/overview
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function fixSections(sections) {
        const prSection = sections[2];

        // always expand PR list
        const buttonElements = prSection.getElementsByTagName('button');
        const lastButton = buttonElements[buttonElements.length - 1];
        if (lastButton.textContent.includes('Show')) {
            lastButton.click();
        }

        // move your PRs to the top (by moving others to bottom)
        prSection.parentElement.append(prSection);

        // remove the repository section
        sections[0].style = 'display: none';

        // remove the jira section
        sections[3].style = 'display: none';

        // highlight ready to merge
        const prRows = sections[2].getElementsByTagName('tbody')[0].children;
        for (let i = 0; i < prRows.length; i++) {
            const row = prRows[i];
            const buildStatus = row.children[3].firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.getAttribute('aria-label');
            console.log('buildStatus', buildStatus);
            if (buildStatus === '1 of 1 passed') {
                row.style = 'background: blue';
            }
        }
    }

    function check() {
        console.log('checking...');
        const hasSection = document.getElementsByTagName('section');
        if (hasSection.length > 0) {
            try {
                const sections = document.getElementsByTagName('section')[0].parentElement.children;
                fixSections(sections);
            } catch(e) {
                console.error('UserScript Error', e);
                setTimeout(check, 500);
            }
        } else {
            setTimeout(check, 500);
        }
    }

    setTimeout(check, 1000);
})();
