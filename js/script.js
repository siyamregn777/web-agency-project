// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle functionality - fixed button at top right
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.textContent = '☀️';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeIcon) themeIcon.textContent = '🌙';
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const icon = this.querySelector('.theme-icon');
            if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                if (icon) icon.textContent = '🌙';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if (icon) icon.textContent = '☀️';
            }
        });
    }
    
    // Hamburger menu toggle with click outside functionality
    const navToggle = document.getElementById('navToggle');
    const primaryNav = document.getElementById('primaryNav');
    
    // Create overlay element for clicking outside
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    
    // Function to close menu
    function closeMenu() {
        if (primaryNav && primaryNav.classList.contains('nav-open')) {
            primaryNav.classList.remove('nav-open');
            if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            overlay.classList.remove('active');
        }
    }
    
    // Function to open menu
    function openMenu() {
        primaryNav.classList.add('nav-open');
        navToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        overlay.classList.add('active');
    }
    
    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            if (expanded) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        
        // Close menu when clicking on overlay (outside)
        overlay.addEventListener('click', function() {
            closeMenu();
        });
        
        // Close menu when clicking on any nav link
        const navLinks = primaryNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });
        
        // Close menu on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && primaryNav.classList.contains('nav-open')) {
                closeMenu();
            }
        });
    }
    
    // Close menu on window resize if open (prevents layout issues)
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && primaryNav && primaryNav.classList.contains('nav-open')) {
            closeMenu();
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
    
    // Active navigation highlight based on current page
    const currentPath = window.location.pathname;
    const navLinksAll = document.querySelectorAll('.nav-link');
    navLinksAll.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === 'index.html' && (currentPath === '/' || currentPath.endsWith('index.html') || currentPath === '' || currentPath.endsWith('/'))) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else if (linkPath && currentPath.includes(linkPath) && linkPath !== 'index.html') {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
});