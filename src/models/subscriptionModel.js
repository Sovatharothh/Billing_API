const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const subscriptionSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['weekly', 'monthly', 'yearly'],
        required: true
    },

    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },

    startDate: {
        type: Date,
        required: true
    },

    endDate: {
        type: Date,
        required: true
    }
    
}, { timeStamps: true });

const Subscription = mongoose.modek('Subscription', subscriptionSchema);
module.exports = Subscription;