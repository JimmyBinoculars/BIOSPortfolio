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
    } else if (e.key === 'ArrowDown') {
        currentIndex = Math.min(currentIndex + 1, options.length - 1);
    } else if (e.key === 'ArrowUp') {
        currentIndex = Math.max(currentIndex - 1, 0);
    }

    // Add selection to the new current option
    options[currentIndex].classList.add('top-option-selected');
});
