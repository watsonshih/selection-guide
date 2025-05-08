const rulesDatabase = {
    "109": {
        otherRequirements: "英語能力認證",
        creditTable: [
            { category: "語文素養", credits: "8", description: "中文 6 學分 + 英文 6 學分，其中 8 學分計必修，其餘 4 學分不計入最低畢業學分" },
            { category: "跨院選修", credits: "6", description: "可選擇學院不同領域課程" },
            { category: "博雅課程", credits: "13", description: "需涵蓋不同向度課程<br>理、工、海學生第五向度及第六向度最低畢業學分至多只採計 6 學分<br>文、管、社學生第五向度及第六向度的課程至少需各修習 2 學分" },
            { category: "體驗性課程", credits: "1–2", description: "服務學習 1 學分，非軍訓應用性課程可計 1 學分為最低畢業學分" },
            { category: "運動與健康", credits: "4", description: "不列最低畢業學分，但計入修習總學分" }
        ]
    },
    "110": {
        otherRequirements: "英語能力認證、全英語專班須修 6 學分英文博雅",
        creditTable: [
            { category: "語文素養", credits: "8", description: "中文 6 學分 + 英文 6 學分，其中 8 學分計必修，其餘 4 學分不計入最低畢業學分" },
            { category: "跨院選修", credits: "6", description: "可選擇學院不同領域課程" },
            { category: "博雅課程", credits: "13", description: "需涵蓋不同向度課程<br>理、工、海學生第五向度及第六向度最低畢業學分至多只採計 6 學分<br>文、管、社學生第五向度及第六向度的課程至少需各修習 2 學分" },
            { category: "體驗性課程", credits: "1", description: "服務學習 1 學分" },
            { category: "運動與健康", credits: "4", description: "不列最低畢業學分，但計入修習總學分" }
        ]
    },
    "111": {
        otherRequirements: "英語能力認證、本土語言可抵跨院至多 2 學分",
        creditTable: [
            { category: "語文素養", credits: "6", description: "中文 3 學分 + 英文 3 學分" },
            { category: "跨院選修", credits: "8", description: "含 1 門 EAP/ESP，可選擇學院不同領域課程" },
            { category: "博雅課程", credits: "13", description: "需涵蓋不同向度課程<br>理、工、海學生第五向度及第六向度最低畢業學分至多只採計 6 學分<br>文、管、社學生第五向度及第六向度的課程至少需各修習 2 學分" },
            { category: "體驗性課程", credits: "1", description: "服務學習 1 學分" },
            { category: "運動與健康", credits: "4", description: "不列最低畢業學分，但計入修習總學分" }
        ]
    },
    "112": {
        otherRequirements: "英語能力認證、醫學院學生納入第五、六向度限制",
        creditTable: [
            { category: "語文素養", credits: "6", description: "中文 3 學分 + 英文 3 學分" },
            { category: "跨院選修", credits: "8", description: "含 1 門 EAP/ESP，可選擇學院不同領域課程" },
            { category: "博雅課程", credits: "13", description: "需涵蓋不同向度課程<br>理、工、海、醫學生第五向度及第六向度最低畢業學分至多只採計 6 學分<br>文、管、社學生第五向度及第六向度的課程至少需各修習 2 學分" },
            { category: "體驗性課程", credits: "1", description: "服務學習 1 學分" },
            { category: "運動與健康", credits: "4", description: "不列最低畢業學分，但計入修習總學分" }
        ]
    },
    "113": {
        otherRequirements: "英語能力認證、外文系可用兩門專業選修抵英文必修 + EAP/ESP",
        creditTable: [
            { category: "語文素養", credits: "6", description: "中文 3 學分 + 英文 3 學分" },
            { category: "跨院選修", credits: "8", description: "含 1 門 EAP/ESP，可選擇學院不同領域課程" },
            { category: "博雅課程", credits: "13", description: "需涵蓋不同向度課程<br>理、工、海、醫學生第五向度及第六向度最低畢業學分至多只採計 6 學分<br>文、管、社學生第五向度及第六向度的課程至少需各修習 2 學分" },
            { category: "體驗性課程", credits: "1", description: "服務學習 1 學分" },
            { category: "運動與健康", credits: "4", description: "不列最低畢業學分，但計入修習總學分" }
        ]
    }
};

// 選課階段規定
const selectionStageRules = {
    // 大一的選課規定
    "1": {
        "stages": [
            { name: "初選一", language: true, crossCollege: true, general: true, service: false, applied: false, sportRequired: true, sportElective: false },
            { name: "初選二", language: true, crossCollege: true, general: true, service: false, applied: true, sportRequired: true, sportElective: false },
            { name: "加退選一", language: true, crossCollege: true, general: true, service: false, applied: true, sportRequired: true, sportElective: false },
            { name: "加退選二", language: true, crossCollege: true, general: true, service: false, applied: true, sportRequired: true, sportElective: false },
            { name: "異常處理", language: "限特定情況", crossCollege: "限特定情況", general: "限特定情況", service: "限特定情況", applied: "限特定情況", sportRequired: "限特定情況", sportElective: "限特定情況" }
        ],
        "notes": [
            "語文課程、服務學習：當學期選上「一門」為限",
            "跨院選修及博雅課程：初選階段選上「一門」為限，在加退選階段則可以加選第二門",
            "初選二及加退選二階段可加選未選上類別之課程",
            "異常處理非正常選課階段，需符合特定事由及程序（課程異動、未選上必修、影響畢業等，服務學習、博雅、英語文課程異常處理需額外取得加簽貼紙）"
        ]
    },
    // 大二的選課規定
    "2": {
        "stages": [
            { name: "初選一", language: true, crossCollege: true, general: true, service: true, applied: false, sportRequired: true, sportElective: false },
            { name: "初選二", language: true, crossCollege: true, general: true, service: true, applied: true, sportRequired: true, sportElective: false },
            { name: "加退選一", language: true, crossCollege: true, general: true, service: true, applied: true, sportRequired: true, sportElective: false },
            { name: "加退選二", language: true, crossCollege: true, general: true, service: true, applied: true, sportRequired: true, sportElective: false },
            { name: "異常處理", language: "限特定情況", crossCollege: "限特定情況", general: "限特定情況", service: "限特定情況", applied: "限特定情況", sportRequired: "限特定情況", sportElective: "限特定情況" }
        ],
        "notes": [
            "語文課程、服務學習：當學期選上「一門」為限",
            "跨院選修及博雅課程：初選階段選上「一門」為限，在加退選階段則可以加選第二門",
            "初選二及加退選二階段：可加選未選上類別之課程",
            "異常處理階段：本階段非正常選課階段，需符合特定事由及程序（課程異動、未選上必修、影響畢業等，服務學習、博雅、英語文課程異常處理需額外取得加簽貼紙）"
        ]
    },
    // 大三的選課規定
    "3": {
        "stages": [
            { name: "初選一", language: true, crossCollege: true, general: true, service: true, applied: false, sportRequired: false, sportElective: true },
            { name: "初選二", language: true, crossCollege: true, general: true, service: true, applied: true, sportRequired: false, sportElective: true },
            { name: "加退選一", language: true, crossCollege: true, general: true, service: true, applied: true, sportRequired: true, sportElective: true },
            { name: "加退選二", language: true, crossCollege: true, general: true, service: true, applied: true, sportRequired: true, sportElective: true },
            { name: "異常處理", language: "限特定情況", crossCollege: "限特定情況", general: "限特定情況", service: "限特定情況", applied: "限特定情況", sportRequired: "限特定情況", sportElective: "限特定情況" }
        ],
        "notes": [
            "語文課程、服務學習：當學期選上「一門」為限",
            "跨院選修及博雅課程：初選階段選上「一門」為限，在加退選階段則可以加選第二門",
            "初選二及加退選二階段：可加選未選上類別之課程",
            "異常處理階段：本階段非正常選課階段，需符合特定事由及程序（課程異動、未選上必修、影響畢業等，服務學習、博雅、英語文課程異常處理需額外取得加簽貼紙）"
        ]
    },
    // 大四的選課規定
    "4": {
        "stages": [
            { name: "初選一", language: true, crossCollege: true, general: true, service: true, applied: false, sportRequired: false, sportElective: true },
            { name: "初選二", language: true, crossCollege: true, general: true, service: true, applied: true, sportRequired: false, sportElective: true },
            { name: "加退選一", language: true, crossCollege: true, general: true, service: true, applied: true, sportRequired: true, sportElective: true },
            { name: "加退選二", language: true, crossCollege: true, general: true, service: true, applied: true, sportRequired: true, sportElective: true },
            { name: "異常處理", language: "限特定情況", crossCollege: "限特定情況", general: "限特定情況", service: "限特定情況", applied: "限特定情況", sportRequired: "限特定情況", sportElective: "限特定情況" }
        ],
        "notes": [
            "語文課程、服務學習：當學期選上「一門」為限",
            "跨院選修及博雅課程：初選階段選上「一門」為限，在加退選階段則可以加選第二門",
            "初選二及加退選二階段：可加選未選上類別之課程",
            "異常處理階段：本階段非正常選課階段，需符合特定事由及程序（課程異動、未選上必修、影響畢業等，服務學習、博雅、英語文課程異常處理需額外取得加簽貼紙）"
        ]
    },
    // 碩士班的選課規定
    "5": {
        "stages": [
            { name: "初選一", language: false, crossCollege: false, general: false, service: false, applied: false, sportRequired: false, sportElective: false },
            { name: "初選二", language: false, crossCollege: false, general: false, service: false, applied: false, sportRequired: false, sportElective: false },
            { name: "加退選一", language: true, crossCollege: true, general: true, service: false, applied: true, sportRequired: true, sportElective: true },
            { name: "加退選二", language: true, crossCollege: true, general: true, service: false, applied: true, sportRequired: true, sportElective: true },
            { name: "異常處理", language: "限特定情況", crossCollege: "限特定情況", general: "限特定情況", service: "限特定情況", applied: "限特定情況", sportRequired: "限特定情況", sportElective: "限特定情況" }
        ],
        "notes": [
            "初選一、初選二階段：碩士班學生僅能選運動與健康選修",
            "加退選一階段：碩士班學生開始可加選通識課程",
            "異常處理階段：限特定情況才可申請選課"
        ]
    }
};

const iconMap = {
    language: "fa-comment-alt",
    crossCollege: "fa-exchange-alt",
    general: "fa-book",
    experiential: "fa-hands-helping",
    sportHealth: "fa-running",
    other: "fa-clipboard-list"
};

const gradeMap = {
    "1": "大一",
    "2": "大二",
    "3": "大三",
    "4": "大四",
    "5": "碩士班"
};

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const admissionYearSelect = document.getElementById('admissionYear');
    const gradeSelect = document.getElementById('grade');
    const resultsSection = document.getElementById('resultsSection');
    const ruleCards = document.getElementById('ruleCards');
    const creditTable = document.getElementById('creditTable').querySelector('tbody');
    const stageTable = document.getElementById('stageTable').querySelector('tbody');
    const yearGradeBadge = document.getElementById('yearGradeBadge');

    initExpandableSections();

    searchButton.addEventListener('click', function () {
        const admissionYear = admissionYearSelect.value;
        const grade = gradeSelect.value;

        if (!admissionYear || !grade) {
            showToast('請先選擇入學年度和年級', 'error');
            return;
        }

        resultsSection.style.display = 'block';

        ruleCards.innerHTML = '';
        creditTable.innerHTML = '';
        stageTable.innerHTML = '';

        yearGradeBadge.textContent = `${admissionYear} 學年度 ${gradeMap[grade]}`;

        displayRuleCards(admissionYear, grade);
        displayCreditTable(admissionYear, grade);
        displayStageTable(grade);

        // expandAllSections();
        toggleSectionsByGrade(grade);

        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // 根據年級控制區塊顯示與隱藏
    function toggleSectionsByGrade(grade) {
        const isMaster = grade === "5"; // 碩士班

        const rulesSummary = document.querySelector('.rules-summary');
        const creditTableHeader = document.querySelector('[data-target="creditTableSection"]');
        const creditTableSection = document.getElementById('creditTableSection');
        const stageTableHeader = document.querySelector('[data-target="stageTableSection"]');
        const recommendationsHeader = document.querySelector('[data-target="recommendationsSection"]');
        const recommendationsSection = document.getElementById('recommendationsSection');

        if (isMaster) {
            // 碩士班只顯示選課階段規定
            expandAllSections();
            rulesSummary.style.display = 'none';
            creditTableHeader.style.display = 'none';
            creditTableSection.style.display = 'none';
            stageTableHeader.style.display = 'flex';
            recommendationsHeader.style.display = 'none';
            recommendationsSection.style.display = 'none';
        } else {
            // 其他年級全部顯示
            rulesSummary.style.display = 'block';
            creditTableHeader.style.display = 'flex';
            creditTableSection.style.display = '';
            stageTableHeader.style.display = 'flex';
            recommendationsHeader.style.display = 'flex';
            recommendationsSection.style.display = '';
        }
    }

    function displayRuleCards(year, grade) {
        if (grade === "5") return; // 碩士班不需要顯示規則卡片

        const rules = rulesDatabase[year];

        const cardsData = [
            { title: '語文素養', icon: iconMap.language, credit: rules.creditTable[0].credits },
            { title: '跨院選修', icon: iconMap.crossCollege, credit: rules.creditTable[1].credits },
            { title: '博雅課程', icon: iconMap.general, credit: rules.creditTable[2].credits },
            { title: '體驗性課程', icon: iconMap.experiential, credit: rules.creditTable[3].credits },
            { title: '運動與健康', icon: iconMap.sportHealth, credit: rules.creditTable[4].credits },
            { title: '其他規定', icon: iconMap.other, content: rules.otherRequirements }
        ];

        cardsData.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'rule-card';
            if (card.title === '其他規定') {
                cardElement.innerHTML = `
                <h4>${card.title}</h4>
                <p>${card.content}</p>
            `;
            }
            else {
                cardElement.innerHTML = `
                <h4>${card.title}</h4>
                <p class="credit-num">${card.credit}</p>
                <p>學分</p>      
            `;
            }
            ruleCards.appendChild(cardElement);
        });
    }

    function displayCreditTable(year, grade) {
        // 碩士班不需要顯示學分表
        if (grade === "5") return;

        const rules = rulesDatabase[year];

        rules.creditTable.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.category}</td>
                <td>${item.credits}</td>
                <td>${item.description}</td>
            `;
            creditTable.appendChild(row);
        });
    }

    function displayStageTable(grade) {
        const gradeRules = selectionStageRules[grade];

        if (gradeRules) {
            gradeRules.stages.forEach(stage => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${stage.name}</td>
                    <td>${renderStatus(stage.language)}</td>
                    <td>${renderStatus(stage.crossCollege)}</td>
                    <td>${renderStatus(stage.general)}</td>
                    <td>${renderStatus(stage.service)}</td>
                    <td>${renderStatus(stage.applied)}</td>
                    <td>${renderStatus(stage.sportRequired)}</td>
                    <td>${renderStatus(stage.sportElective)}</td>
                `;
                stageTable.appendChild(row);
            });

            const stageNote = document.getElementById('stageNote');
            const notesHtml = gradeRules.notes.map(note => `<li>${note}</li>`).join('');
            stageNote.innerHTML = `
                <i class="fas fa-info-circle"></i>
                <div>
                    <strong>備註</strong>
                    <ul>${notesHtml}</ul>
                </div>`;
        }
    }

    function renderStatus(status) {
        if (status === true) {
            return '<span class="check-icon"><i class="far fa-check-circle"></i></span>';
        } else if (status === false) {
            return '<span class="cross-icon"><i class="far fa-times-circle"></i></span>';
        } else {
            return `<span class="special-note">${status}</span>`;
        }
    }

    function initExpandableSections() {
        const headers = document.querySelectorAll('.section-header');

        headers.forEach(header => {
            const targetId = header.getAttribute('data-target');
            const content = document.getElementById(targetId);

            content.style.display = 'none';

            header.addEventListener('click', function () {
                if (content && content.style) {
                    if (content.style.display === 'none' || content.style.display === '') {
                        content.style.display = 'block';
                        content.classList.add('active');
                        header.classList.add('active');
                    } else {
                        content.style.display = 'none';
                        content.classList.remove('active');
                        header.classList.remove('active');
                    }
                }
            });
        });
    }

    function expandAllSections() {
        const headers = document.querySelectorAll('.section-header');

        headers.forEach(header => {
            const targetId = header.getAttribute('data-target');
            const content = document.getElementById(targetId);

            content.style.display = 'block';
            content.classList.add('active');
            header.classList.add('active');
        });
    }

    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
});