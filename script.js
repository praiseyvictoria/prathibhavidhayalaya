// Function to show the content for the clicked tab
function showTab(tabId) {
    // Hide all sections
    var sections = document.querySelectorAll('.tab-content');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Remove the active class from all buttons
    var buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Show the clicked section
    var activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    // Set the clicked tab as active
    var activeButton = document.querySelector('[onclick="showTab(\'' + tabId + '\')"]');
    if (activeButton) {
        activeButton.classList.add('active');
    }
    const menu = document.querySelector('.tabs');
    menu.classList.remove('active'); 
}
function toggleMenu() {
    const menu = document.querySelector('.tabs');
    menu.classList.toggle('active');
}
// Initially show the "home" tab
document.addEventListener('DOMContentLoaded', function() {
    showTab('home');
});
