const mongoose = require('mongose');

const businessSchema = new mongoose.Schema({
    businessName: {
        type: String,
        required: true
    },

}, {timeStamps: true});

const Business = mongoose.model('Business', businessSchema);
module.exports = Business;