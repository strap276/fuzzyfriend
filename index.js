// Accordion functionality
const accordionItems = document.querySelectorAll('.accordion-item');
        
accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    
    header.addEventListener('click', () => {
        item.classList.toggle('active');
        
        // Close other items when one is opened
        if (item.classList.contains('active')) {
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        }
    });
});

// FAQ Accordion functionality
const faqItems = document.querySelectorAll('.accordion-item');

faqItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        item.classList.toggle('active');

        // Toggle the accordion content visibility
        const content = item.querySelector('.accordion-content');
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }

        // Close other items when one is opened
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.accordion-content').style.maxHeight = '0';
            }
        });
    });
});

// Modal functionality
function showModal(ferretName) {
    const modal = document.getElementById('adoptionModal');
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.textContent = `Adopt ${ferretName}`;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('adoptionModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('adoptionModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Form submission
document.getElementById('adoptionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your application! We will contact you within 2-3 business days.');
    closeModal();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Toggle navigation menu for mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close menu when clicking outside
window.addEventListener('click', function (e) {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});
