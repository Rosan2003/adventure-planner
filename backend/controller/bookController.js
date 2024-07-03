const express = require('express');
const app = express();
const Booking = require("../models/bookingModel");

async function addBooking(req,res) {
    let { qty,start } = req.body;
    await Booking.create({ qty,start });
    res.send({ msg: "Booked successfully!" });
}
async function getBooking(req,res){
    try {
        let booking = await Booking.find();
        res.send(booking);
    } catch (error) {
        res.status(500).send({error: err.message});
    }
}

exports.addBooking = addBooking;
exports.getBooking= getBooking;