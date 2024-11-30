// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm"); // Use the form ID

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        const username = form.querySelector("input[type='text']").value;
        const email = form.querySelector("input[type='email']").value;
        //const message = form.querySelector("textarea").value; // Get the value of the textarea

        if (username && email) {
            alert(`Thank you, ${username}! Your message has been sent.`);
            form.reset(); // Reset the form fields
        } else {
            alert("Please fill in all fields.");
        }
    });
    // Show the button when scrolling down
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block"; // Show button
        } else {
            scrollToTopBtn.style.display = "none"; // Hide button
        }
    };

    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scroll
        });
    });
});
