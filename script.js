// script.js - Advanced functionality for the website

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Contact form validation and submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email.');
        return;
    }
    
    alert('Thank you! Your message has been sent.');
    this.reset(); // Clear form
});

// Newsletter form submission
document.querySelector('.newsletter').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('newsletter-email').value.trim();
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email.');
        return;
    }
    alert('Subscribed! Thank you.');
    this.reset();
});

// Modal functionality for portfolio
function openModal(project) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-desc');
    
    if (project === 'project1') {
        modalImg.src = 'images/project1.jpg';
        modalDesc.textContent = 'Detailed view of our custom henna tattoo design for a bridal event.';
    } else if (project === 'project2') {
        modalImg.src = 'images/project2.jpg';
        modalDesc.textContent = 'Branding illustration created for a tech startup.';
    } else if (project === 'project3') {
        modalImg.src = 'images/project3.jpg';
        modalDesc.textContent = 'Interior design mood board for a modern living space.';
    }
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Back to top button
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    if (window.pageYOffset > 100) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Close modal on outside click
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});