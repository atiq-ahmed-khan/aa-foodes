const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    items: [{
        menuItemId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'MenuItem'
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        specialInstructions: {
            type: String,
            trim: true
        }
    }],
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    orderStatus: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema);