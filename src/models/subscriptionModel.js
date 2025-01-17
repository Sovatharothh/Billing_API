const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    pricingPlanId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PricingPlan',
        required: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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