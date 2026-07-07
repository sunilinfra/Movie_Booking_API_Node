const Movie = require("../models/movie.model");

const createMovie = async (data) => {
    try{
        const movie = await Movie.create(data);
        return movie;

    } catch (error)
     {
        if (error.name === "ValidationError") {

            let err = {};

            Object.keys(error.errors).forEach((key) => {

                err[key] = error.errors[key].message;

            });
            console.log(err);

            return {
                err: err,
                code: 422
            };

        }  
        else{
            throw error;
        }  
       
    }
    
};

const getMovieById = async (id) => {
    const movie = await Movie.findById(id);
    console.log("move found",movie.id);
    if (!movie) {
        return {
            err: "No move found for the coressponginf id procided",
            code: 404,
        }};
    return movie;

}

const deleteMovie = async (id) => {
    const response = await Movie.findByIdAndDelete(id);
    return response;
}


module.exports = {
    deleteMovie,
    createMovie,
    getMovieById

}

