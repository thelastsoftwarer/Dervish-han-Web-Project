document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const closeIcon = document.getElementById('close-icon');
    const scrollThreshold = 100; // Scroll miktarı, menü rengi için eşik değeri

    if (!navbar) {
        console.error('Navbar not found.');
        return;
    }

    // Navbar'ın kaydırma durumuna göre arka planını ayarla
    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hamburger menüyü açma
    if (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('open');
        });
    } else {
        console.error('Hamburger icon not found.');
    }

    // Hamburger menüyü kapatma
    if (closeIcon) {
        closeIcon.addEventListener('click', function() {
            hamburgerMenu.classList.remove('open');
        });
    } else {
        console.error('Close icon not found.');
    }
});
