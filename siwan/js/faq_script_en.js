document.addEventListener('DOMContentLoaded', function () {
    const qaContainer = document.getElementById('qaContainer');
    const keywordSearchInput = document.getElementById('keywordSearch');

    const faqMarkdown = `
### I. Language Literacy (Chinese, Local Languages)

**Q1. Do I have to complete both "Critical Thinking and Expression in Chinese" (I) and (II)?**
A：
*   **Students enrolled in/before the 2021 academic year:** You must complete both courses (I) and (II). Each course is 3 credits, with 2 credits counting toward the minimum graduation requirement and the other 1 credit only counting toward total credits taken. There is no required order for taking the courses.
*   **Students enrolled in/after the 2022 academic year:** You only need to choose one of the two courses, either (I) or (II). Completing either one will fulfill the 3-credit Chinese language requirement.
---

**Q2. Do students in English-lectured bachelor programs need to take "Critical Thinking and Expression in Chinese"?**
A：
Yes, students in English-lectured programs must take the "Critical Thinking and Expression in Chinese" course according to the general education structure. However, foreign or overseas compatriot students with insufficient Chinese ability can apply for an exemption by taking courses at the Chinese Language Center. Additionally, degree students who are foreign, overseas compatriot, or whose high school education was primarily not in Chinese (e.g., IB diploma, homeschooled, or graduates from foreign/international schools) can apply for an exemption by passing the inter-college elective "Reading the Sino-Island". All exemptions must meet relevant course hour and grade requirements.
---

**Q3. If I have an intermediate or higher certificate in a local language, what courses can I get an exemption for?**
A：
*   **Students enrolled after the 2022 academic year:** You can use an intermediate or higher certificate in a local language (Taiwanese Hokkien, Hakka, or Indigenous languages) or Taiwanese Sign Language to get an exemption for up to 2 credits of "Inter-college Electives".
*   **Students enrolled after the 2023 academic year:** If you hold one of the above certificates and take an additional 3 credits of local language-related courses, you can directly receive an exemption for the compulsory Chinese language credits.
---

### II. English Language Proficiency & Courses

**Q4. What is the English proficiency graduation requirement? Can I not graduate if I don't pass it?**
A：
Yes, there is an "English Language Proficiency Standard" graduation requirement for students of all enrollment years. You must meet the university's standard (e.g., by passing a designated external English proficiency test) and register your score in the "English Proficiency Standard Evaluation System" to complete the certification process. Please check the <a href="https://emicenter.siwan.nsysu.edu.tw" target="_blank">EMI Center of Si-Wan College</a> for the latest standards and approved tests.
---

**Q5. If I keep failing the external English proficiency tests, are there any alternatives to meet the graduation requirement?**
A：
Yes. If you have repeatedly failed to meet the graduation standard through external tests, you can apply for the "English Learning Passport" as an alternative. Accumulating 100 points in the "English Learning Passport" is considered equivalent to passing the English proficiency graduation requirement.
---

**Q6. Are there special regulations for English major or English-lectured program students regarding compulsory English courses?**
A：
*   **English Major Students:** You can use two professional elective courses from your department to exempt the "General English" and "Academic/Professional English (EAP/ESP)" requirements, respectively.
*   **English-lectured Program Students:** At least 6 credits of the liberal arts courses you take must be taught entirely in English (EMI courses).
---

**Q7. Do students enrolled after the 2022 academic year have to take an EAP/ESP course?**
A：
Yes. For students enrolled in or after the 2022 academic year, the required 8 credits of inter-college electives must include at least one "English for Academic Purposes (EAP)" or "English for Specific Purposes (ESP)" course.
---

**Q8. How many English courses can I take in one semester?**
A：
*   **Students enrolled in/before the 2021 academic year:** You can only take one General English course per semester.
*   **Students enrolled in or after the 2022 academic year:** You can take one General English course AND one inter-college EAP/ESP course in the same semester.
*   **Students enrolled in or after the 2023 academic year:** You can only take one English course per semester (either General English or EAP/ESP).
---

**Q9. Do I need to take English courses in the order of my placement level?**
A：
Yes, you must follow the course sequence based on your placement test results at enrollment and the regulations for your enrollment year. You cannot skip levels or take courses out of order; otherwise, the credits may not be recognized. Please refer to the official announcements from Si-Wan College for detailed course path diagrams and regulations.
---

**Q10. Can I use an English proficiency test score from before I entered university to certify my graduation requirement?**
A：
Yes, but with restrictions. The test score report must be valid (usually within two years of the test date) or from a test taken during your university enrollment period. For example, if you passed a qualifying test in the summer after your senior year of high school, you can use it for certification as long as it's within the validity period (usually before the end of your freshman year).
---

**Q11. How do I check if my English proficiency graduation requirement has been certified?**
A：
Please log in to the "English Proficiency Standard Evaluation System" to check. When entering your data, the "semester of application" should be the current semester when you are applying for certification, not the date of the test. Since the graduation review system may not update in real-time, please rely on the "English Proficiency Standard Evaluation System" for the final status.
---

**Q12. How do I apply for an English course credit transfer?**
A：
English course credit transfers are mainly for: external English test scores, successfully completed English courses from another university, and transfers between our university's inter-college EAP/ESP courses and General English (depending on enrollment year). You must submit the application form, official transcripts (from tests or other schools), and course syllabi (for transfers from other schools) to the Center for EMI Teaching Excellence at Si-Wan College during the official application period (usually the first or second week of the semester, check the academic calendar). The rules for transfers between EAP/ESP and General English vary by enrollment year, so be sure to check the latest announcements from Si-Wan College.
---

**Q13. If my English placement level is "Advanced", do I still need to apply for a credit transfer for the "High-Intermediate" course?**
A：
No. If your placement level is "Advanced", you are automatically deemed to have passed and received credit for the "High-Intermediate" General English course. No separate application is needed.
---

**Q14. Where can I download the application form for English course credit transfers?**
A：
Please go to the official website of Si-Wan College. You can usually find it under "Regulations & Forms" or in the "Student Area" under "Forms Download." Make sure to download the form that corresponds to your year of enrollment.
---

### III. Inter-college Electives

**Q15. How many inter-college elective courses can I take in one semester?**
A：
The principle is one course per semester. During the add/drop period, you can add a second inter-college elective. If you wish to take a third, you must get the instructor's signature and process it during the "irregular course selection" phase.
---

**Q16. Can I use professional courses from my own department or courses from my double major to count as inter-college elective credits?**
A：
Generally, no. To get inter-college elective credits, you must choose a course with a code designated as "Inter-college Elective." The only exception is if you have transferred to a different college; a course from your original department might be offered as an inter-college elective in the current semester, in which case you could apply for a credit transfer. For double major students, inter-college electives are still determined based on their original, primary major.
---

**Q17. Can I wait until my junior or senior year to take inter-college electives?**
A：
Yes. There is no year-level restriction for taking inter-college electives, but you must still adhere to the per-semester course limit (max 2 during regular/add-drop, a 3rd requires special permission). It is recommended to plan early to avoid affecting your graduation schedule.
---

**Q18. After transferring to a new department, how are my previously taken inter-college elective credits calculated?**
A：
After transferring, you need to check if your previously taken inter-college electives still meet the definition of being "outside your new college." For example, if you transferred from the College of Liberal Arts to the College of Social Sciences and had previously taken an inter-college elective from the College of Social Sciences, that course will no longer count as an inter-college elective. However, you might be able to apply to have it count as a professional course credit for the College of Social Sciences. If you have questions, please contact the Center for Essential Education with your academic transcript.
---

**Q19. For double major students, how are "inter-college electives" defined?**
A：
When choosing inter-college electives, double major students are judged based on their "primary major at the time of enrollment (first major)." This means the course must be offered by a college *other than* the one their first major belongs to and be recognized by Si-Wan College.
---

**Q20. Is there a credit limit for inter-college electives?**
A：
Yes. For students enrolled in or before the 2021 academic year, the maximum is 6 credits. For students enrolled in or after the 2022 academic year, the maximum is 8 credits. This limit includes the special provision of up to 2 credits that can be exempted with a local language certificate.
---

**Q21. What if I can't take an EAP/ESP course while on a student exchange program?**
A：
If you are unable to take a required EAP/ESP course during your exchange, you can take other inter-college electives first and make up the EAP/ESP course after you return. If you took a similar EAP course at the exchange university, you can apply for a credit transfer upon your return according to regulations.
---

### IV. Liberal Arts Courses

**Q22. How many credits of liberal arts courses are required in total?**
A：
Liberal arts courses and practical experience courses (service learning) require a combined total of 14 credits. Of these, 13 credits are for liberal arts courses, and 1 credit is for the practical experience course (service learning).
---

**Q23. Can I take all the courses I like from a single liberal arts dimension at once?**
A：
During the initial course selection phase, you can generally only select one liberal arts course per semester. You can add a second one during the add/drop period. If you need to take more, you must process it during the "irregular course selection" phase, which has no limit. However, be aware that the total credit limit for liberal arts courses is 19 credits (15 for those enrolled before the 2018 academic year). Credits beyond this limit will not be counted toward the minimum graduation requirement.
---

**Q24. Are there any students who need to pay special attention to the credit limits for the fifth and sixth dimensions of liberal arts courses (usually Natural Sciences and Social Sciences)?**
A：
*   **Students from the College of Science, College of Engineering, College of Marine Sciences, and College of Medicine:** You can take a combined maximum of 6 credits from the fifth and sixth dimensions.
*   **Students from the College of Liberal Arts, College of Management, and College of Social Sciences:** You must take at least 2 credits from the fifth dimension and 2 credits from the sixth dimension.
---

**Q25. Is there a credit limit for transferring liberal arts course credits?**
A：
Yes.
*   **Transfer students from other universities or students approved for overseas study/dual-degree programs:** The maximum credit transfer for liberal arts courses is 6 credits.
*   **Students transferring between departments within the university:** The maximum credit transfer for liberal arts courses is 12 credits.
*   In principle, the transferred courses should be equivalent to courses that have been offered at our university within the last 4 years.
---

### V. Practical Experience Courses (Primer on College Life, Service Learning, Applied Courses)

**Q26. What is the "Primer on College Life" lecture series? Does it have credits?**
A：
"Primer on College Life" requires students to attend 6 recognized activities or lectures by the end of their junior year. The course appears on the transcript as P (Pass) / F (Fail) and is worth 0 credits, but it is a graduation requirement. If you do not complete it on time, you must make up the sessions before graduation, or it will affect your graduation review.
---

**Q27. Where can I find the schedule for the "Primer on College Life" lectures? What should I pay attention to when attending?**
A：
The schedule for "Primer on College Life" lectures and activities is posted on the official website of Si-Wan College. Please check it regularly. When attending, be sure to follow the organizer's instructions for signing in and out to ensure your attendance is properly recorded.
---

**Q28. What if I'm about to graduate and realize I haven't finished the "Primer on College Life" lectures?**
A：
If you discover in your senior year that you haven't completed the lecture requirement, you must make them up as soon as possible. If you still have not completed all sessions by your expected graduation semester, you may have to postpone your graduation for one semester until the requirement is met.
---

**Q29. I attended a "Primer on College Life" lecture, but there's no record in the system. What should I do?**
A：
You must confirm your attendance records before the end of the semester in which you attended the lecture. If you find a missing record, you must contact Si-Wan College within one month of the lecture (or before the deadline for grade submission for that semester). Overdue requests may not be processed. The link to check your records is usually provided on the Si-Wan College website.
---

**Q30. Can I wear slippers to the "Primer on College Life" lectures?**
A：
No. To show respect for the speaker and the event and to maintain basic decorum, please dress neatly and refrain from wearing slippers to the venue.
---

**Q31. Is the Service Learning course mandatory? When should I take it?**
A：
Yes, Service Learning is a compulsory 1-credit practical experience course that must be completed by the end of your junior year. If not completed on time, you must make it up before graduation. Any service learning credits taken beyond the required 1 credit will count toward your total graduation credits but not toward the minimum graduation requirement.
---

**Q32. Can freshmen take a Service Learning course?**
A：
Service Learning courses are designed for second-year students and above. Freshmen can learn about the available courses by attending the end-of-semester Service Learning poster exhibitions or watching the project presentation videos.
---

**Q33. How are credits for Applied Courses calculated?**
A：
*   **Students enrolled in/before the 2020 academic year:** The first non-military applied course can count as 1 credit toward the minimum graduation requirement.
*   **Students enrolled in or after the 2021 academic year:** Only the *very first* non-military applied course will count toward the minimum graduation requirement (credits vary by course). Any subsequent non-military applied courses will only count toward the total graduation credits, not the minimum.
*   **Military Training Courses:** Credits do not count toward the minimum graduation requirement and do not use up the "first course" quota for applied courses.
---

### VI. Sport & Health (Physical Education Courses)

**Q34. Are the 4 credits for Sport & Health (PE) courses mandatory? Do they count toward the minimum graduation credits?**
A：
Yes, the Sport & Health courses are mandatory, consisting of 1 credit each for freshman fitness and swimming, plus 2 credits for "other required Sport & Health courses," totaling 4 credits. These 4 credits are *not* counted toward your department's minimum graduation credits, but the grades are included in your semester GPA.
---

**Q35. Are there year-level restrictions for PE course selection?**
A：
Yes, you can only take courses at or below your year level.
*   **Freshmen** cannot take sophomore or junior level courses.
*   **Sophomores** cannot take junior level courses.
*   **Juniors and seniors** can make up any previously uncompleted required PE courses.
---

**Q36. I didn't get into my desired time slot for a required freshman PE course. Can I wait until my sophomore year to take it?**
A：
Yes. If you could not enroll in a required PE course during your freshman year, you must complete it before you graduate.
---

**Q37. Can I take more than one PE course in a semester?**
A：
Yes. In a single semester, a student may take up to two PE courses with *different course names*.
---

**Q38. Can I take the swimming course first and then take the swimming proficiency test later?**
A：
No. In the same semester that you take the "Sport & Health: Basic Swimming" course, you must pass the swimming proficiency test (which is usually part of the course or the final assessment). If you do not pass, you may fail the course and will need to retake it and pass the test.
---

**Q39. I already know how to swim. Can I get an exemption from the "Basic Swimming" course or transfer credit for it?**
A：
Yes. The university will hold a swimming proficiency test after the semester begins (the standard is typically 50-meter breaststroke). Please check the Si-Wan College website for the test schedule. A list of students who pass the test for exemption will be sent to the Office of Academic Affairs. If your transcript does not show "TR" for swimming by the end of the semester, please contact the center promptly to confirm.
---

### VII. Credit Calculation, Transfers & Graduation Review

**Q40. Does the "cumulative credits" shown on my graduation checklist represent the actual number of credits I can use for graduation?**
A：
Not exactly. The cumulative credits on the checklist usually have *not yet excluded* credits from repeated courses, excess liberal arts credits, excess service learning credits, applied courses that don't count toward the minimum (like a second non-military course or military courses), or Sport & Health courses. Students must manually review and subtract these to get the true number of credits that count toward their "minimum graduation requirement."
---

**Q41. Which excess or specific course credits count toward my "total credits taken" but *not* toward my minimum graduation requirement?**
A：
*   **Sport & Health Courses:** All 4 required credits do not count toward the minimum.
*   **Applied Courses:** The second (and subsequent) non-military applied course credits, and all military training course credits, do not count toward the minimum.
*   **Liberal Arts Courses:** Credits taken beyond the limit (15 before 2018, 19 from 2019) do not count.
*   **Service Learning Courses:** Credits beyond the required 1 credit do not count.
These credits will appear in your "total credits taken" on your transcript, but if you are aiming to meet your department's minimum (e.g., 128 credits), you will need to make up any shortfall by taking professional courses or other eligible electives.
---

**Q42. I am a double major or transfer student. If I encounter conflicting regulations (e.g., different versions of general education requirements), which version should I follow?**
A：
In principle, all students' general education requirements are based on the rules of their "enrollment academic year." In special cases (e.g., if a postponed graduation spans a transition between old and new systems), it is recommended to proactively consult with Si-Wan College or the Registration Division of the Office of Academic Affairs for a case-by-case review.
---

**Q43. I have already reached the credit limit for the semester, but I still want to take more general education courses. Can I apply for a credit overload?**
A：
Overloading credits each semester requires approval from your department head and the Office of Academic Affairs. Generally, wanting to take an extra general education course that is not a requirement for your year level is not considered a valid reason for a credit overload. It is recommended to prioritize your department's required and professional courses when planning your schedule.
---

**Q44. I want to apply for a service period reduction using my National Defense Education (Military Training) course credits. Where do I go?**
A：
1.  First, go in person to the Office of Academic Affairs (usually on the 6th floor of the Administration Building) to apply for an official transcript. Inform the counter staff that you need it stamped for a "service period reduction."
2.  The Office of Academic Affairs will review your transcript to confirm you have passed the National Defense Education courses.
3.  After verification and stamping, the transcript will be returned to you.
4.  If someone is applying on your behalf, a power of attorney is required.
    If you have questions, you can contact the relevant staff at the Office of Academic Affairs (try extension 2127).
---

**Q45. If I have questions about the results of my graduation review, which office should I contact?**
A：
If you have any questions about the credit calculation or results of your graduation review, please contact the Registration Division of the Office of Academic Affairs (campus extension is usually 2122).
---
`;

    function parseFAQMarkdown(markdown) {
        // This parser is designed for the specific format above and should not be changed.
        const lines = markdown.trim().split('\n');
        const faqs = [];
        let currentSection = "";
        let currentQuestion = "";
        let currentAnswer = "";
        let readingAnswer = false;

        for (const line of lines) {
            const trimmedLine = line.trim();

            if (trimmedLine.startsWith('### ')) {
                if (currentQuestion && currentAnswer) {
                    faqs.push({ section: currentSection, question: currentQuestion.trim(), answer: currentAnswer.trim() });
                }
                currentSection = trimmedLine.substring(4).trim();
                currentQuestion = "";
                currentAnswer = "";
                readingAnswer = false;
            } else if (trimmedLine.startsWith('**Q')) {
                if (currentQuestion && currentAnswer) {
                    faqs.push({ section: currentSection, question: currentQuestion.trim(), answer: currentAnswer.trim() });
                }
                currentQuestion = trimmedLine.replace(/\*\*(Q\d+\.\s*)/, '$1').replace(/\*\*/g, '');
                currentAnswer = "";
                readingAnswer = false;
            } else if (trimmedLine.startsWith('A：')) {
                readingAnswer = true;
                currentAnswer = trimmedLine.substring(2).trim() + "\n";
            } else if (readingAnswer) {
                if (trimmedLine === '---') {
                    if (currentQuestion && currentAnswer) {
                        faqs.push({ section: currentSection, question: currentQuestion.trim(), answer: currentAnswer.trim() });
                    }
                    currentQuestion = "";
                    currentAnswer = "";
                    readingAnswer = false;
                } else {
                    currentAnswer += line + "\n";
                }
            }
        }
        if (currentQuestion && currentAnswer) {
            faqs.push({ section: currentSection, question: currentQuestion.trim(), answer: currentAnswer.trim() });
        }
        return faqs;
    }

    function formatAnswer(answerText) {
        // This function now correctly handles bold text, links, and lists.
        let html = '';
        const lines = answerText.split('\n');
        let inList = false;
        let listType = 'ul';

        for (const line of lines) {
            let processedLine = line.trim();

            // Handle lists first
            if (processedLine.startsWith('* ') || processedLine.startsWith('- ')) {
                if (!inList) {
                    listType = 'ul';
                    html += `<ul>\n`;
                    inList = true;
                }
                processedLine = processedLine.substring(2);
            } else if (processedLine.match(/^\d+\.\s/)) {
                if (!inList) {
                    listType = 'ol';
                    html += `<ol>\n`;
                    inList = true;
                }
                processedLine = processedLine.replace(/^\d+\.\s/, '');
            } else {
                if (inList) {
                    html += `</${listType}>\n`;
                    inList = false;
                }
            }

            // Handle Markdown-like syntax for bold and links
            processedLine = processedLine
                .replace(/\*\*([^\*]+)\*\*/g, '<b>$1</b>') // Bold: **text** -> <b>text</b>
                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>'); // Link: [text](url) -> <a href...>

            // Build HTML
            if (inList) {
                html += `  <li>${processedLine}</li>\n`;
            } else if (processedLine) {
                html += `<p>${processedLine}</p>\n`;
            }
        }

        if (inList) {
            html += `</${listType}>\n`;
        }

        return html;
    }


    function renderFAQs(faqData) {
        qaContainer.innerHTML = '';
        let currentSection = '';

        faqData.forEach(faq => {
            if (faq.section && faq.section !== currentSection) {
                currentSection = faq.section;
                const sectionDiv = document.createElement('div');
                sectionDiv.className = 'qa-section';

                const sectionTitle = document.createElement('h2');
                sectionTitle.className = 'qa-section-header';
                sectionTitle.innerHTML = `${currentSection}`;
                sectionDiv.appendChild(sectionTitle);
                qaContainer.appendChild(sectionDiv);
            }

            const itemDiv = document.createElement('div');
            itemDiv.className = 'qa-item';
            itemDiv.dataset.question = faq.question.toLowerCase();
            itemDiv.dataset.answer = faq.answer.toLowerCase();

            const questionDiv = document.createElement('div');
            questionDiv.className = 'qa-question';
            questionDiv.innerHTML = `
                <span class="qa-question-text">${faq.question}</span>
                <i class="fas fa-chevron-down qa-toggle-icon"></i>
            `;

            const answerDiv = document.createElement('div');
            answerDiv.className = 'qa-answer';
            answerDiv.innerHTML = formatAnswer(faq.answer);

            itemDiv.appendChild(questionDiv);
            itemDiv.appendChild(answerDiv);

            const sections = qaContainer.querySelectorAll('.qa-section');
            const targetSectionContainer = sections[sections.length - 1];
            if (targetSectionContainer) {
                targetSectionContainer.appendChild(itemDiv);
            } else {
                qaContainer.appendChild(itemDiv);
            }


            questionDiv.addEventListener('click', () => {
                itemDiv.classList.toggle('active');
            });
        });
    }

    function filterFAQs() {
        const searchTerm = keywordSearchInput.value.toLowerCase().trim();
        const allQAItems = qaContainer.querySelectorAll('.qa-item');
        const allSections = qaContainer.querySelectorAll('.qa-section');

        allQAItems.forEach(item => {
            const questionText = item.dataset.question;
            const answerText = item.dataset.answer;
            if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });

        allSections.forEach(section => {
            const visibleItemsInSection = section.querySelectorAll('.qa-item:not(.hidden)');
            if (visibleItemsInSection.length === 0) {
                section.classList.add('hidden');
            } else {
                section.classList.remove('hidden');
            }
        });
    }

    const parsedFaqs = parseFAQMarkdown(faqMarkdown);
    renderFAQs(parsedFaqs);

    if (keywordSearchInput) {
        keywordSearchInput.addEventListener('input', filterFAQs);
    }
});