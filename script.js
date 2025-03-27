// Function to show sections when navigating between pages
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Handle form submissions
document.addEventListener("DOMContentLoaded", function () {
    // On Sign Up Form submission
    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;

        // Check if name starts with a capital letter
        if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
            alert("Name should start with a capital letter!");
            return; // Stop the form submission
        }

        // Validate email (only for Gmail here as per your request)
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid Gmail address!");
            return; // Stop the form submission
        }

        alert("Sign Up Successful!");
        showSection('home'); // Go back to home page
    });

    // On Login Form submission
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.querySelector('input[type="email"]').value;

        // Validate email (only for Gmail here as per your request)
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid Gmail address!");
            return; // Stop the form submission
        }

        alert("Login Successful!");
        showSection('upload'); // Go to image upload page
    });

    // On Image Upload Form submission
    document.getElementById("uploadForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Image Uploaded Successfully!");
        // Add your image upload logic here
    });
});
