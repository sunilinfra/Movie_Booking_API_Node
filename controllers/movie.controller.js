const Movie = require('../models/movie.model');

/* controller function to create a new movie it return */
const createMovie = async (req, res) => {
    try{
        const movie = await Movie.create(req.body);
        return res.status(201).json({
            success: true,
            message: "Movie created successfully",
            data: movie,
            error:{}
        });

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Not able to create movie",
            error: err.message,
            data:{}
        });
    }


}
module.exports = {
    createMovie
}