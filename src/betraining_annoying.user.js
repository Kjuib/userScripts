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
        // Impactful Communication - Graduated Learning
        {
            text: ['Impactful Communication - Graduated Learning', 'What can happen when you try'],
            answer: 'You dont retain it all, and you have to re-train later'
        },
        {
            text: ['Impactful Communication - Graduated Learning', 'If you frequently find yourself'],
            answer: 'You are providing too much content all at once'
        },
        {
            text: ['Impactful Communication - Graduated Learning', 'implement graduated learning'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Graduated Learning', 'How do you keep yourself on track'],
            answer: 'Give each step of the process an estimated time frame'
        },
        // Impactful Communication - Effective Listening
        {
            text: ['Impactful Communication - Effective Listening', 'What is another good way'],
            answer: 'Maintain eye contact'
        },
        {
            text: ['Impactful Communication - Effective Listening', 'Is this person engaged'],
            answer: 'No'
        },
        {
            text: ['Impactful Communication - Effective Listening', 'How can Effective Listening'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Effective Listening', 'How do you ensure effective'],
            answer: 'Validate what the other person is saying'
        },
        {
            text: ['Impactful Communication - Effective Listening', 'What is the key to'],
            answer: 'Understanding what the other person is saying'
        },
        {
            text: ['Impactful Communication - Effective Listening', 'Which of the following are steps'],
            answer: 'All of these'
        },
        // Impactful Communication - Being Assertive
        {
            text: ['Impactful Communication - Being Assertive', 'Are you typically more'],
            answer: 'ANY'
        },
        {
            text: ['Impactful Communication - Being Assertive', 'What is the goal of being'],
            answer: 'To develop mutual understanding of needs'
        },
        {
            text: ['Impactful Communication - Being Assertive', 'If you are typically a passive person'],
            answer: 'Share your own needs more frequently'
        },
        {
            text: ['Impactful Communication - Being Assertive', 'What is the key to being assertive'],
            answer: 'Focus on the win-win...'
        },
        {
            text: ['Impactful Communication - Being Assertive', 'If you are typically a more aggressive'],
            answer: 'Focus more on understanding...'
        },
        // Impactful Communication - Healthy Conflict
        {
            text: ['Impactful Communication - Healthy Conflict', 'How could this interaction'],
            answer: 'He should have minimized his assumptions going in'
        },
        {
            text: ['Impactful Communication - Healthy Conflict', 'What worked well in this approach'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Healthy Conflict', 'Why is conflict actually'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Healthy Conflict', 'What is the first step'],
            answer: 'Setup a time to engage...'
        },
        {
            text: ['Impactful Communication - Healthy Conflict', 'What is the key to getting through'],
            answer: 'Listen to the other persons side and seek to understand...'
        },
        // PCI-101-CS-01: PCI Essentials for Account Data Handlers and Supervisors
        {
            text: ['Which of the following does NOT have to be protected per the PCI'],
            answer: 'The credit card type'
        },
        {
            text: ['Which of the following is an ACCEPTABLE best practice'],
            answer: 'Using an encrypted web-based point of sale terminal'
        },
        {
            text: ['Who is responsible for reporting possible violation'],
            answer: 'Everyone'
        },
        {
            text: ['Which of the following is NOT a common way in which a criminal'],
            answer: 'Randomly creating primary account numbers...'
        },
        {
            text: ['Which of the following statements is TRUE', 'PCI DSS requirements are derived from laws.'],
            answer: 'PCI DSS requirements are contractual obligations'
        },
        // P-101-PB-01: Privacy and Data Protection
        {
            text: ['What do you think the possible consequences are for failing to safeguard private data?'],
            answer: 'All of the above'
        },
        {
            text: ['Who do you think would be negatively affected if you were to accidentally release private data?'],
            answer: 'All of the above'
        },
        {
            text: ['What do you think the possible consequences are for failing to safeguard private data?'],
            answer: 'All of the above'
        },
        {
            text: ['Who do you think is responsible for protecting private data?'],
            answer: 'Everyone'
        },
        {
            text: ['Public', 'A person’s contact information (name and phone number) displayed on a company’s website.'],
            answer: 'Public'
        },
        {
            text: ['Public', 'A bank statement that can be traced back to an individual.'],
            answer: 'Nonpublic'
        },
        {
            text: ['Public', 'The product plans for an unreleased product.'],
            answer: 'Nonpublic'
        },
        {
            text: ['Public', 'A press release.'],
            answer: 'Public'
        },
        {
            text: ['Public', 'A list of dates of birth, with no other information.'],
            answer: 'Public'
        },
        {
            text: ['Public', 'A database of combined public records that can be used to identify an individual.'],
            answer: 'Nonpublic'
        },
        {
            text: ['Public', 'Health records that can be traced back to an individual.'],
            answer: 'Nonpublic'
        },
        {
            text: ['Public', 'Public information collected from a transaction with an individual, such as on an application form.'],
            answer: 'Nonpublic'
        },
        {
            text: ['Before we go any further, let´s make sure you can tell what is and is not private data.', 'Which of the following do you think is NOT private data?'],
            answer: 'A list of your friends names and addresses kept in your computer'
        },
        {
            text: ['Do you think anything special needs to be done in terms of privacy?'],
            answer: 'Yes...'
        },
        {
            text: ['Good Idea', 'A customer whose private data we hold points out that her name and date of birth are incorrect.'],
            answer: 'Bad Idea'
        },
        {
            text: ['Organizations have a responsibility to use physical and technical safeguards to protect the private data they hold.'],
            answer: 'True'
        },
        {
            text: ['Good Idea', 'A customer feels his private data is being compromised. You tell him you will help resolve the problem and let him know how to register a complaint.'],
            answer: 'Good Idea'
        },
        {
            text: ['It is ok to share private data with a third party if we stand to gain from it even though customers have opted out of information sharing.'],
            answer: 'False'
        },
        {
            text: ['A privacy notice is an optional guideline that we should strive to follow.'],
            answer: 'False'
        },
        {
            text: ['Use tiny print when creating a privacy notice and place it somewhere difficult for the customer to find.'],
            answer: 'Bad Idea'
        },
        {
            text: ['Use tiny print when creating a privacy notice and place it somewhere difficult for the customer to find.'],
            answer: 'Bad Idea'
        },
        {
            text: ['Which of the following do you think gives a customer a true "opt-in" choice?'],
            answer: '[Unchecked option]'
        },
        {
            text: ['Since accessing an email account requires a username and password, email is a secure way to send private data electronically.'],
            answer: 'False'
        },
        {
            text: ['Someone calls you and asks to change the password for their account.'],
            answer: 'Bad Idea'
        },
        {
            text: ['You receive a verified request to update a customer', 'inaccurate information and carry it out immediately.'],
            answer: 'Good Idea'
        },
        {
            text: ['secure any physical documents or media that contain private or nonpublic data before you leave your desk.'],
            answer: 'True'
        },
        {
            text: ['You minimize your applications, cover up documents, and work on something else until the visitor leaves.'],
            answer: 'Good Idea'
        },
        {
            text: ['It is ok to view the private data of friends and family so long as you do not tell them you accessed it at work.'],
            answer: 'False'
        },
        {
            text: ['You overhear a colleague discussing private data in public at a restaurant and listen in to the interesting details.'],
            answer: 'Bad Idea'
        },
        {
            text: ['to help ensure it is only used by those with a need to know and to make it easy to know what data or documents should be secured.'],
            answer: 'True'
        },
        {
            text: ['A confidentiality agreement must be in place with customers before we can share their private data with them.'],
            answer: 'False'
        },
        {
            text: ['A man calls in asking for information about his wife', 'You verify that they have the same last name and then give him the information.'],
            answer: 'Bad Idea'
        },
        {
            text: ['A customer calls in asking for her account information.', 'You first verify her identity then give her the information.'],
            answer: 'Good Idea'
        },
        {
            text: ['A customer you are assisting sees another customer walk out the door and asks if that was her friend Julia Smith.'],
            answer: 'True'
        },
        {
            text: ['Different types of data must be kept for different periods of time.', 'After that time has elapsed, the data should be destroyed.'],
            answer: 'DVDs and other media with private data should be disposed of by throwing them in the garbage'
        },
        {
            text: ['True or False? All private data we collect must be kept permanently.'],
            answer: 'False'
        },
        {
            text: ['Your medical records, held by your doctor.', 'Your credit card purchasing history, held by your bank.'],
            answer: 'Your medical records and credit card purchasing history without a way to trace them back to you.'
        },
        {
            text: ['Those with a need to know, such as those who must use the private data to complete their duties.', 'Those who are friends or family of the subject of the private data.'],
            answer: 'Both A and C are correct.'
        },
        {
            text: ['True or False? There is nothing you can do to help protect private data.'],
            answer: 'False'
        },
        {
            text: ['When private data is collected, a privacy notice should be given.', 'A privacy notice is a set of recommendations about handling private data, but not a binding contract.'],
            answer: 'A privacy notice is a set of recommendations about handling private data, but not a binding contract.'
        },
        {
            text: ['Earning and keeping the trust of customers, employees, and the generic public.', 'Complying with laws and regulations.'],
            answer: 'Preventing the release of public data.'
        },
        {
            text: ['True or False? In the U.S., only government, health, and financial records are protected by privacy laws.'],
            answer: 'False'
        },
        {
            text: ['Which of the following must be true for data to be considered private in the U.S.?'],
            answer: 'Both A and B are correct'
        },
        {
            text: ['Paper documents with private data should be stored in a locked drawer or filling cabinet.', 'Email is a secure way to transmit private data.'],
            answer: 'Paper documents with private data should be stored in a locked drawer or filling cabinet.'
        },
        {
            text: ['When a customer requests his or her private data, you must first verify their identity before disclosing it.', 'private data to his/her immediate family and close friends.'],
            answer: 'It is ok to disclose a customers private data to his/her immediate family and close friends.'
        },
        // DR-101: Data and Records Retention
        {
            text: ['Retain all documents indefinitely, you wouldn’t want to throw away something important.', 'Ask a supervisor for help when you are unsure about what to retain or delete.'],
            answer: 'Bad Idea - Retain all documents...<br />Good Idea - Ask a supervisor...<br />Bad Idea - Always maintain data...<br />Bad Idea - Destroy records...'
        },
        {
            text: ['Taking accurate notes about an issue with a customer you are dealing with.', 'Text messaging a funny but crude joke to a friend from work.'],
            answer: 'Good Idea - Taking accurate...<br />Bad Idea - Text messaging...<br />Bad Idea - Forwarding an...<br />Bad Idea - Emailing your...'
        },
        {
            text: ['The minutes taken at a board meeting.', 'An email from a disgruntled customer indicating that she may file a lawsuit.'],
            answer: 'Permanently - The minutes...<br />10 Years - An email from...<br />10 Years - Documentation...<br />Permanently - The documents...'
        },
        {
            text: ['A lunch invite from a co-worker via email.', 'A policy from the Marketing Department.'],
            answer: 'Until no... - A lunch invite...<br />10 Years - A policy from...<br />Permanently - The documents...<br />1 Year - An email from...'
        },
        {
            text: ['An accident report filed by an employee.', 'A disciplinary warning for an employee who has been off task.'],
            answer: '6 Years - An accident...<br />5 Years - A disciplinary...<br />Permanently - The termination...'
        },
        {
            text: ['An accident report filed by an employee 2 years ago.', 'A document relating to the promotion of an employee 6 years ago.'],
            answer: 'Saved - An accident...<br />Destroyed - A document...<br />Destroyed - An email regarding...'
        },
        {
            text: ['You and a co-worker have been emailing back and forth all day about various subjects, unrelated to work.'],
            answer: 'For as long as it is necessary'
        },
        {
            text: ['While discussing account information with a customer, he becomes angry and threatens to file a lawsuit against us.'],
            answer: 'Keep all documents and correspondence...'
        },
        {
            text: ['You are told about a litigation hold regarding a certain customer and situation, but it is time to clean out your email'],
            answer: 'False. A litigation hold overrides the retention schedule.'
        },
        {
            text: ['Following the data retention schedule helps prevent all of the following EXCEPT'],
            answer: 'Security breaches'
        },
        {
            text: ['You have just finished negotiations and have a signed contract from a new client.'],
            answer: '10 years'
        },
        {
            text: ['Keep things simple and follow this data retention policy: Keep everything.', 'That is the best thing for our organization.'],
            answer: 'False'
        },
        {
            text: ['Which of the following statements about documents and correspondence you create and store at work is FALSE?'],
            answer: 'They are protected by your privacy rights. Only you have access to them.'
        },
        {
            text: ['While cleaning out an old closet, you discover the annual financial records from 25 years ago.'],
            answer: 'Permanently'
        },
        {
            text: ['Only create documents that are essential to conduct business.', 'Retain data for as long as required by the data retention schedule.'],
            answer: 'If necessary, destroy data to ease the storage...'
        },
        {
            text: ['All hard copy records should be crumpled up and thrown in the garbage.', 'Electronic copies of data should be placed in a folder on your computer named'],
            answer: 'Data stored on media that cannot be erased...'
        },
        // 2020 Data Security and Retention Policy 1.2
        {
            text: ['Departmental policies and procedures, including manuals, manual codes,'],
            answer: '7 years'
        },
        // 2020 Information Security Policy 5.2.1
        {
            text: ['access privileges shall be authorized according to business need. User access to computer resources shall be provided only for legitimate business needs.'],
            answer: 'True'
        },
        {
            text: ['Cardholder data can be stored electronically, but must be done securely, for example by encryption.'],
            answer: 'True'
        },
        {
            text: ['Regardless of location, an employee of CMS must accompany visitors and non-employee guests at all times.'],
            answer: 'True'
        },
        // DI - Workplace Inclusion
        {
            text: ['The best way to become aware of differences is to know your neighbors.'],
            answer: 'False'
        },
        {
            text: ['Diversity and affirmative action mean the same thing.'],
            answer: 'False'
        },
        {
            text: ['Businesses that value diversity will likely experience all of the following'],
            answer: 'Increased employee turnover'
        },
        {
            text: ['Issues of diversity directly affect', 'Managing workplace talent'],
            answer: 'All of the above'
        },
        {
            text: ['When people feel valued', 'Believe their individual differences have been taken into account'],
            answer: 'All of the above'
        },
        {
            text: ['To build an organization that recognizes, values, and leverages human differences for a competitive advantage, employees must do'],
            answer: 'Ignore the differences in peoples assumptions'
        },
        // DI - Sexual Harassment Refresher
        {
            text: ['Perpetrators of sexual harassment can be', 'Coworkers', 'Neighbors'],
            answer: '- Coworkers<br />- Supervisors<br />- Clients'
        },
        {
            text: ['Workplace violence may include', 'Language that demeans another'],
            answer: '- Language that demeans another<br />- Stealing from a coworker<br />- Intentionally embarrassing a customer or coworker'
        },
        {
            text: ['The OCC investigates claims of sexual harassment.'],
            answer: 'False'
        },
        {
            text: ['All of the following are among factors that are used to determine whether an environment is hostile'],
            answer: 'The sex of the victim'
        },
        {
            text: ['Quid pro quo harassment can only occur between a superior and a subordinate'],
            answer: 'True'
        },
        {
            text: ['Whose responsibility is it to keep the workplace respectful', 'The bully'],
            answer: 'Everybody'
        },
        {
            text: ['Employers are responsible for', 'Having a sexual harassment policy'],
            answer: '- Having a sexual harassment policy<br />- Investigating sexual harassment claims quickly<br />- Asking the harassers to change their behavior<br />- Making complaint procedures public<br />- Treating all complaints seriously'
        },
        {
            text: ['When it comes to sexual harassment or bullying, managers are responsible for', 'Encouraging victims to speak up'],
            answer: '- Encouraging victims to speak up<br />- Reporting sexual harassment if they notice it<br />- Always acting appropriately'
        },
        {
            text: ['A company is not responsible for sexual harassment claims if it has a policy against it and provides staff training'],
            answer: 'False'
        },
        {
            text: ['If you feel you have been sexually harassed, you should attempt to resolve the issue on your own, involving human resources only as a last resort.'],
            answer: 'False'
        },
        // DI - Harassment
        {
            text: ['Reporting harassment makes your employer responsible for stopping the behavior.'],
            answer: 'True'
        },
        {
            text: ['Do you think this is an example of harassment?'],
            answer: 'No'
        },
        {
            text: ['A company is the only party that can be sued for harassment in the workplace.'],
            answer: 'False'
        },
        {
            text: ['A joke is sent to others via email that is of a sexual or violent nature can be harassing.'],
            answer: 'True'
        },
        {
            text: ['Sexual orientation is a federally protected class.'],
            answer: 'False'
        },
        {
            text: ['Calling someone names repeatedly after he or she asks you to stop can be harassment.'],
            answer: 'True'
        },
        {
            text: ['Sexual harassment can only occur between two people of the opposite sex.'],
            answer: 'False'
        },
        {
            text: ['A customer or client can perpetrate harassment.'],
            answer: 'True'
        },
        {
            text: ['Only females can claim sexual harassment.'],
            answer: 'False'
        },
        {
            text: ['It is important whether the "harasser" intended to hurt the "victim."'],
            answer: 'False'
        },
        {
            text: ['Profanity in the work place is just a part of life and should be expected.'],
            answer: 'False'
        },
        {
            text: ['The federal government protects employees who are harassed because of their'],
            answer: 'Gender'
        },
        {
            text: ['Most people belong to most of the various protected classes.'],
            answer: 'True'
        },
        {
            text: ['All of the following are key elements of harassment EXCEPT that the conduct must'],
            answer: 'Occur on work premises '
        },
        {
            text: ['Conduct may be considered sexual harassment even if the level of offense felt by the victim may seem'],
            answer: 'True'
        },
        {
            text: ['Harassment can occur in which of the following forms?', 'Verbal'],
            answer: 'All of the above'
        },
        {
            text: ['Two coworkers making religious jokes could be overheard by a third person who may become offended'],
            answer: 'True'
        },
        {
            text: ['Harassment can be committed by a', 'Any of the above'],
            answer: 'Any of the above'
        },
        {
            text: ['Workplace policies are based upon the', 'Least senior'],
            answer: 'Most sensitive'
        },
        {
            text: ['Victims of harassment can be', 'Any of the above'],
            answer: 'Any of the above'
        },
        {
            text: ['Harassment can occur between two people of the same sex'],
            answer: 'True'
        },
        {
            text: ['An employer is legally responsible for harassment, even if conduct was unintentional'],
            answer: 'True'
        },
        {
            text: ['Reporting harassment makes your employer responsible for stopping the behavior'],
            answer: 'True'
        },
        {
            text: ['Workplace behavior should be guided by the same behavior an employee exhibits during social interactions'],
            answer: 'False'
        },
        {
            text: ['Who can be held personally liable for their actions in a harassment situation'],
            answer: 'All of the above'
        },
        // DI - Defamation
        {
            text: ['How many elements must be present to qualify an act as defamation'],
            answer: 'Three'
        },
        {
            text: ['All of the following are elements of defamation EXCEPT that the statement must be'],
            answer: 'Made intentionally'
        },
        {
            text: ['If a statement is true, no matter how harmful, it is not defamation'],
            answer: 'True'
        },
        {
            text: ['Defamatory verbal statements and gestures are called'],
            answer: 'Slander'
        },
        {
            text: ['Two employees are having lunch and talking about how a colleague, Harry, plagiarized large sections'],
            answer: 'Only if the statement is false'
        },
        {
            text: ['An employee who is known to be homosexual has been absent from work frequently'],
            answer: 'Yes'
        },
        {
            text: ['If someone gets the reputation of being a whistle-blower or someone who files discrimination complaints'],
            answer: 'Get a written letter of rec...'
        },
        {
            text: ['Employers can knowingly make false statements about employees or ex-employees and be protected under qualified privilege'],
            answer: 'False'
        },
        // DI - Language
        {
            text: ['Silence occurs while you are interacting with a non-native English speaker', 'This could mean that the other'],
            answer: 'All of the above'
        },
        {
            text: ['has some offensive terms connected with its membership'],
            answer: 'Protected class'
        },
        {
            text: ['People usually make offensive comments because of all the following EXCEPT that they'],
            answer: 'Know their words will hurt another'
        },
        {
            text: ['You should know about the cultural variations in language of all your customers'],
            answer: 'False'
        },
        {
            text: ['Which of the following statements could be discriminatory', 'All sales clerks must wear pantsuits to work'],
            answer: 'An analyst can succeed...'
        },
        {
            text: ['All of the following statements are inappropriate', 'The handicapped employee is surprisingly competent'],
            answer: 'Susan Thomas has been named...'
        },
        {
            text: ['The best way to avoid inappropriate or offensive language in the workplace is to speak about others as you would want'],
            answer: 'True'
        },
        {
            text: ['All of the following are ways to eliminate discriminatory language from the workplace', 'Speaking up about inappropriate language'],
            answer: 'Ignoring the offensive language '
        },
        // General Data Protection Regulation
        {
            text: ['The GDPR applies to companies located within the EU, but not to companies and businesses located outside of the EU that offer goods'],
            answer: 'False'
        },
        {
            text: ['The GDPR requires the contract between controllers and processors to include these stipulations'],
            answer: 'All of the above'
        },
        {
            text: ['Under the BDPR, EU data subject have the rights to'],
            answer: 'All of the above'
        },
        {
            text: ['Select all that apply. Under the GDPR, a request for consent must'],
            answer: '- Be unambiguous<br />- Be easily accessible<br />- Be distinguishable from other documents<br />- Use clear and plain language<br />- Have the purpose for data processing attached'
        },
        {
            text: ['GDPR', 'stands for', 'General Data Protection Regulation'],
            answer: 'General Data Protection Regulation'
        },
        {
            text: ['The concept of privacy by design means that privacy and data protection should be considered as an addition'],
            answer: 'False'
        },
        {
            text: ['Records documenting GDPR compliance must be maintained for all processing activities involving personal data.'],
            answer: 'True'
        },
        {
            text: ['Organizations can be fined up to', 'of the worldwide annual revenue of the prior financial year or'],
            answer: '4% / €20'
        },
        {
            text: ['Examples of personal data include a subject', 'Medical information'],
            answer: '- Name<br />- Email address<br />- Medical information<br />- IP address'
        },
        {
            text: ['The GDPR applies even if the actual processing of personal data of EU data subjects does not take place in the EU'],
            answer: 'True'
        },
        {
            text: ['based financial institution processes data about individuals in the context of selling goods or services to citizens in EU countries', 'it is not required to comply with the GDPR'],
            answer: 'False'
        },
        {
            text: ['The GDPR applies to the processing of personal data by', 'Comptrollers'],
            answer: '- Controllers<br />- Processors'
        },
        {
            text: ['A controller or processor not established in the EU will be subject to the GDPR if processing'],
            answer: '- Personal data of an EU...<br />- Is related to the monitoring of...'
        },
        {
            text: ['The expansion of the territorial scope outside the EU is one of the main objectives of the GDPR'],
            answer: 'True'
        },
        {
            text: ['Covered financial institutions will have to implement processes to comply with the new GDPR'],
            answer: '72'
        },
        // HH-101 HIPAA HITECH Privacy for Business Associates
        {
            text: ['The HITECH Act amended HIPAA with stronger privacy requirements and higher penalties.'],
            answer: 'Organizations can be fined when an employee...'
        },
        {
            text: ['A Business Associate of a Covered Entity does not need to safeguard Protected Health Information unless it has been contractually agreed upon.'],
            answer: 'False'
        },
        {
            text: ['An administrator at a hospital sends a file containing information about patient co-pays in the oncology'],
            answer: 'Yes'
        },
        {
            text: ['You notice that an organization with which we share PHI is failing to protect the privacy or security of PHI'],
            answer: 'Report the issue to the Privacy Officer.'
        },
        {
            text: ['Lucas, who works in a medical billing company, realizes that owing to a spreadsheet error'],
            answer: 'Yes'
        },
        {
            text: ['A physical therapist in a nursing home notices that one of her patients is becoming significantly less flexible along the spine despite consistent stretching'],
            answer: 'No'
        },
        {
            text: ['Since no authorization is required in the previous example, does the physical therapist still need to safeguard the information'],
            answer: 'Yes'
        },
        {
            text: ['The FDA requires us to report adverse reactions to certain products such as medications. Do you think we need patient authorization to'],
            answer: 'No'
        },
        {
            text: ['A pharmaceutical company wants to pay a medical practice to send out material about a new drug to those patients who suffer from high blood pressure'],
            answer: 'Yes'
        },
        {
            text: ['Which of the following people do you think needs to see a patient', 'A doctor providing treatment'],
            answer: 'Yes'
        },
        {
            text: ['A representative from an outside billing service.'],
            answer: 'No'
        },
        {
            text: ['The in-house operator who routes calls to patients'],
            answer: 'No'
        },
        {
            text: ['A coworker is having trouble with email and decides to use a free email service to send electronic files that contain PHI'],
            answer: 'Yes'
        },
        {
            text: ['A coworker leaves for lunch with documents containing PHI scattered on his desk where others can see them'],
            answer: 'Yes'
        },
        {
            text: ['If you wish to release an individual', 'PHI in a way not allowed by HIPAA, what do you think you must obtain'],
            answer: 'A signed Authorization Form.'
        },
        {
            text: ['Lee works for a Business Associate that does medical billing', 'A patient has paid for medical treatment out of pocket and has requested that the information related to that treatment not be shared'],
            answer: 'Yes'
        },
        {
            text: ['A father demands a copy of the medical record of his sixteen-year-old daughter as provided by HIPAA. Her physician knows that the record reflects a pre-marital pregnancy that her father is unaware'],
            answer: 'Yes'
        },
        {
            text: ['You work at a health insurance company', 'A customer asks you to call her office rather than her home because she has been threatened by her husband'],
            answer: 'Yes'
        },
        {
            text: ['You work at a pediatrician', 'mother asks you to send all mailings in closed envelopes rather than on post cards'],
            answer: 'Yes, no questions asked'
        },
        {
            text: ['Which of the following is true about HIPAA'],
            answer: 'All of the above'
        },
        {
            text: ['Protected health information (PHI) only refers to written documents inside an individual'],
            answer: 'False'
        },
        {
            text: ['Where do you think instructions for filing a complaint should be placed'],
            answer: 'A Privacy Notice'
        },
        {
            text: ['The HITECH Act was enacted to encourage the adoption of Electronic Health Records'],
            answer: 'True'
        },
        {
            text: ['An e-mail containing PHI that is sent in an encrypted format, but is not stored in an encrypted format is considered "secure" under the HITECH Act'],
            answer: 'False'
        },
        {
            text: ['Which of the following entities must provide a Privacy Notice', 'Business Associates'],
            answer: 'Both A and C'
        },
        {
            text: ['In order to simplify things, a colleague suggests that we require anyone who uses our services to waive all rights under HIPAA by signing a broad authorization to use their PHI in any way necessary'],
            answer: 'No'
        },
        {
            text: ['A privacy breach occurs when there has been unauthorized internal or external access to PHI', 'There are no exceptions'],
            answer: 'False'
        },
        {
            text: ['If you become aware of a small privacy breach, there is no need to bother your supervisor or the Privacy Officer with the information'],
            answer: 'False'
        },
        {
            text: ['Which of the following statements is FALSE regarding the actions that must be taken if there is a privacy breach affecting over 500 individuals in a single state'],
            answer: '?'
        },
        {
            text: ['When is a valid authorization required', 'When releasing PHI to an employer from a pre-employment screening'],
            answer: 'When releasing PHI to an employer from a pre-employment screening'
        },
        {
            text: ['A signed acknowledgement of receipt of a Privacy Notice is NOT the same as an authorization'],
            answer: 'True'
        },
        {
            text: ['A valid authorization must contain which of the following', 'A specific description of the PHI to be used or disclosed'],
            answer: '?'
        },
        {
            text: ['A representative of a government agency asks to see an individual', 'You are not sure whether the disclosure would be proper under HIPAA'],
            answer: 'Ask the Privacy Officer before releasing the necessary information.'
        },
        {
            text: ['When an individual files a complaint, our policy allows you to respond in which of the following ways'],
            answer: 'Refraining from taking intimidating or retaliatory actions.'
        },
        {
            text: ['An individual asks to see her medical record', 'She then asks to have an error in it corrected', 'How much time do we have in order to make the correction'],
            answer: '60 days'
        },
        {
            text: ['All of the following are PHI EXCEPT', 'A personal letter your best friend writes to'],
            answer: 'A personal letter your best friend writes to you in which she mentions she has been diagnosed with asthma.'
        },
        {
            text: ['A Privacy Notice is not the same as an authorization', 'When an individual is given a Privacy Notice, it does NOT mean that his or her PHI can be released.'],
            answer: 'True'
        },
        {
            text: ['When engaging in TPO (Treatment, Payment, and Operations), a Covered Entity MUST have individual authorization in order to use PHI.'],
            answer: 'False'
        },
        {
            text: ['Which of the following does HIPAA require us to do', 'Safeguard Protected Health Information'],
            answer: 'Both A and C'
        },
        {
            text: ['To be individually identifiable, health information must do which of the following'],
            answer: 'Both A and B'
        },
        // 2020 Employee Policies
        // {
        //     text: [''],
        //     answer: ''
        // },
        // ??
        {
            text: ['Paper files with sensitive data are only to be kept for the immediate business need. If files are needed'],
            answer: 'True'
        },
        {
            text: ['To prevent unauthorized use to personal computers (PC), log-off your PC any time you to walk away'],
            answer: 'True'
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
            answer: 'Sectretarial pool'
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
        },
        // FSC - BSA Awareness and Protection
        {
            text: ['The primary difference between money laundering and terrorist financing is that the intent of money laundering is to hide the ________ of funds, whereas terrorist financing seeks to hide the _______ of the funds.'],
            answer: 'Source / Purpose'
        },

        {
            text: ['he primary purpose of the Bank Secrecy Act (BSA) is to assist the United States government in the detection and prevention of money laundering, terrorist financing, and other illegal financial activity'],
            answer: 'true'
        },
        {
            text: ['Criminals disguising the source of the money by performing a series of intricate transactions through the world'],
            answer: 'Money Laundering'
        },
        {
            text: ['Select all that apply. The three independent steps in the money laundering process include'],
            answer: 'Integration, Placement, Layering'
        },
        {
            text: ['When a customer purchases money orders or traveler', 'checks for cash for which amounts must an institution obtain'],
            answer: 'From $3,000 to $10,000, inclusive'
        },
        {
            text: ['s Customer Identification Program (CIP) applies to all customers.'],
            answer: 'false'
        },
        {
            text: ['intent is to hide the ________ of funds, whereas terrorist financing seeks to hide the _______ of the funds'],
            answer: 'Source / Purpose'
        },
        {
            text: ['John, a Money Express customer, uses cash to purchase $6,000 in traveler'],
            answer: 'Yes'
        },
        {
            text: ['________ is a bureau of the U.S. Department of the Treasury with the mission to safeguard the financial system from illicit use, combat money laundering'],
            answer: 'FinCEN'
        },
        {
            text: ['Select all that apply. The USA PATRIOT Act was enacted to'],
            answer: '3 - To place more scrutiny..., Establish information sharing..., Criminalize the financials of...'
        },
        {
            text: ['The penalties for violating the Bank Secrecy Act can be civil, criminal, or intangible'],
            answer: 'true'
        },
        {
            text: ['All MSBs must register with FinCEN'],
            answer: 'false'
        },
        {
            text: ['Information that must be reported on a SAR includes all the following EXCEPT'],
            answer: 'Apparel worn...'
        },
        {
            text: ['A CTR must be completed for any individual or multiple cash transaction totaling at least'],
            answer: '10,000.01'
        },
        {
            text: ['A record must be kept for the exchange of currency in the amount of  ___'],
            answer: '1,000'
        },
        {
            text: ['A _________ must be completed for any transaction of at least $2,000 aggregate that the institution knows or suspects might be suspicious'],
            answer: 'Suspicious activity report'
        },
        {
            text: ['All of the following are among the five pillars of an AML program EXCEPT'],
            answer: 'Institution registration with FINCEN'
        },
        {
            text: ['The BSA requires MSBs to have a formalized Customer Identification Program'],
            answer: 'false'
        },
        {
            text: ['The USA PATRIOT Act generally prohibits doing business with Politically Exposed Persons (PEPs)'],
            answer: 'false'
        },
        {
            text: ['Section 326 of the USA PATRIOT Act added additional provisions to the overall Bank Secrecy Act (BSA) requirements'],
            answer: 'true'
        },
        {
            text: ['The Know Your Customer principals'],
            answer: 'Types of acceptable identification'
        },
        {
            text: ['Telling a customer you need to file a SAR is appropriate because it is the law'],
            answer: 'false'
        },
        {
            text: ['Select all that apply. What information should be included in a SAR'],
            answer: 'ALL'
        },
        {
            text: ['One of the primary purposes of the Bank Secrecy Act is to help deter money laundering by creating a "paper trail" and an "information trail."'],
            answer: 'true'
        },
        {
            text: ['Certain information must travel to the next financial institution processing the transfer.'],
            answer: 'true'
        },
        {
            text: ['Select all that apply. The Bank Secrecy Act is the law that requires financial institutions, casinos, and certain other businesses to'],
            answer: '- Monitor customer behavior<br />- File reports on transactions...<br />- Maintain records of certain cash transactions'
        },
        {
            text: ['s core activities involve "following the money," which includes all of the following EXCEPT'],
            answer: 'Charging Import and Duty Fees'
        },
        {
            text: ['core activities involve', 'Receiving and maintaining financial transactions data', 'All of the above'],
            answer: 'Charging Import and Duty Fees'
        },
        {
            text: ['s checks for cash for which amounts must an institution obtain and retain certain information about the customer'],
            answer: 'between 5000 and 9999'
        },
        // FSC - AML Awareness and Protection
        {
            text: ['Placement, layering, and integration are steps in this criminal process of exploiting financial services businesses.'],
            answer: 'Money Laundering'
        },
        {
            text: ['Money laundering is the process of making ___________ appear _________'],
            answer: 'Illegal gained proceeds / legal'
        },
        {
            text: ['Terrorist financing involves the solicitation, collection, or provision of funds with the intention that they be used to support terrorist acts or organizations.'],
            answer: 'true'
        },
        {
            text: ['The ____________ was designed to create an investigative "paper trail" for large currency transactions by establishing reporting standards and requirements (e.g. the CTR requirement)'],
            answer: 'Bank Secrecy Act'
        },
        {
            text: ['The Money Laundering Control Act made money laundering a federal crime. All of the following offenses were created with this law EXCEPT'],
            answer: 'Sending laundered money across international borders'
        },
        {
            text: ['The Anti-Drug Abuse Act requires strict identification and recording of cash purchases of certain monetary instruments, including money orders and traveler'],
            answer: 'true'
        },
        {
            text: ['The ___________ strengthened penalties for financial institutions found guilty of money laundering'],
            answer: 'Anunzio-Wylie anti money...'
        },
        {
            text: ['As required by the USA PATRIOT Act, each financial institution'],
            answer: 'Policies, procedures and controls; designation of a compliance officer; training; and an independent audit function'
        },
        {
            text: ['The intent of an AML program is to identify products, services, geographic locations, and points of customer interaction that are most susceptible to money laundering and terrorist financing activities'],
            answer: 'false'
        },
        {
            text: ['The BSA requires your AML program to have risk-based internal controls (policies and procedures)'],
            answer: 'true'
        },
        {
            text: ['The BSA requires that financial services businesses, including MSBs, have a written _______________ that addresses the four "pillars."'],
            answer: 'AML Program'
        },
        {
            text: ['Internal controls is one of the four "pillars" of an AML program'],
            answer: 'true'
        },
        {
            text: ['Internal money laundering controls should provide for all of the following EXCEPT'],
            answer: 'Business continuity plans for data security'
        },
        {
            text: ['A __________ approach combats money laundering and terrorist financing and allows your company to direct resources to where the risk is the greatest.'],
            answer: 'Risk-based'
        },
        {
            text: ['FinCEN further discourages financial services businesses to adopt policies and procedures that incorporate the Basel Committee Statement of Principles on Money Laundering'],
            answer: 'false'
        },
        {
            text: ['Program continuity despite changes in management or employee composition or structure would be considered a topic to include in your AML policies and procedures.'],
            answer: 'true'
        },
        {
            text: ['MSBs must file SARs with FinCEN when a transaction is both suspicious and _________ or more'],
            answer: '2,000'
        },
        {
            text: ['Financial services businesses, including MSBs, should file SARs with FinCEN for any suspicious transaction that deals with known or suspected theft or abuse of a person'],
            answer: 'true'
        },
        {
            text: ['A Currency Transaction Report (CTR) must be completed for any individual or multiple cash transaction totaling at least'],
            answer: '10,000'
        },
        {
            text: ['A record must be kept for the exchange of currency in the amount of _____ in cash'],
            answer: '1,000'
        },
        {
            text: ['Certain MSBs are required to register with'],
            answer: 'FinCen'
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
                'width: 300px',
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
        });

        if (!found) {
            postMessage('');
        }

        closeDumbDialogs()
        clickNext();
    }

    setInterval(check, 500);
})();
