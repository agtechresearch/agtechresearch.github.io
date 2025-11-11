// Members Tab Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Tab switching functionality
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Show corresponding content
            const targetContent = document.querySelector(`[data-content="${targetTab}"]`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Clone student cards from "all" tab to "current" tab
    function populateCurrentTab() {
        const allTab = document.querySelector('[data-content="all"]');
        const currentTab = document.querySelector('[data-content="current"]');

        if (!allTab || !currentTab) return;

        // Get all student grids from "all" tab
        const phdGrid = allTab.querySelector('.phd-students .student-grid');
        const mastersGrid = allTab.querySelector('.masters-students .student-grid');
        const undergraduateGrid = allTab.querySelector('.undergraduate-students .student-grid');

        // Get target grids in "current" tab
        const currentPhdGrid = currentTab.querySelectorAll('.student-grid')[0];
        const currentMastersGrid = currentTab.querySelectorAll('.student-grid')[1];
        const currentUndergraduateGrid = currentTab.querySelectorAll('.student-grid')[2];

        // Clone and append students
        if (phdGrid && currentPhdGrid) {
            const phdCards = phdGrid.querySelectorAll('.student-card');
            phdCards.forEach(card => {
                currentPhdGrid.appendChild(card.cloneNode(true));
            });
        }

        if (mastersGrid && currentMastersGrid) {
            const mastersCards = mastersGrid.querySelectorAll('.student-card');
            mastersCards.forEach(card => {
                currentMastersGrid.appendChild(card.cloneNode(true));
            });
        }

        if (undergraduateGrid && currentUndergraduateGrid) {
            const undergraduateCards = undergraduateGrid.querySelectorAll('.student-card');
            undergraduateCards.forEach(card => {
                currentUndergraduateGrid.appendChild(card.cloneNode(true));
            });
        }
    }

    // Initialize current tab content
    populateCurrentTab();
});
