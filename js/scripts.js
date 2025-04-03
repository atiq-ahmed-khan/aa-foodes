document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = this.getAttribute('href');
            document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form handling for the contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(contactForm);
            // Handle form submission (e.g., send data to the server)
            fetch('/api/contact', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert('Your message has been sent!');
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending your message.');
            });
        });
    }

    // Order form handling
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const orderData = new FormData(orderForm);
            // Handle order submission (e.g., send data to the server)
            fetch('/api/order', {
                method: 'POST',
                body: orderData
            })
            .then(response => response.json())
            .then(data => {
                alert('Your order has been placed!');
                orderForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error placing your order.');
            });
        });
    }

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const menuItems = document.querySelectorAll('.menu-item');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            menuItems.forEach(item => {
                const itemName = item.querySelector('.item-name').textContent.toLowerCase();
                if (itemName.includes(query)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});