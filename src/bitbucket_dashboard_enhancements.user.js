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
        let prSection;
        for (let s = 0; s < sections.length; s++) {
            const section = sections[s];

            console.log('section.textContent', section.textContent);

            if (!section.textContent) {
                // ignore empty elements
            } else if (section.textContent.startsWith('Recent repo')) {
                // remove the repository section
                section.style = 'display: none';
            } else if (section.textContent.startsWith('Jira Software issues')) {
                // remove the jira section
                section.style = 'display: none';
            } else if (section.textContent.startsWith('Pull requests to review')) {
                // always expand PR list
                const buttonElements = section.getElementsByTagName('button');
                const lastButton = buttonElements[buttonElements.length - 1];
                if (lastButton.textContent.includes('Show')) {
                    lastButton.click();
                }

                prSection = section;
            } else if (section.textContent.startsWith('Your')) {
                // highlight ready to merge
                const prRows = section.getElementsByTagName('tbody')[0].children;
                for (let i = 0; i < prRows.length; i++) {
                    const row = prRows[i];
                    const buildStatus = row.children[3].firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.getAttribute('aria-label');
                    const approvalStatus = row.children[2].firstElementChild.firstElementChild.firstElementChild.firstElementChild.children.length > 1;
                    console.log('buildStatus', buildStatus);
                    if (buildStatus === '1 of 1 passed' && approvalStatus) {
                        row.style = 'background: blue';
                    } else if (buildStatus === '1 of 1 failed') {
                        row.style = 'background: red';
                    }
                }
            } else if (section.textContent.startsWith('Pull requests')) {
                // ignore
            } else {
                // unknown state, throw and retry
                console.log('text', section.textContent);
                throw 'unknown state';
            }
        }

        if (prSection) {
            // move PRs to the bottom, do it last so it doesnt disrupt the flow
            prSection.parentElement.append(prSection);
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

    setTimeout(check, 2000);
})();
