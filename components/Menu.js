import React, { Component } from 'react';

class Menu extends Component {
    state = {
        menuItems: []
    };

    componentDidMount() {
        this.fetchMenuItems();
    }

    fetchMenuItems = async () => {
        try {
            const response = await fetch('/api/menu'); // Adjust the API endpoint as necessary
            const data = await response.json();
            this.setState({ menuItems: data });
        } catch (error) {
            console.error('Error fetching menu items:', error);
        }
    };

    render() {
        const { menuItems } = this.state;

        return (
            <div className="menu">
                <h1>Our Menu</h1>
                <div className="menu-categories">
                    {menuItems.map(item => (
                        <div key={item.id} className="menu-item">
                            <img src={item.image} alt={item.name} />
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>Price: ${item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Menu;