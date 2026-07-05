const express = require("express");

const env = require("dotenv");
env.config(); //configuring env file


const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express(); //EXpress object
app.use(bodyParser.urlencoded({ extended: true })); //middleware to parse urlencoded data
app.use(bodyParser.json()); //middleware to parse json data



app.get('/home',(req, res) => {
    console.log("Hitting /home endpoint");
    return res.json({
        sucess: true,       
        message: "Welcome to Movie Booking App"
    })
});
app.listen(process.env.PORT, async () => {
    console.log(`Server is running on port ${process.env.PORT}`);

    // mongoose.connect(process.env.DB_URL, () => {
    //     console.log('Database connected successfully');

    // });
    // (err) => {
    //     console.log("Not able to conneted to database", err);
    // }
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log('Database connected successfully');

    }catch(err){
        console.log("Not able to conneted to the database");
    }
    
});

