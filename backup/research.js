console.log('research.js loaded');
// Modal popup for research details

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('researchModal');
  const closeBtn = modal.querySelector('.close-btn');
  const modalTitle = document.getElementById('modalTitle');
  const modalFunding = document.getElementById('modalFunding');
  const modalPeriod = document.getElementById('modalPeriod');
  const modalDesc = document.getElementById('modalDesc');
  const modalPublications = document.getElementById('modalPublications');

  document.querySelectorAll('.details-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      modalTitle.textContent = btn.getAttribute('data-title');
      modalFunding.innerHTML = '<strong>Funding:</strong> ' + btn.getAttribute('data-funding');
      modalPeriod.innerHTML = '<strong>Period:</strong> ' + btn.getAttribute('data-period');
      modalDesc.textContent = btn.getAttribute('data-desc');
      // Publications
      const pubs = JSON.parse(btn.getAttribute('data-pubs'));
      if (pubs && pubs.length > 0) {
        modalPublications.innerHTML = '<h4>Related Publications</h4><ul>' +
          pubs.map(pub => pub.url ? `<li><a href="${pub.url}" target="_blank" rel="noopener">${pub.title}</a></li>` : `<li>${pub.title}</li>`).join('') +
          '</ul>';
      } else {
        modalPublications.innerHTML = '';
      }
      modal.style.display = 'block';
    });
  });

  closeBtn.onclick = function() {
    modal.style.display = 'none';
  };
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}); 