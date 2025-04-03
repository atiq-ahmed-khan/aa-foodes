import React, { useState } from 'react';

const Order = () => {
    const [orderItems, setOrderItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [specialInstructions, setSpecialInstructions] = useState('');

    const handleAddItem = (item) => {
        setOrderItems([...orderItems, item]);
        setTotalPrice(totalPrice + item.price);
    };

    const handleRemoveItem = (itemToRemove) => {
        const updatedItems = orderItems.filter(item => item.id !== itemToRemove.id);
        setOrderItems(updatedItems);
        setTotalPrice(totalPrice - itemToRemove.price);
    };

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        // Logic to submit the order to the backend
        console.log('Order submitted:', { orderItems, totalPrice, specialInstructions });
    };

    return (
        <div className="order-container">
            <h1>Order Your Food</h1>
            <form onSubmit={handleSubmitOrder}>
                <div className="order-items">
                    {orderItems.map(item => (
                        <div key={item.id} className="order-item">
                            <span>{item.name} - ${item.price}</span>
                            <button type="button" onClick={() => handleRemoveItem(item)}>Remove</button>
                        </div>
                    ))}
                </div>
                <textarea
                    placeholder="Special Instructions"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                />
                <h2>Total Price: ${totalPrice}</h2>
                <button type="submit">Submit Order</button>
            </form>
        </div>
    );
};

export default Order;