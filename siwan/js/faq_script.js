document.addEventListener('DOMContentLoaded', function () {
    const qaContainer = document.getElementById('qaContainer');
    const keywordSearchInput = document.getElementById('keywordSearch');

    const faqMarkdown = `
### 一、語文素養 (中文、本土語言)

**Q1. 我一定得把〈中文思辨與表達〉(一)(二) 兩門都修完嗎？**
A：
*   110學年度(含)以前入學學生：必須修畢〈中文思辨與表達〉(一)及(二)兩門課，每門課3學分，其中2學分計入最低畢業學分，另1學分僅計入修習學分數。無修習順序限制。
*   111學年度(含)以後入學學生：〈中文思辨與表達〉(一)或(二)「兩門擇一即可」，修過任何一門就算完成中文必修3學分。

**Q2. 全英語專班的學生也需要修〈中文思辨與表達〉課程嗎？**
A：是的，全英語專班學生仍須依通識教育架構規定修習〈中文思辨與表達〉課程。若為外籍生或僑生，如中文能力不足，可依規定申請以「華語教學中心課程」抵免。此外，外籍及僑外學位生修習跨院選修(通)「閱讀中華寶島」課程通過後，也可申請抵免。所有抵免仍須符合相關時數及成績規定。

**Q3. 拿到本土語言中級以上證照，可以抵免哪些課？**
A：
*   111學年度後入學之學生：可持本土語言（閩南語、客語及原住民語）及臺灣手語中級以上證照，折抵「跨院選修」至多2學分。
*   112學年度後入學之學生：若持有上述證照，再修習3學分本土語言相關課程，可直接抵免中文必修學分。

---

### 二、英語文能力與課程

**Q4. 英語能力畢業門檻是什麼？沒通過就不能畢業嗎？**
A：是的，各入學年度學生均設有「英語文能力標準認證」的畢業門檻。學生需達到學校規定的英語文能力標準（如通過指定的校外英檢考試），並至「英語文能力標準鑑定系統」登錄成績並完成認證作業。請務必留意 <a href="https://emicenter.siwan.nsysu.edu.tw" target="_blank"> 西灣學院 EMI 中心 </a>公告的最新標準與可採計的檢定項目。

**Q5. 如果校外英檢一直沒通過，有其他方式可以達到英語能力畢業門檻嗎？**
A：可以。學生若多次參加校外英檢仍未達畢業門檻標準，可透過申請「英語實踐歷程檔案」作為替代管道。累積「英語實踐歷程檔案」點數滿100點，即可視同通過《英語文能力認證》的畢業門檻。

**Q6. 外文系或全英語專班的學生，英文必修課程有特殊規定嗎？**
A：
*   外文系學生：可以用兩門系上開設的專業選修課程，分別抵免「通識英文」及「學術/專業英文(EAP/ESP)」的必修學分。
*   全英語專班學生：其修習的博雅課程中，至少要有6學分是全英語授課(EMI)的課程。

**Q7. 111學年度以後入學的學生，一定要修 EAP/ESP 課程嗎？**
A：是的，111學年度以後入學的學生，其規定的8學分跨院選修中，必須包含至少1門「學術英文(EAP)或專業英文(ESP)」課程。

**Q8. 一個學期可以修幾門英語文課程？**
A：
*   110學年度(含)以前入學學生：每學期只能修習一門通識英文課程。
*   111學年度(含)起入學學生：同一學期可修習一門通識英文課程以及一門跨院EAP/ESP課程。
*   112學年度(含)起入學學生：每學期只能修習一門英文課程（通識英文或EAP/ESP）。

**Q9. 英語文課程需要依照分級的順序修課嗎？**
A：是的，學生必須依照入學時英語文能力測驗的分級結果，以及各入學年度的修課規定，逐級依序修習通識英文及（若適用）跨院EAP/ESP課程。不可跳級或顛倒修習順序，否則學分可能不被承認。詳細的修課路徑圖及規定，請參考西灣學院的公告。

**Q10. 我可以用大學入學前考的英檢成績來認證英語能力畢業門檻嗎？**
A：可以，但有條件限制。用於認證的英檢成績單必須在效期內（通常為測驗日起算兩年內），或者是在您大學就讀期間所考取的成績。例如，若您在高三暑假考取的英檢成績符合標準，只要在成績效期內（通常是大一結束前），都可以用來辦理認證。

**Q11. 如何查詢我的英語能力畢業門檻認證是否通過？**
A：請登入「英語文能力標準鑑定系統」進行查詢。在系統中登錄資料時，申請認證的學期應填寫您辦理認證的當學年度，而非英檢考試的日期。由於畢業審核系統可能不會即時更新，最終結果請以「英語文能力標準鑑定系統」的查詢為準。

**Q12. 如何辦理英語文課程的學分抵免？**
A：英語文課程的學分抵免主要分為：校外英檢成績抵免、在他校已修習及格之英語文課程抵免、以及本校跨院選修EAP/ESP課程與通識英文互抵（依入學年度規定）。學生需在學校公告的抵免申請期間內（通常為開學第一週或第二週，請依教務處行事曆為準），備妥抵免申請表、成績單正本（校外英檢或他校修課證明）、課程綱要（他校課程抵免時需要）等相關文件，向西灣學院全英語卓越教學中心提出申請。EAP/ESP與通識英文的互抵規則因入學年度而異，詳細辦法請務必查詢西灣學院的最新公告。

**Q13. 如果我的英語文能力分級為「高級」，還需要申請「中高級」課程的抵免嗎？**
A：不需要。若您入學時的英語文能力分級結果為「高級」，將視同通識英文「中高級」的學分已通過抵免，無需另外提出申請。

**Q14. 英語文課程抵免學分申請表要去哪裡下載？**
A：請至西灣學院官方網站，通常在「法規&表單」或「學生專區」的「表單下載」區域可以找到。請注意依照您的入學年度下載適用的表單。

---

### 三、跨院選修

**Q15. 一個學期可以選修幾門跨院選修課程？**
A：每學期以選修一門為原則。在加退選階段，學生可加選第二門跨院選修課程。若想選修至第三門，則需經授課老師簽名同意後，於異常處理階段辦理。

**Q16. 我可以用自己系上開的專業課程，或是雙主修的課程來抵免跨院選修學分嗎？**
A：一般情況下不行。要取得跨院選修學分，必須選擇課程代碼被歸類為「跨院選修」的課程。唯一的例外是，若您已轉系至其他學院，而您原屬學系的課程在當學期正好也開放為跨院選修課程，則可以透過抵免方式將其轉換為跨院選修學分。雙主修的學生在認定跨院選修時，仍以其原入學主修學系為基準。

**Q17. 跨院選修課程可以拖到大三、大四才修嗎？**
A：可以。跨院選修課程沒有限定修習的年級，但仍需注意每學期的選課上限（初選/加選階段最多2門，第3門需特殊申請）。建議及早規劃，以免影響畢業時程。

**Q18. 轉系後，之前修的跨院選修課程學分如何計算？**
A：轉系後，您需要檢視之前修習的跨院選修課程，是否仍然符合「新所屬學院以外」的跨院選修定義。例如，若您從文學院轉到社會科學院，而之前修了一門社會科學院開設的跨院選修課程，那麼這門課在轉系後將不再被視為跨院選修學分，但有可能可以申請抵免為社會科學院的專業課程學分。若有疑問，請檢附歷年成績單向基礎教育中心洽詢。

**Q19. 雙主修的學生，如何認定哪些課程算是「跨院選修」？**
A：雙主修學生在選擇跨院選修課程時，是以其「入學時所屬的主修學系（第一主修）」作為判斷基準。也就是說，課程必須是第一主修學系所屬學院「以外」的學院所開設，並經西灣學院認可的課程。

**Q20. 跨院選修的學分有抵免上限嗎？**
A：是的。111學年度以前入學的學生，跨院選修學分至多可抵免6學分；111學年度(含)以後入學的學生，至多可抵免8學分。此上限包含了持本土語言證照可抵免的2學分特殊規定。

**Q21. 交換學生期間無法選修 EAP/ESP 課程怎麼辦？**
A：若您在交換學生期間無法選修規定的 EAP/ESP 課程，可以先修習其他跨院選修學分，待交換結束返校後再補修 EAP/ESP 課程。如果您在交換學校修習了性質相近的 EAP 課程，返校後可以依規定申請學分抵免。

---

### 四、博雅課程

**Q22. 博雅課程總共要修多少學分？**
A：博雅課程與體驗性課程（服務學習）合計必修14學分，其中博雅課程佔13學分，體驗性課程（服務學習）佔1學分。

**Q23. 我想把我喜歡的博雅課程向度一次修完，可以嗎？**
A：在選課的初選階段，每學期原則上只能選一門博雅課程；加選階段可再加選一門。若需選修更多，則需於異常處理階段辦理，且無限制門數。但請注意，博雅課程的總修習學分上限為19學分（107學年度以前入學者上限為15學分），超過此上限的學分將不被列入最低畢業學分計算。

**Q24. 博雅課程的第五、六向度（通常為自然科學與社會科學領域）有哪些學院的學生需要特別注意選修學分限制？**
A：
*   理學院、工學院、海洋科學院、醫學院的學生：第五向度與第六向度合計最多只能修習6學分。
*   文學院、管理學院、社會科學院的學生：第五向度與第六向度至少各需選修2學分。

**Q25. 博雅課程的學分有抵免上限嗎？**
A：是的。
*   從外校轉學進入本校的學生：博雅課程學分抵免上限為6學分。
*   本校學生轉系：博雅課程學分抵免上限最多為12學分。
    抵免的課程原則上需為近4年內本校曾開設過的課程，除非課程理念相符且經審查通過，才可能放寬此限制。

---

### 五、體驗性課程 (大學之道、服務學習、應用性課程)

**Q26. 「大學之道」講座需要做什麼？有學分嗎？**
A：「大學之道」要求學生在大三結束前，必須參加滿6場由西灣學院認列的活動或演講。此課程成績單上顯示為P (通過) / F (不通過)，本身為0學分，但為畢業的必要條件。若未在期限內完成，畢業前仍須補齊場次，否則將影響畢業審查。

**Q27. 「大學之道」講座的場次在哪裡查詢？參加時要注意什麼？**
A：「大學之道」的講座或活動場次皆會公告於西灣學院的官方網站，請定期上網查詢。聽講時，請務必攜帶學生證刷卡進場與出場，以確實記錄出席。

**Q28. 如果「大學之道」講座快畢業了才發現沒聽完怎麼辦？**
A：若到大四才發現「大學之道」講座場次未完成，請務必於大四期間儘速補齊。若直到預計畢業的學期仍未完成所有場次，將可能需要延畢一個學期，直到完成所有場次要求方可畢業。

**Q29. 我有參加「大學之道」講座，但系統上沒有聽講紀錄怎麼辦？**
A：請務必在參加講座的當學期結束前確認您的聽講紀錄。若發現系統上查無紀錄，請於該場講座結束後一個月內（或該學期成績繳交截止日前），主動向西灣學院洽詢處理，逾時可能不予受理。聽講紀錄查詢網址通常會在西灣學院網站上提供。

**Q30. 參加「大學之道」講座可以穿拖鞋嗎？**
A：不可以。為表示對演講者及活動的尊重，並維持场合的基本禮儀，請穿著整齊，勿穿著拖鞋入場。

**Q31. 服務學習課程一定要修嗎？什麼時候修？**
A：是的，服務學習為必修1學分的體驗性課程，需於大三結束前修習完畢。若未在期限內完成，畢業前仍須補修。超修的服務學習學分（即修超過1學分以上）會計入畢業總學分，但不會列入最低畢業學分要求中。

**Q32. 大一新生可以修服務學習課程嗎？**
A：服務學習課程規劃為大二（含）以上學生修習。大一新生可以透過參與期末的服務學習成果海報展或成果發表影片，來了解學校開設的服務學習課程內容。

**Q33. 應用性課程的學分如何計算？**
A：
*   109學年度(含)以前入學學生：第一門「非」軍訓類的應用性課程可採計1學分為最低畢業學分。
*   110學年度(含)以後入學學生：只有「第一門」非軍訓類的應用性課程可採計為最低畢業學分（學分數依課程規定）；從第二門起修習的非軍訓類應用性課程，其學分僅計入畢業總學分，不計入最低畢業學分。
*   軍訓課程：學分不計入最低畢業學分，也不計入應用性課程的「第一門」額度。

---

### 六、運動與健康 (體育課程)

**Q34. 運動與健康課程（體育）的4學分一定要修嗎？會算在最低畢業學分裡嗎？**
A：是的，運動與健康課程為必修，總共4學分。然而，這4學分一律「不列入」各學系的最低畢業學分計算中，但其成績仍會計算在學期平均成績內。大一上學期必修「運動與健康：體適能」，大一下學期必修「運動與健康：初級游泳」。(運動績優生另有規定)

**Q35. 體育課選課上有年級限制嗎？**
A：
*   初選階段：僅限大一及大二學生選課。
*   加退選階段後：大三及大四學生可以補修先前未完成的體育必修課程。但大一、大二學生不得選修專為大三、大四開設的體育選修課程。

**Q36. 大一必修的體育課沒選到理想的時段，可以等到大二再修嗎？**
A：可以。若大一時未能選到必修的體育課程，務必在畢業前完成補修。

**Q37. 一個學期可以修超過一門體育課嗎？**
A：可以。一個學期內，學生至多可以修習兩門「不同課程名稱」的體育課。

**Q38. 我可以先修游泳課，之後再參加游泳會考嗎？**
A：不行。修習「運動與健康：初級游泳」課程的當學期，就必須通過游泳會考（通常是課程的一部分或期末評量）。若未通過，則該課程成績可能不及格，需要重修課程並再次通過游泳會考。

**Q39. 我已經會游泳了，可以免修「初級游泳」課或抵免學分嗎？**
A：可以。學校會在開學後辦理游泳會考（通常標準為50公尺蛙式）。通過會考的學生，即可辦理抵免「運動與健康：初級游泳」課程的學分。詳細的會考時間、標準及抵免程序，請留意西灣學院網站的公告。

---

### 七、學分計算、抵免與畢業審查

**Q40. 畢業檢核表上顯示的「累計學分數」就是我實際可用於畢業的學分數嗎？**
A：不完全是。畢業檢核表上顯示的累計學分數，通常「尚未扣除」重複修習的課程、超修的博雅課程學分、超修的服務學習學分、不計入最低畢業學分的應用性課程（如第二門以上非軍訓課或軍訓課）以及不計入最低畢業學分的運動與健康課程等。學生需自行檢視並扣除這些學分後，得到的數值才是真正計入「最低畢業學分」的學分數。

**Q41. 哪些課程的超修學分或特定課程學分，雖然會計入「總修習學分」，但「不列入」最低畢業學分計算？**
A：
*   運動與健康課程：必修4學分皆不列入最低畢業學分。
*   應用性課程：第二門（含）以上的非軍訓類應用性課程學分，以及所有軍訓課程學分，不列入最低畢業學分。
*   博雅課程：超過規定上限（107前入學15學分，108後入學19學分）的學分不列入。
*   服務學習課程：超過必修1學分以上的部分不列入。
    這些學分雖然會顯示在成績單的「總修習學分」中，但若您的目標是達到系上規定的最低畢業學分（例如128學分），則不足的部分需要透過修習專業課程或其他可計入的選修課程來補足。

**Q42. 我是雙主修或轉系的學生，如果遇到課程規定衝突（例如通識規定版本不同），應該看哪一年的版本？**
A：原則上，所有學生的通識教育課程規定，都是以其「入學學年度」的規則為準。若有特殊情況（例如因延畢而跨越了新舊學制交替期），建議主動向西灣學院或教務處通識教育組提出個案審議。

**Q43. 我已經超過該學期的學分修習上限，但還想多修通識課程，可以申請超修嗎？**
A：每學期若要超修學分，皆須經過系所主管及教務處的同意。一般而言，若想超修的通識課程並非您該學年度的必修科目，通常不會被視為合理的超修理由。建議在規劃課程時，應優先修習系上的必修及專業科目。

**Q44. 我想辦理全民國防教育課程（軍訓）的役期折抵，要去哪裡辦理？**
A：
1.  請先親自至教務處（通常位於行政大樓六樓）申請歷年成績單，並向櫃台人員說明需要加蓋「役期折抵」相關戳章。
2.  教務處會審核您成績單上全民國防教育課程的成績是否合格。
3.  審核通過並簽證蓋章後，成績單會交還給您。
4.  若委託他人辦理，需檢附委託書。
    如有疑問，可洽詢教務處相關承辦人員（可詢問分機2127）。

**Q45. 如果對畢業檢核的結果有疑問，應該向哪個單位洽詢？**
A：若對畢業檢核的學分計算或結果有任何疑問，請洽詢教務處註冊組（校內分機通常為2122）。
`;

    function parseFAQMarkdown(markdown) {
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
                    currentSection = "";
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
        let html = '';
        const lines = answerText.split('\n');
        let inList = false;

        for (const line of lines) {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
                if (!inList) {
                    html += '<ul>\n';
                    inList = true;
                }
                html += `  <li>${trimmedLine.substring(2)}</li>\n`;
            } else if (trimmedLine.match(/^\d+\.\s/)) {
                if (!inList) {
                    html += '<ul>\n';
                    inList = true;
                }
                html += `  <li>${trimmedLine.replace(/^\d+\.\s/, '')}</li>\n`;
            }
            else {
                if (inList) {
                    html += '</ul>\n';
                    inList = false;
                }
                if (trimmedLine) {
                    html += `<p>${trimmedLine}</p>\n`;
                } else if (html.endsWith("</p>\n")) {
                }
            }
        }
        if (inList) {
            html += '</ul>\n';
        }
        return html;
    }


    function renderFAQs(faqData) {
        qaContainer.innerHTML = '';
        let currentSection = '';

        const sectionIconMap = {
            "語文素養": "fa-language",
            "英語文能力與課程": "fa-comments",
            "跨院選修": "fa-sitemap",
            "博雅課程": "fa-book-open-reader",
            "體驗性課程": "fa-hands-helping",
            "運動與健康": "fa-person-running",
            "學分計算、抵免與畢業審查": "fa-graduation-cap",
        };

        faqData.forEach(faq => {
            if (faq.section !== currentSection) {
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