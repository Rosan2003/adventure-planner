const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const trekRouter = require('./routes/trekRouter');
const userRouter = require('./routes/userRouter');
const bookRouter = require('./routes/bookingRouter');

mongoose.connect("mongodb://127.0.0.1:27017/Treks")
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err.message));

app.use('/api/treks/',trekRouter);
app.use('/api/users/',userRouter);
app.use('/api/bookings/',bookRouter);

app.listen(3000,()=>console.log("server is up!!"));