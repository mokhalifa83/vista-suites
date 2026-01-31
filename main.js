// Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    const progressBar = document.querySelector('.preloader-progress');

    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 100) progress = 100;
        if (progressBar) progressBar.style.width = `${progress}%`;

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('finished');
                document.body.style.cursor = 'auto'; // Reset cursor briefly to fix initial hide
                setTimeout(() => {
                    document.body.style.cursor = 'none';
                }, 100);
            }, 500);
        }
    }, 200);
});

// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 50);
});

// Scroll Reveal Logic (Enhanced)
const revealElements = document.querySelectorAll('.reveal, .reveal-stagger, .reveal-mask');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;

    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerBottom) {
            el.classList.add('active');
        }
    });
};

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
const handleNavbar = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Initial calls
window.addEventListener('scroll', () => {
    revealOnScroll();
    handleNavbar();
});

// Trigger once on load
window.addEventListener('load', () => {
    revealOnScroll();
    handleNavbar();
});

// Parallax Hero Effect
const hero = document.querySelector('.hero h1');
window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    if (hero) {
        hero.style.transform = `translateY(${offset * 0.3}px)`;
        hero.style.opacity = 1 - (offset / 700);
    }
});

// Hover effects for links (Cursor expansion)
const links = document.querySelectorAll('a, button, .suite-card');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2.5)';
        cursor.style.background = 'rgba(255,255,255,0.1)';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'transparent';
    });
});
