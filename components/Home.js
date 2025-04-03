import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <header className="home-header">
                <h1>Welcome to AA FOODS</h1>
                <p>Your go-to place for authentic traditional Pakistani cuisine.</p>
            </header>
            <section className="popular-dishes">
                <h2>Popular Dishes</h2>
                <div className="dish-gallery">
                    <div className="dish-item">
                        <img src="/images/dish1.jpg" alt="Dish 1" />
                        <h3>Dish Name 1</h3>
                        <p>Short description of Dish 1.</p>
                    </div>
                    <div className="dish-item">
                        <img src="/images/dish2.jpg" alt="Dish 2" />
                        <h3>Dish Name 2</h3>
                        <p>Short description of Dish 2.</p>
                    </div>
                    <div className="dish-item">
                        <img src="/images/dish3.jpg" alt="Dish 3" />
                        <h3>Dish Name 3</h3>
                        <p>Short description of Dish 3.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;