const mongoose = require('mongoose');

const trekSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: Number,
    duration: Number,
    image: String,
    photo1: String,
    photo2: String,
    difficulty: String,
    bestTime: String,
    altitude: Number,
    guide: String,
    description: String,
});

const Trek = mongoose.model("Trek",trekSchema);

module.exports = Trek;