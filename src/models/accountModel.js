const { subscribe } = require('diagnostics_channel');
const mongoose = require('mongose');
const { type } = require('os');
const Subscription = require('./subscriptionModel');
const { timeStamp } = require('console');

const accountSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },

    isActive: {
        type: Boolean,
        default: true
    },

    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],

    subscriptions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcription'
    }]
}, {timeStamps: true});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;