import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} AA FOODS. All rights reserved.</p>
                <ul className="social-media">
                    <li><a href="https://facebook.com/AAFOODS" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com/AAFOODS" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://instagram.com/AAFOODS" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;