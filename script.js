// Combined Scroll Script
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            let offset = window.pageYOffset;

            // Fade Hero (Only on Desktop)
            if (window.innerWidth > 768 && hero) {
                hero.style.opacity = Math.max(0, 1 - (offset / 600));
            }

            // Navbar Stickiness/Color Change
            if (offset > 50) {
                nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                nav.style.padding = '5px 5%';
                nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                nav.style.backgroundColor = '#ffffff';
                nav.style.padding = '15px 5%';
                nav.style.boxShadow = 'none';
            }
        });

        // Horizontal Scroll Dot Logic
        const container = document.querySelector('.card-container');
        const dots = document.querySelectorAll('.dot');
        if (container && dots.length > 0) {
            container.addEventListener('scroll', () => {
                const index = Math.round(container.scrollLeft / (container.clientWidth * 0.8));
                dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
            });
        }

const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    // Toggles the 'active' class to show/hide the menu
    navLinks.classList.toggle('active');
    
    // Optional: Animate the burger into an 'X'
    menu.classList.toggle('is-active');
});

    // --- DOM Element Selectors ---
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const sidebarOverlay = document.querySelector('#sidebarOverlay');
    const mainNav = document.querySelector('nav');
    const heroSection = document.querySelector('.hero, .hero-program');

    // ==========================================
    // 1. MOBILE SIDEBAR DROPDOWN CORE LOGIC
    // ==========================================
    function toggleMobileMenu() {
        const isOpen = navLinks.classList.toggle('active');
        menuToggle.classList.toggle('is-active');
        
        // Handle optional dark background overlay if it exists in HTML
        if (sidebarOverlay) {
            sidebarOverlay.classList.toggle('visible', isOpen);
        }
    }

    function forceCloseMobileMenu() {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('is-active');
        if (sidebarOverlay) {
            sidebarOverlay.classList.remove('visible');
        }
    }

    // Toggle menu when clicking the burger icon
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Close menu when clicking the dark overlay wrapper area
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', forceCloseMobileMenu);
    }

    // Close menu automatically when any navigational menu link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', forceCloseMobileMenu);
    });

    // ==========================================
    // 2. SCROLL EVENTS (NAVBAR BG & HERO OPACITY)
    // ==========================================
    window.addEventListener('scroll', function() {
        const scrollDistance = window.pageYOffset || document.documentElement.scrollTop;

        // A. Dynamic Nav Shrink and Background Color Shift
        if (mainNav) {
            if (scrollDistance > 50) {
                mainNav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                mainNav.style.padding = '8px 20px';
                mainNav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                mainNav.style.backgroundColor = '#ffffff';
                mainNav.style.padding = '15px 20px';
                mainNav.style.boxShadow = 'none';
            }
        }

        // B. Hero Fade-out Animation (Restricted to Desktop for Mobile Battery Performance)
        if (heroSection && window.innerWidth > 768) {
            // Gradually shifts opacity to 0 over 500px of scrolling down
            heroSection.style.opacity = Math.max(0, 1 - (scrollDistance / 500));
        } else if (heroSection) {
            // Keep hero perfectly solid on mobile device browsers
            heroSection.style.opacity = 1;
        }
    });

    // ==========================================
    // 3. WINDOW RESIZE SAFETY WATCHDOG
    // ==========================================
    window.addEventListener('resize', function() {
        // Automatically clears out hidden mobile styles if parent expands window to desktop sizes
        if (window.innerWidth > 768) {
            forceCloseMobileMenu();
        }
    });

    const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');
const sidebarOverlay = document.querySelector('#sidebarOverlay');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('is-active');
        if (sidebarOverlay) {
            sidebarOverlay.classList.toggle('visible');
        }
    });
}

