// Navbar is always visible, no toggle needed// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const navToggle = document.getElementById('navToggle');
    const primaryNav = document.getElementById('primaryNav');
    
    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', function() {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true' ? false : true;
            navToggle.setAttribute('aria-expanded', expanded);
            primaryNav.classList.toggle('nav-open');
            
            // Prevent body scroll when menu is open on mobile
            if (primaryNav.classList.contains('nav-open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on a nav link
        const navLinks = primaryNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (primaryNav.classList.contains('nav-open')) {
                    primaryNav.classList.remove('nav-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }
            });
        });
    }
    
    // Close menu on window resize if open (prevents layout issues)
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && primaryNav && primaryNav.classList.contains('nav-open')) {
            primaryNav.classList.remove('nav-open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // Interactive form handling (demo submission)
    const demoForm = document.getElementById('demoForm');
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const fullname = document.getElementById('fullname');
            const email = document.getElementById('email');
            const budget = document.getElementById('budget');
            const message = document.getElementById('message');
            
            // Validation
            let isValid = true;
            let errorMessage = '';
            
            if (!fullname || fullname.value.trim() === '') {
                isValid = false;
                errorMessage += '• Please enter your full name.\n';
                if (fullname) fullname.style.borderColor = '#ef4444';
            } else if (fullname) fullname.style.borderColor = '';
            
            if (!email || email.value.trim() === '') {
                isValid = false;
                errorMessage += '• Please enter your email address.\n';
                if (email) email.style.borderColor = '#ef4444';
            } else if (email && !email.validity.valid) {
                isValid = false;
                errorMessage += '• Please enter a valid email address.\n';
                email.style.borderColor = '#ef4444';
            } else if (email) email.style.borderColor = '';
            
            if (!budget || budget.value.trim() === '') {
                isValid = false;
                errorMessage += '• Please enter your estimated budget.\n';
                if (budget) budget.style.borderColor = '#ef4444';
            } else if (budget) budget.style.borderColor = '';
            
            if (!message || message.value.trim() === '') {
                isValid = false;
                errorMessage += '• Please provide a brief project description.\n';
                if (message) message.style.borderColor = '#ef4444';
            } else if (message) message.style.borderColor = '';
            
            if (!isValid) {
                alert('Please fill in all required fields:\n\n' + errorMessage);
                return;
            }
            
            // Success message (demo only)
            alert('✓ Thank you, ' + fullname.value.trim() + '! Your consultation request has been received. Our team will contact you at ' + email.value + ' within 48 hours. (This is a demo form — no data stored.)');
            
            // Reset form
            demoForm.reset();
            
            // Reset border colors
            if (fullname) fullname.style.borderColor = '';
            if (email) email.style.borderColor = '';
            if (budget) budget.style.borderColor = '';
            if (message) message.style.borderColor = '';
        });
        
        // Remove red border on input focus
        const formInputs = demoForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = '';
            });
        });
    }
    
    // Active navigation highlight based on current page (simple)
    const currentPath = window.location.pathname;
    const navLinksAll = document.querySelectorAll('.nav-link');
    navLinksAll.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === 'index.html' && (currentPath === '/' || currentPath.endsWith('index.html') || currentPath === '')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else if (linkPath && currentPath.includes(linkPath)) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
});