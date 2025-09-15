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
        content_currentIndex = (content_currentIndex + 1) % options.length;
    } else if (e.key === 'ArrowDown') {
        content_currentIndex = (content_currentIndex - 1 + options.length) % options.length;
    }

    // Add selection to the new current option
    content_options[content_currentIndex].classList.add('content-selectable-selected');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (content_currentIndex === 0) {
            window.open('https://www.github.com/JimmyBinoculars', '_blank');
        }
    }
});