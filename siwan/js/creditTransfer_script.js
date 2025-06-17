(function () {
    'use strict';

    if (window.ExemptionGuideOptimized) {
        return;
    }

    class ExemptionGuideOptimized {
        constructor() {
            this.selectedCourses = new Set();
            this.studentStatus = '';
            this.currentStep = 1;
            this.totalSteps = 6;
            this.isInitialized = false;

            this.elements = {};

            this.generateGuide = this.generateGuide.bind(this);
            this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
            this.handleStudentStatusChange = this.handleStudentStatusChange.bind(this);
            this.handleKeydown = this.handleKeydown.bind(this);
            this.handleResize = this.handleResize.bind(this);

            this.init();
        }

        init() {
            if (this.isInitialized) return;

            this.cacheElements();
            this.bindEvents();
            this.setupAccessibility();
            this.isInitialized = true;

            console.log('ExemptionGuide 已初始化');
        }

        cacheElements() {
            this.elements = {
                generateBtn: document.getElementById('generateGuideBtn'),
                studentStatusSelect: document.getElementById('studentStatus'),
                progressIndicator: document.getElementById('progressIndicator'),
                progressFill: document.getElementById('progressFill'),

                inputSection: document.getElementById('inputSection'),
                otherDeptOnlySection: document.getElementById('otherDeptOnlySection'),
                preparationSection: document.getElementById('preparationSection'),
                downloadSection: document.getElementById('downloadSection'),
                fillFormsSection: document.getElementById('fillFormsSection'),
                submitSection: document.getElementById('submitSection'),
                completionSection: document.getElementById('completionSection'),
                additionalNotesSection: document.getElementById('additionalNotesSection'),

                preparationSummary: document.getElementById('preparationSummary'),
                formsNeeded: document.getElementById('formsNeeded'),
                exemptionRules: document.getElementById('exemptionRules'),

                checkboxes: document.querySelectorAll('input[type="checkbox"]'),
                progressSteps: document.querySelectorAll('.progress-steps .step')
            };
        }

        bindEvents() {
            if (this.elements.generateBtn) {
                this.elements.generateBtn.addEventListener('click', this.generateGuide);
            }

            if (this.elements.studentStatusSelect) {
                this.elements.studentStatusSelect.addEventListener('change', this.handleStudentStatusChange);
            }

            document.addEventListener('change', (e) => {
                if (e.target.type === 'checkbox' && e.target.hasAttribute('data-form')) {
                    this.handleCheckboxChange(e.target);
                }
            });

            document.addEventListener('click', (e) => {
                if (e.target.matches('a[href^="#"]')) {
                    e.preventDefault();
                    this.smoothScrollTo(e.target.getAttribute('href'));
                }
            });

            document.addEventListener('keydown', this.handleKeydown);

            window.addEventListener('resize', this.handleResize);
        }

        handleStudentStatusChange(e) {
            this.studentStatus = e.target.value;
            this.validateForm();
        }

        handleCheckboxChange(checkbox) {
            const value = checkbox.value;

            if (checkbox.checked) {
                this.selectedCourses.add(value);
            } else {
                this.selectedCourses.delete(value);
            }

            this.validateForm();
            this.updateCheckboxAccessibility(checkbox);
        }

        validateForm() {
            const isValid = this.studentStatus && this.selectedCourses.size > 0;

            if (this.elements.generateBtn) {
                this.elements.generateBtn.disabled = !isValid;
                this.elements.generateBtn.setAttribute('aria-disabled', !isValid);
            }

            return isValid;
        }

        generateGuide() {
            if (!this.validateForm()) {
                this.showNotification('請完成所有必填欄位', 'warning');
                return;
            }

            try {
                this.showLoadingState(true);

                if (this.selectedCourses.size === 1 && this.selectedCourses.has('other_department')) {
                    setTimeout(() => {
                        this.showOtherDeptOnly();
                        this.showLoadingState(false);
                    }, 500);
                    return;
                }

                const generalEducationCourses = Array.from(this.selectedCourses)
                    .filter(course => course !== 'other_department');

                if (generalEducationCourses.length === 0) {
                    setTimeout(() => {
                        this.showOtherDeptOnly();
                        this.showLoadingState(false);
                    }, 500);
                    return;
                }

                setTimeout(() => {
                    this.showMainGuide(generalEducationCourses);
                    this.showLoadingState(false);
                }, 800);

            } catch (error) {
                console.error('生成指南時發生錯誤:', error);
                this.showNotification('生成指南時發生錯誤，請重試', 'error');
                this.showLoadingState(false);
            }
        }

        showOtherDeptOnly() {
            this.hideAllSections();
            this.showSection('otherDeptOnlySection');
            this.scrollToSection('otherDeptOnlySection');
        }

        showMainGuide(courses) {
            this.hideAllSections();

            this.generatePreparationSection(courses);
            this.generateDownloadSection(courses);
            this.generateFillFormsSection(courses);

            const sectionsToShow = [
                'preparationSection',
                'downloadSection',
                'fillFormsSection',
                'submitSection',
                'completionSection',
                'additionalNotesSection'
            ];

            sectionsToShow.forEach(sectionId => {
                this.showSection(sectionId);
            });

            // this.showProgressIndicator();
            this.updateProgress(2);
            this.scrollToSection('preparationSection');
        }

        hideAllSections() {
            const sections = [
                'otherDeptOnlySection',
                'preparationSection',
                'downloadSection',
                'fillFormsSection',
                'submitSection',
                'completionSection',
                'additionalNotesSection'
            ];

            sections.forEach(id => {
                this.hideSection(id);
            });
        }

        showSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.remove('hidden');
                section.setAttribute('aria-hidden', 'false');
            }
        }

        hideSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add('hidden');
                section.setAttribute('aria-hidden', 'true');
            }
        }

        showProgressIndicator() {
            if (this.elements.progressIndicator) {
                this.elements.progressIndicator.classList.remove('hidden');
            }
        }

        updateProgress(step) {
            this.currentStep = Math.max(1, Math.min(step, this.totalSteps));

            if (this.elements.progressFill) {
                const percentage = (this.currentStep / this.totalSteps) * 100;
                this.elements.progressFill.style.width = `${percentage}%`;
            }

            if (this.elements.progressSteps) {
                this.elements.progressSteps.forEach((step, index) => {
                    const stepNumber = index + 1;
                    step.classList.remove('active', 'completed');

                    if (stepNumber < this.currentStep) {
                        step.classList.add('completed');
                    } else if (stepNumber === this.currentStep) {
                        step.classList.add('active');
                    }
                });
            }
        }

        getDisclaimersByStatus(status) {
            const disclaimers = [];
            if (status === 'external' || status === 'abroad') {
                disclaimers.push('學分不得以少抵多 (可多門課程抵免本校1門課程)。');
                disclaimers.push('原為外校生入（轉）學本校者或經本校核准出國研修、校際選課或修讀雙聯學位制者：已修習成績須達七十分以上，始可提出抵免申請。');
            } else if (status === 'readmission' || status === 'transfer') {
                disclaimers.push('原為本校生入（轉）學本校者或轉系生(含降轉生)：已修習成績達六十分以上，均可提出抵免申請。');
            }
            return disclaimers;
        }

        generatePreparationSection(courses) {
            if (!this.elements.preparationSummary) return;

            const formsCount = this.getFormsCount(courses);
            const formsList = this.getFormsList(courses);
            const disclaimers = this.getDisclaimersByStatus(this.studentStatus);

            const preparationHTML = `
                <div class="prep-item">
                    <h4><i class="fas fa-file-alt"></i> 抵免申請單</h4>
                    <ul>
                        ${formsList.map(form => {
                if (form.includes('<a href')) {
                    return `<li>${form}</li>`;
                }
                return `<li>${this.escapeHtml(form)}</li>`;
            }).join('')
                }
                    </ul>
                </div>
                <div class="prep-item">
                    <h4><i class="fas fa-book"></i> 課程大綱</h4>
                    <ul>
                        <li>要抵免的中山課程課綱</li>
                        <li>原校的當年度修課課程課綱</li>
                        ${this.studentStatus === 'readmission' || this.studentStatus === 'transfer' ? '<li>原為本校生入(轉)學本校者抵同課程免附課綱</li>' : ''}
                    </ul>
                </div>
                <div class="prep-item">
                    <h4><i class="fas fa-graduation-cap"></i> 原校成績單、檢定成績單</h4>
                    <ul>
                        <li><strong>1 份正本</strong></li>
                        ${formsCount > 1 ? `<li><strong>${formsCount - 1} 份影本</strong>（其他抵免單使用）</li><li>需標註正本在哪份抵免單</li>` : ''}
                        <li>轉校生需注意是否有註記"退學"（休學不算）</li>
                        ${courses.includes('english') ? '<li>如以檢定成績抵英語文課程，請附檢定成績單正本及影本各一份</li>' : ''}
                        ${disclaimers.map(d => `<li>${this.escapeHtml(d)}</li>`).join('')}
                    </ul>
                </div>
            `;

            this.elements.preparationSummary.innerHTML = preparationHTML;
        }

        generateDownloadSection(courses) {
            if (!this.elements.formsNeeded) return;

            const formsList = this.getFormsList(courses);

            const formsHTML = formsList.map(form => {
                if (form.includes('<a href')) {
                    return `
                        <div class="form-item">
                            <h4><i class="fas fa-file-pdf"></i> ${form}</h4>
                        </div>
                    `;
                }
                return `
                    <div class="form-item">
                        <h4><i class="fas fa-file-pdf"></i> ${this.escapeHtml(form)}</h4>
                    </div>
                `;
            }).join('');

            this.elements.formsNeeded.innerHTML = formsHTML;
        }

        generateFillFormsSection(courses) {
            if (!this.elements.exemptionRules) return;

            let rulesHTML = '';

            courses.forEach(courseType => {
                const rules = this.getCourseRules(courseType);
                if (rules) {
                    rulesHTML += `
                        <div class="rule-section">
                            <div class="rule-header">
                                <i class="${rules.icon}"></i>
                                ${this.escapeHtml(rules.title)}
                            </div>
                            <div class="rule-content">
                                <ul>
                                    ${rules.rules.map(rule => `<li>${this.escapeHtml(rule)}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `;
                }
            });

            this.elements.exemptionRules.innerHTML = rulesHTML;
        }

        getFormsCount(courses) {
            // 檢查是否包含中文思辨與表達或體驗性課程，合併計算為 1 份
            const hasChinese = courses.includes('chinese');
            const hasExperience = courses.includes('experience');
            const chineseExperienceCount = (hasChinese || hasExperience) ? 1 : 0;

            const otherCourses = courses.filter(course =>
                !['chinese', 'experience'].includes(course) &&
                ['interdisciplinary_liberal', 'sports', 'english', 'university_way', 'humanities_science'].includes(course)
            );

            return chineseExperienceCount + otherCourses.length;
        }

        getFormsList(courses) {
            const formsMap = {
                'chinese': '【中文思辨與表達】【體驗性課程】抵免申請單',
                'experience': '【中文思辨與表達】【體驗性課程】抵免申請單',
                'interdisciplinary_liberal': '【跨院選修】【博雅課程】抵免申請單',
                'sports': '【運動與健康課程】抵免申請單',
                'english': '【英語文課程】抵免申請單',
                'university_way': '【大學之道】抵免申請單',
                'humanities_science': '【人科學程】<a href="https://oaa.nsysu.edu.tw/p/406-1003-19699,r706.php?Lang=zh-tw" target="_blank">通用國立中山大學學生抵免學分申請表</a>'
            };

            const forms = new Set();

            courses.forEach(course => {
                if (formsMap[course]) {
                    forms.add(formsMap[course]);
                }
            });

            return Array.from(forms);
        }

        getCourseRules(courseType) {
            const rulesMap = {
                'chinese': {
                    title: '中文思辨與表達',
                    icon: 'fas fa-pen-fancy',
                    rules: [
                        '依照課綱相似度審查',
                        '需符合課程標準與學習目標'
                    ]
                },
                'experience': {
                    title: '體驗性課程',
                    icon: 'fas fa-hands-helping',
                    rules: [
                        '服務學習課程：須符合本校服務學習課程18小時修習內容及至少18小時的社區服務(不含訓練時數，若課綱看不出來服務時數須出示服務時數證明)，方可抵免1學分',
                        '應用性課程：原為本校生入（轉）學本校者可申辦抵免，外校生入（轉）學者不得申辦抵免',
                        '全民國防課程：應至原開課學校申請役期折抵'
                    ]
                },
                'interdisciplinary_liberal': {
                    title: '跨院選修 / 博雅課程',
                    icon: 'fas fa-exchange-alt',
                    rules: [
                        '分別各至多抵免 6 學分',
                        '111年入學者另取得官方認證閩南語、客語或原住民族等本土語言能力達中級以上，可額外抵免至多2學分，總計上限8學分',
                        '須提出申請抵免之當學期（含）算起，4年（8個學期內本校已開設過之課程為原則）',
                        '請勿抵免自己學院的課程（例如：中文系學生不能抵免跨文學院課程）',
                        '如有多門課程想抵免，請自己排序（會依照優先順序審查抵免）'
                    ]
                },
                'sports': {
                    title: '體育課程',
                    icon: 'fas fa-running',
                    rules: [
                        '體育課依照課綱相似度來審查（0學分可抵免）',
                        '初級游泳抵免需待抵免審查通過後，並參加 25 公尺抵免游泳考試，方能取得游泳學分',
                        '若抵免審查未通過，可直接參加每學期開設的 50 公尺抵免游泳考試，確切時間請查看西灣學院運健中心公告'
                    ]
                },
                'university_way': {
                    title: '大學之道',
                    icon: 'fas fa-chalkboard-teacher',
                    rules: [
                        '可抵免場次僅限本校認列之場次，外校轉入生及國外演講場次無法抵免。'
                    ]
                },
                'english': {
                    title: '英語文課程',
                    icon: 'fas fa-language',
                    rules: [
                        '可以使用檢定成績抵免，需附檢定成績單正本及影本各一份（正本查驗無誤後會歸還）',
                    ]
                },
                'humanities_science': {
                    title: '人科學程課程',
                    icon: 'fas fa-atom',
                    rules: [
                        '依循教務處公告的抵免規定',
                    ]
                }
            };

            return rulesMap[courseType] || null;
        }

        scrollToSection(sectionId) {
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    element.setAttribute('tabindex', '-1');
                    element.focus();
                }
            }, 100);
        }

        smoothScrollTo(targetSelector) {
            const target = document.querySelector(targetSelector);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }

        showLoadingState(show) {
            if (this.elements.generateBtn) {
                if (show) {
                    this.elements.generateBtn.disabled = true;
                    this.elements.generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 規劃中...';
                } else {
                    this.elements.generateBtn.disabled = false;
                    this.elements.generateBtn.innerHTML = '<i class="fas fa-arrow-right"></i> 生成您的專屬抵免流程';
                }
            }
        }

        showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                padding: 1rem;
                border-radius: 8px;
                background: ${this.getNotificationColor(type)};
                color: white;
                min-width: 300px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                transform: translateX(100%);
                transition: transform 0.3s ease;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            `;

            notification.innerHTML = `
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${this.escapeHtml(message)}</span>
                <button style="background: none; border: none; color: white; margin-left: auto; cursor: pointer;">
                    <i class="fas fa-times"></i>
                </button>
            `;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 100);

            const closeBtn = notification.querySelector('button');
            const closeNotification = () => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            };

            closeBtn.addEventListener('click', closeNotification);
            setTimeout(closeNotification, 5000);
        }

        getNotificationIcon(type) {
            const icons = {
                'info': 'info-circle',
                'success': 'check-circle',
                'warning': 'exclamation-triangle',
                'error': 'exclamation-circle'
            };
            return icons[type] || 'info-circle';
        }

        getNotificationColor(type) {
            const colors = {
                'info': '#3B82F6',
                'success': '#10B981',
                'warning': '#F59E0B',
                'error': '#EF4444'
            };
            return colors[type] || '#3B82F6';
        }

        setupAccessibility() {
            this.elements.checkboxes.forEach(checkbox => {
                this.updateCheckboxAccessibility(checkbox);
            });

            if (this.elements.generateBtn) {
                this.elements.generateBtn.setAttribute('aria-describedby', 'form-validation-message');
            }
        }

        updateCheckboxAccessibility(checkbox) {
            const isChecked = checkbox.checked;
            checkbox.setAttribute('aria-checked', isChecked);

            const label = checkbox.closest('label');
            if (label) {
                label.setAttribute('aria-selected', isChecked);
            }
        }

        handleKeydown(event) {
            if (event.key === 'Escape') {
                const notifications = document.querySelectorAll('.notification');
                notifications.forEach(notification => {
                    const closeBtn = notification.querySelector('button');
                    if (closeBtn) {
                        closeBtn.click();
                    }
                });
            }
        }

        handleResize() {
            const notifications = document.querySelectorAll('.notification');
            notifications.forEach((notification, index) => {
                if (window.innerWidth <= 768) {
                    notification.style.left = '10px';
                    notification.style.right = '10px';
                    notification.style.top = `${20 + (index * 80)}px`;
                } else {
                    notification.style.left = 'auto';
                    notification.style.right = '20px';
                    notification.style.top = `${20 + (index * 80)}px`;
                }
            });
        }

        escapeHtml(text) {
            const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return text.replace(/[&<>"']/g, m => map[m]);
        }
    }

    window.ExemptionGuideOptimized = ExemptionGuideOptimized;

    function initializeGuide() {
        if (window.exemptionGuideInstance) {
            return;
        }

        try {
            window.exemptionGuideInstance = new ExemptionGuideOptimized();
            console.log('抵免指南系統已成功初始化');
        } catch (error) {
            console.error('初始化抵免指南系統時發生錯誤:', error);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeGuide);
    } else {
        initializeGuide();
    }

})();