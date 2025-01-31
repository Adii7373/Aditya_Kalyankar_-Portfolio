// Placeholder for any JavaScript code you might need
document.addEventListener('DOMContentLoaded', function() {
    console.log("Your portfolio is ready!");
    
    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Sticky header functionality
    const header = document.querySelector('header');
    window.onscroll = () => {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };
});
