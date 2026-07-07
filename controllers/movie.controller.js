const Movie = require("../models/movie.model");
const movieService = require("../services/movie.service");

const {sucessResponseBody,erroResponseBody} = require("../utils/responsebody");


const createMovie = async (req, res) => {
    try {
        const response = await movieService.createMovie(req.body);
        if(response.err){
            erroResponseBody.err = response.console.err;
            erroResponseBody.code = response.code;
            erroResponseBody.message = "Validation failed on few parametes of the request body";
            return res.status(response.code).json(err);
        }
        sucessResponseBody.data = response;
        console.log("movie created", response);
        sucessResponseBody.message = "Movie created successfully";
        return res.status(201).json(sucessResponseBody);


        
    } catch (err) {
        console.log(err.errors.descripton.properties.message);

        return res.status(500).json(erroResponseBody);

    }   
   
};

const deleteMovie = async (req, res) => {
    try {
        const result = await movieService.deleteMovie(req.params.movieId);
        console.log("movie deleted", result);
        sucessResponseBody.data = result;
        sucessResponseBody.message = "Movie deleted successfully";
        return res.status(200).json(sucessResponseBody);
    } catch (err) {
        console.log("Error while deleting movie", err);
        return res.status(500).json(erroResponseBody);
    }
};


const getMovie = async (req, res) => {
    try {
        const response = await movieService.getMovieById(req.params.movieId);
        console.log("movie found", response);
        if(response.err){   
            erroResponseBody.err = response.err;
            return res.status(response.code).json(erroResponseBody);
        }
        sucessResponseBody.data = response;
        sucessResponseBody.message = "Movie fetched successfully";

        return res.status(200).json(sucessResponseBody);
    } catch (err) {
        return res.status(500).json(erroResponseBody);
    }
};

module.exports = { createMovie, deleteMovie, getMovie };
