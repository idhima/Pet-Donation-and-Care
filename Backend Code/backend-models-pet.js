const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    breed: { type: String, required: true },
    status: { type: String, enum: ['available', 'adopted'], default: 'available' },
    careDetails: { type: String }
});

module.exports = mongoose.model('Pet', petSchema);
