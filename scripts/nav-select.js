const options = document.querySelectorAll('.top-option');
let currentIndex = 0;

// Initialize first option as selected
options[currentIndex].classList.add('top-option-selected');

document.addEventListener('keydown', (e) => {
    // Remove the selection from the current option
    options[currentIndex].classList.remove('top-option-selected');

    if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % options.length;
    } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + options.length) % options.length;
    }

    // Add selection to the new current option
    options[currentIndex].classList.add('top-option-selected');
});

const content_options = document.querySelectorAll('.content-selectable');
let content_currentIndex = 0;

// Initialize first option as selected
content_options[content_currentIndex].classList.add('content-selectable-selected');

document.addEventListener('keydown', (e) => {
    // Remove the selection from the current option
    content_options[content_currentIndex].classList.remove('content-selectable-selected');

    if (e.key === 'ArrowUp') {
        content_currentIndex = (content_currentIndex - 1 + content_options.length) % content_options.length;
    } else if (e.key === 'ArrowDown') {
        content_currentIndex = (content_currentIndex + 1) % content_options.length;
    }

    // Add selection to the new current option
    content_options[content_currentIndex].classList.add('content-selectable-selected');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (content_currentIndex === 0) {
            window.open('https://www.github.com/JimmyBinoculars', '_blank');
        }
        if (content_currentIndex === 1) {
            window.open('https://tryhackme.com/p/JimmyBinoculars', '_blank');
        }
        if (content_currentIndex === 2) {
            window.open('mailto:lochlan@pixel-play.co.uk', '_blank');
        }
        if (content_currentIndex === 3) {
            window.open('https://github.com/JimmyBinoculars/BIOSPortfolio', '_blank');
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const mainPage = document.getElementById('main-page');
    const skillsPage = document.getElementById('skills-page');
    let currentPage = 0; // 0 = main, 1 = skills

    function showPage(page) {
        if (page === 0) {
            mainPage.style.display = '';
            skillsPage.style.display = 'none';
        } else {
            mainPage.style.display = 'none';
            skillsPage.style.display = '';
        }
    }

    // Initialize: show main, hide skills
    showPage(currentPage);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            currentPage = 1 - currentPage; // Toggle between 0 and 1
            showPage(currentPage);
        }
    });
});