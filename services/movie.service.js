const Movie = require("../models/movie.model");

const getMovieById = async (id) => {
    const movie = Movie.findById(id);
    console.log("move found",movie.id);
    if (!movie) {
        return {
            err: "No move found for the coressponginf id procided",
            code: 404,
        }};
    return movie;

}


module.exports = {
    getMovieById

}

