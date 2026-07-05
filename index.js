const express = require("express");

const env = require("dotenv");
env.config(); //configuring env file

const Movie = require("./models/movie.model"); 


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
        await Movie.create({
            name: "Bacchan Pandey",
            descripton: "Bacchan Pandey is an upcoming Indian Hindi-language action comedy film directed by Farhad Samji and produced by Sajid Nadiadwala under his banner Nadiadwala Grandson Entertainment. The film stars Akshay Kumar in the title role, alongside Kriti Sanon, Jacqueline Fernandez, Arshad Warsi, Pankaj Tripathi, and Prateik Babbar.",
            casts: ["Akshay Kumar", "Kriti Sanon", "Jacqueline Fernandez", "Arshad Warsi", "Pankaj Tripathi", "Prateik Babbar"],
            director: "Farhad Samji",
            trailerUrl: "https://www.youtube.com/watch?v=3gqz8Jb0Q6M",
            language: ["Hindi", "English"],
            releaseDate: "2023-03-18",
            releaseStatus: "RELEASED"

        });


    }catch(err){
        console.log("Not able to conneted to the database");
    }
    
});

