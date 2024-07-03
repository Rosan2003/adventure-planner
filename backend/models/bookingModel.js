const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    qty: Number,
    start: {
        type: Date,
        required: true
    },
});

const Booking = mongoose.model("Booking", BookSchema);
module.exports = Booking;