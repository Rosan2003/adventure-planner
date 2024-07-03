const express = require("express");
const {getBooking,addBooking} = require('../controller/bookController');
const router = express.Router();

router.post("/book", addBooking);
router.get('/booking',getBooking);

module.exports = router;