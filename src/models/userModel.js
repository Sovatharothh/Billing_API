const mongoose = require('mongose');

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    isActive: {
        type: String,
        default: true
    },

    account: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Business',
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;