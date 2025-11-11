console.log('research.js loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    try {
        // Modal elements
        const modal = document.getElementById('researchModal');
        if (!modal) {
            throw new Error('Modal element not found');
        }

        const closeBtn = modal.querySelector('.close-btn');
        if (!closeBtn) {
            throw new Error('Close button not found');
        }

        const modalTitle = document.getElementById('modalTitle');
        const modalFunding = document.getElementById('modalFunding');
        const modalPeriod = document.getElementById('modalPeriod');
        const modalDesc = document.getElementById('modalDesc');
        const modalPublications = document.getElementById('modalPublications');

        // Add click event to all detail buttons
        const detailButtons = document.querySelectorAll('.details-btn');
        console.log('Found detail buttons:', detailButtons.length);

        if (detailButtons.length === 0) {
            console.warn('No detail buttons found');
        }

        detailButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                try {
                    console.log('Button clicked');
                    
                    // Get data from button attributes
                    const title = btn.getAttribute('data-title');
                    const funding = btn.getAttribute('data-funding');
                    const period = btn.getAttribute('data-period');
                    const desc = btn.getAttribute('data-desc');
                    
                    if (!title || !funding || !period || !desc) {
                        throw new Error('Missing required data attributes');
                    }

                    let pubs = [];
                    try {
                        const pubsData = btn.getAttribute('data-pubs');
                        if (pubsData) {
                            pubs = JSON.parse(pubsData);
                        }
                    } catch (e) {
                        console.error('Error parsing publications data:', e);
                        pubs = [];
                    }

                    // Update modal content
                    modalTitle.textContent = title;
                    modalFunding.innerHTML = '<strong>Funding:</strong> ' + funding;
                    modalPeriod.innerHTML = '<strong>Period:</strong> ' + period;
                    modalDesc.textContent = desc;

                    // Handle publications
                    if (pubs && pubs.length > 0) {
                        modalPublications.innerHTML = '<h4>Related Publications</h4><ul>' +
                            pubs.map(pub => {
                                if (!pub.title) {
                                    console.warn('Publication missing title');
                                    return '';
                                }
                                return pub.url ? 
                                    `<li><a href="${pub.url}" target="_blank" rel="noopener">${pub.title}</a></li>` : 
                                    `<li>${pub.title}</li>`;
                            }).join('') +
                            '</ul>';
                    } else {
                        modalPublications.innerHTML = '';
                    }

                    // Show modal
                    modal.style.display = 'block';
                    console.log('Modal displayed');
                } catch (e) {
                    console.error('Error handling button click:', e);
                    alert('An error occurred while displaying the details. Please try again.');
                }
            });
        });

        // Close button click event
        closeBtn.onclick = function() {
            try {
                modal.style.display = 'none';
                console.log('Modal closed by close button');
            } catch (e) {
                console.error('Error closing modal:', e);
            }
        };

        // Click outside modal to close
        window.onclick = function(event) {
            try {
                if (event.target == modal) {
                    modal.style.display = 'none';
                    console.log('Modal closed by clicking outside');
                }
            } catch (e) {
                console.error('Error handling outside click:', e);
            }
        };
    } catch (e) {
        console.error('Error initializing research page:', e);
    }
}); 