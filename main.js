document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // View project buttons
    const viewProjectButtons = document.querySelectorAll('.view-project');
    viewProjectButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Implement your project viewing logic here!');
            // Example: Redirect to project detail page or show modal
        });
    });

    // Form submission handling
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        document.getElementById('contact-form').reset();
    });
});