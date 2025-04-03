import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to backend)
        console.log('Form submitted:', formData);
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
            <div className="contact-info">
                <h2>Contact Information</h2>
                <p>Address: 123 AA Foods St, Food City, PK</p>
                <p>Phone: +92 123 456 7890</p>
                <p>Follow us on social media:</p>
                <ul>
                    <li><a href="https://facebook.com/afoods">Facebook</a></li>
                    <li><a href="https://twitter.com/afoods">Twitter</a></li>
                    <li><a href="https://instagram.com/afoods">Instagram</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;