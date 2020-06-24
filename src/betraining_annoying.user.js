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
        // Impactful Communication - Setting Proper Expectations
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
        // Impactful Communication - Communication Rules
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
        // Impactful Communication - Keys to Successful Emails
        {
            text: ['Impactful Communication - Keys to Successful Emails', 'Ideally, what is the purpose'],
            answer: 'Allude to the desire and outcome of the email'
        },
        {
            text: ['Impactful Communication - Keys to Successful Emails', 'Where should you put a Call'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Keys to Successful Emails', 'Why might you not be getting'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Keys to Successful Emails', 'Why might people not be'],
            answer: 'Your information is not structured in a clear, concise way'
        },
        {
            text: ['Impactful Communication - Keys to Successful Emails', 'When is email not the ideal'],
            answer: 'If there will be a lot of back and forth communication'
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
            text: ['CMS reserves the right to monitor the use of all'],
            answer: 'true'
        },
        {
            text: ['Employees must use extreme caution when opening'],
            answer: 'true'
        },
        {
            text: ['Employees may not speak on behalf of the'],
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
        },
        {
            text: ['Financial services company must monitor the activities of employees to ensure they do not engage in unfair, deceptive, or abusive acts or practices with respect to consumer interact'],
            answer: 'false'
        },
        {
            text: ['A representation may be __________ if the majority of consumers in the target class do not share the consumer'],
            answer: 'Deceptive'
        },
        {
            text: ['Under Regulation Z and the Truth in Lending Act, creditors must'],
            answer: 'Clearly'
        },
        {
            text: ['The Federal Trade Commission (FTC) has the authority to protect consumers'],
            answer: 'true'
        },
        {
            text: ['Who has rulemaking authority for UDAAP?'],
            answer: 'CFPB'
        },
        {
            text: ['All of the following are required to support the standard for unfairness under UDAAP, EXCEPT'],
            answer: 'The injury was not caused on purpose'
        },
        {
            text: ['Substantial injury can include monetary harm.'],
            answer: 'true'
        },
        {
            text: ['Emotional impact may not amount to or contribute to substantial injury'],
            answer: 'false'
        },
        {
            text: ['All of the below must be present to show that an act or practice is deceptive under UDAAP, EXCEPT:'],
            answer: 'The consumer\'s interpretation of the representation, omission, act, or practice is accepted regardless of the circumstances'
        },
        {
            text: ['A representation may be deceptive even if the majority of consumers in the target class'],
            answer: 'true'
        },
        {
            text: ['The legal standards for abusive, unfair, and deceptive acts'],
            answer: 'false'
        },
        {
            text: ['What is a red flag to conduct a detailed review of a practice?'],
            answer: 'Presense of Complaints'
        },
        {
            text: ['A single substantive complaint does not warrant further review or raise serious concerns.'],
            answer: 'false'
        },
        {
            text: ['When reviewing complaints for your financial services company'],
            answer: 'Regulators'
        },
        {
            text: ['s UDAAP program provides guidelines and rules'],
            answer: 'Complaint management'
        },
        {
            text: ['disclose the costs and terms of credit'],
            answer: 'true'
        },
        {
            text: ['An unfair, deceptive, or abusive act or practice never violates other federal or state laws'],
            answer: 'false'
        },
        {
            text: ['overarching policies are administered by all of the following EXCEPT'],
            answer: 'Sectreterial pool'
        },
        {
            text: ['Financial services companies should ensure UDAAP'],
            answer: 'Annual report to investors'
        },
        {
            text: ['Types of systematic measures acting as internal controls instituted by a financial services'],
            answer: 'true'
        },
        {
            text: ['Procedures and scripts used by internal or external debt collectors is not'],
            answer: 'false'
        },
        {
            text: ['Social media communications do not have to be reviewed'],
            answer: 'false'
        },
        {
            text: ['Underwriting of credit files should accurately represent the amount of usable credit that the consumer will receive, '],
            answer: 'true'
        },
        {
            text: ['but the company does not need to monitor the activities of third-party'],
            answer: 'false'
        },
        {
            text: ['All of the following fall represent a higher-risk for UDAAP compliance EXCEPT'],
            answer: 'Loans secured by property'
        },
        {
            text: ['Financial institutions do not need to identify inherent risks related to consumer harm'],
            answer: 'false'
        },
        {
            text: ['A(n) _______ is a waiver of the consumer'],
            answer: 'Confession of judgement'
        },
        {
            text: ['A cosigner shares the responsibility for the debt with the borrower. If the borrower does not pay the debt, the cosigner is responsible for repaying the remaining balance of the debt'],
            answer: 'true'
        },
        {
            text: ['A(n) _______ is the requirement of a creditor, as a condition of granting credit, '],
            answer: 'Assignment of wages'
        }
        // {
        //     text: [''],
        //     answer: ''
        // },
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
        try {
            const closeButton1 = document.querySelector('iframe').contentWindow.document.body.querySelector('[id*="Dialog"]:not([style*="none"]) [id*="DialogCloseButton"]');
            if (closeButton1) {
                closeButton1.click();
            }
        } catch (e) {
            // ignore
        }
    }

    function clickNext() {
        try {
            const nextButton = document.querySelector('iframe').contentWindow.document.querySelector('frame').contentWindow.document.body.querySelector('.page_nav_inner input[value="Next"]');
            if (nextButton) {
                nextButton.click();
            }
        } catch (e) {
            // ignore
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
