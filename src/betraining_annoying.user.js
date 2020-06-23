// ==UserScript==
// @name         betraining.com Enhancements
// @namespace    https://github.com/Kjuib/userScripts/raw/master/src/betraining_annoying.user.js
// @version      0.1
// @description  make training less annoying
// @author       heber.billings@gmail.com
// @match        https://portal.betraining.com/scorm*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const questions = [
        {
            text: ['Impactful Communication - Setting Proper Expectations', 'How could this issue', 'have been avoided?'],
            answer: 'If expectations were communicated better'
        },
        {
            text: ['Impactful Communication - Setting Proper Expectations', 'When should expectations be made clear?'],
            answer: 'As soon as possible'
        },
        {
            text: ['Impactful Communication - Setting Proper Expectations', 'Who should you set expectations with?'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Setting Proper Expectations', 'What should you do once you set expectations with someone else?'],
            answer: 'Ensure you understand their expectations of you'
        },
        {
            text: ['Impactful Communication - Setting Proper Expectations', 'Which of the following are good expectations to get alignment on?'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Setting Proper Expectations', 'What happens when you don'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Communication Rules', 'What went wrong here?'],
            answer: 'Darren and leslie didnt establish any communication rules.'
        },
        {
            text: ['Impactful Communication - Communication Rules', 'Who should you set up communication rules with?'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Communication Rules', 'Which communication channel is best for back and forth discussion?'],
            answer: 'Phone Call'
        },
        {
            text: ['Impactful Communication - Communication Rules', 'Why is it important to establish communication rules?'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Communication Rules', 'Which communication channel would LIKELY be best for emergencies?'],
            answer: 'Phone Call'
        },
        {
            text: ['Impactful Communication - Communication Rules', 'When should communication rules be established'],
            answer: 'Right away'
        },

        {
            text: ['Paper files with sensitive data are only to be kept for the immediate business need. If files are needed'],
            answer: 'True'
        },
        {
            text: ['To prevent unauthorized use to personal computers (PC), log-off your PC any time you to walk away'],
            answer: 'True'
        },
        {
            text: ['Departmental policies and procedures, including manuals, manual codes,'],
            answer: '7 years'
        },
        {
            text: ['I certify that I have received, read, and fully understand the'],
            answer: 'I agree.'
        },
        {
            text: ['CMS reserves the right to monitor the use of all such files, equipment, and communicati'],
            answer: 'true'
        },
        {
            text: ['Employees must use extreme caution when opening e-mail attachments received from unknown senders, which may contain viruses, e-mail bombs, or Trojan horse code.'],
            answer: 'true'
        },
        {
            text: ['Employees may not speak on behalf of the company, unless permission is specifically gr'],
            answer: 'true'
        },
        {
            text: ['Money Laundering is the criminal practice of f'],
            answer: 'true'
        },
        {
            text: ['Adequate due diligence on new and existing customers is a key pa'],
            answer: 'All of the above'
        },
        {
            text: ['CMS is required by law to establish an ongoing employee-training program so as to ensure its staff members are adequately trained in KYC procedures.'],
            answer: 'true'
        },
        {
            text: ['Unfair, deceptive, or abusive acts and practices ("UDAAP"'],
            answer: 'All of the Above'
        },
        {
            text: ['The Dodd-Frank Act makes it unlawful for any service provider to engage'],
            answer: 'true'
        },
        {
            text: ['Consumer complaints received through online or'],
            answer: 'All of the Above'
        },
        {
            text: ['Risk assessments are designed to identify and assess the overall risks to CMS including s'],
            answer: 'true'
        },
        {
            text: ['Risks to CMS include:'],
            answer: 'All of the Above'
        },
        {
            text: ['What are CMS Enhanced Due Diligence categories?'],
            answer: 'Direct Sales, travel services, vehicle service'
        },
        {
            text: ['Risk assessments are designed to identify and assess the overall risks to CMS including strategic, operational, fraud, credit, compliance, legal and reputation risk.'],
            answer: 'true'
        }
    ];

    function postMessage(text) {
        let box = document.body.querySelector('.betrainingIsDumb');
        if (!box) {
            const style = [
                'position: absolute',
                'top: 5px',
                'left: 5px',
                'width: 200px',
                'background: lightblue',
                'padding: 5px',
                'border-radius: 5px',
                'border: solid 2px black'
            ]
            box = document.createElement('div');
            box.classList.add('betrainingIsDumb');
            box.style = style.join(';');

            document.body.appendChild(box);
        }

        box.innerHTML = text;
    }

    function contains(text) {
        return text.reduce((acc, current) => {
            if (!acc) {
                return acc;
            }

            try {
                return (
                    document.body.innerHTML.includes(current) ||
                    document.querySelector('iframe').contentWindow.document.body.innerHTML.includes(current) ||
                    document.querySelector('iframe').contentWindow.document.querySelector('frame').contentWindow.document.body.innerHTML.includes(current)
                )
            } catch (e) {
                return false;
            }
        }, true);
    }

    function closeDumbDialogs() {
        const closeButton1 = document.querySelector('iframe').contentWindow.document.body.querySelector('[id*="Dialog"]:not([style*="none"]) [id*="DialogCloseButton"]');
        if (closeButton1) {
            closeButton1.click();
        }
    }

    function clickNext() {
        const nextButton = document.querySelector('iframe').contentWindow.document.querySelector('frame').contentWindow.document.body.querySelector('.page_nav_inner input[value="Next"]');
        if (nextButton) {
            nextButton.click();
        }
    }

    function check() {
        let found = false;
        questions.forEach((item) => {
            if (contains(item.text)) {
                postMessage(`Answer:<br />${item.answer}`);
                found = true;
            }

            closeDumbDialogs()
            clickNext();
        });

        if (!found) {
            postMessage('');
        }
    }

    setInterval(check, 500);
})();
