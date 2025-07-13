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

            console.log('ExemptionGuide has been initialized');
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
                this.showNotification('Please complete all required fields', 'warning');
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
                console.error('Error generating guide:', error);
                this.showNotification('An error occurred while generating the guide, please try again', 'error');
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
                disclaimers.push('Fewer credits cannot be transferred for more credits (however, multiple courses can be transferred for one NSYSU course).');
                disclaimers.push('For students transferring from other universities, or those approved for overseas study, inter-university courses, or dual-degree programs: a minimum grade of 70 is required for courses to be eligible for transfer.');
            } else if (status === 'readmission' || status === 'transfer') {
                disclaimers.push('For readmitted NSYSU students or students transferring between departments: a minimum grade of 60 is required for courses to be eligible for transfer.');
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
                    <h4><i class="fas fa-file-alt"></i> Credit Transfer Application Forms</h4>
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
                    <h4><i class="fas fa-book"></i> Syllabus</h4>
                    <ul>
                        <li>Syllabus of the NSYSU course to be transferred.</li>
                        <li>Syllabus from the original institution for the year the course was taken.</li>
                        ${this.studentStatus === 'readmission' || this.studentStatus === 'transfer' ? '<li>For readmitted/transfer students within NSYSU, no syllabus is required if transferring an identical course.</li>' : ''}
                    </ul>
                </div>
                <div class="prep-item">
                    <h4><i class="fas fa-graduation-cap"></i> Original Transcript, Test Score Report</h4>
                    <ul>
                        <li><strong>1 original copy</strong></li>
                        ${formsCount > 1 ? `<li><strong>${formsCount - 1} photocopies</strong> (for other application forms)</li><li>You must indicate which application form has the original transcript attached.</li>` : ''}
                        <li>Transfer students must check if the transcript is marked "Withdrawal" (Leave of absence does not count).</li>
                        ${courses.includes('english') ? '<li>If using test scores to transfer English courses, please provide one original and one photocopy of the test score report.</li>' : ''}
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
                'chinese': '【Critical Thinking & Expression】【Practical Experience】Credit Transfer Application Form',
                'experience': '【Critical Thinking & Expression】【Practical Experience】Credit Transfer Application Form',
                'interdisciplinary_liberal': '【Inter-college Electives】【Liberal Arts】Credit Transfer Application Form',
                'sports': '【Sports and Health】Credit Transfer Application Form',
                'english': '【English Courses】Credit Transfer Application Form',
                'university_way': '【The Way of Great Learning】Credit Transfer Application Form',
                'humanities_science': '【Program in Interdisciplinary】<a href="https://oaa.nsysu.edu.tw/p/406-1003-19699,r706.php?Lang=en" target="_blank">General NSYSU Student Credit Transfer Application Form</a>'
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
                    title: 'Critical thinking and expression in Chinese Courses',
                    icon: 'fas fa-pen-fancy',
                    rules: [
                        'Review is based on syllabus similarity.',
                        'Must meet the course standards and learning objectives.'
                    ]
                },
                'experience': {
                    title: 'Practical Experience Courses',
                    icon: 'fas fa-hands-helping',
                    rules: [
                        'Service Learning Course: Must include 18 hours of course content and at least 18 hours of community service (excluding training hours). Proof of service hours is required if not specified in the syllabus. This can be transferred for 1 credit.',
                        'Applied Courses: Only available for transfer by students who were previously enrolled at NSYSU. Not available for students transferring from other universities.',
                        'All-Out Defense Education Courses: Students should apply for military service reduction at their original school.'
                    ]
                },
                'interdisciplinary_liberal': {
                    title: 'Inter-college electives / Liberal Arts Courses',
                    icon: 'fas fa-exchange-alt',
                    rules: [
                        'A maximum of 6 credits can be transferred for each category.',
                        'Students enrolled from the year 111 (2022) onwards who have obtained official certification of intermediate or higher proficiency in local languages (e.g., Taiwanese Hokkien, Hakka, or indigenous languages) can transfer up to an additional 2 credits, with a total limit of 8 credits.',
                        'The course to be transferred must, in principle, be one that has been offered at NSYSU within the last 4 years (8 semesters), counting from the semester of application.',
                        'Do not transfer courses from your own college (e.g., a student from the Department of Chinese Literature cannot transfer an Inter-college elective from the College of Liberal Arts).',
                        'If you wish to transfer multiple courses, please rank them in order of preference (they will be reviewed for transfer in that order).'
                    ]
                },
                'sports': {
                    title: 'Physical Education Courses',
                    icon: 'fas fa-running',
                    rules: [
                        'PE courses are reviewed based on syllabus similarity (0-credit courses can be transferred).',
                        "For beginner's swimming, after the transfer is approved, you must pass a 25-meter swimming test to receive credit.",
                        'If the transfer is not approved, you can directly take the 50-meter swimming test offered each semester. Please check the Si Wan College Center for Sport and Health Education announcements for the exact time.'
                    ]
                },
                'university_way': {
                    title: 'The Way of Great Learning',
                    icon: 'fas fa-chalkboard-teacher',
                    rules: [
                        'Only lectures recognized by NSYSU are eligible for transfer. Lectures from other universities or abroad cannot be transferred.'
                    ]
                },
                'english': {
                    title: 'English Courses',
                    icon: 'fas fa-language',
                    rules: [
                        'Test scores can be used for transfer. One original and one photocopy of the test score report are required (the original will be returned after verification).'
                    ]
                },
                'humanities_science': {
                    title: 'Program in Interdisciplinary Courses',
                    icon: 'fas fa-atom',
                    rules: [
                        'Follow the credit transfer regulations announced by the Office of Academic Affairs.'
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
                    this.elements.generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
                } else {
                    this.elements.generateBtn.disabled = false;
                    this.elements.generateBtn.innerHTML = '<i class="fas fa-arrow-right"></i> Generate Your Personalized Transfer Process';
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
            console.log('Credit Transfer Guide system initialized successfully');
        } catch (error) {
            console.error('Error initializing Credit Transfer Guide system:', error);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeGuide);
    } else {
        initializeGuide();
    }

})();