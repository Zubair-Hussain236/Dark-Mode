// script.js
document.getElementById('toggleButton').addEventListener('click', function() {
    const body = document.body;
    const button = document.getElementById('toggleButton');

    // Toggle the dark mode class on the body
    body.classList.toggle('dark-mode');

    // Change the button text based on the mode
    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Switch to Light Mode';
    } else {
        button.textContent = 'Switch to Dark Mode';
    }
});

