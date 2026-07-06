const Movie = require("../models/movie.model");
const movieService = require("../services/movie.service");

const {sucessResponseBody,erroResponseBody
} = require("../utils/responsebody");


const createMovie = async (req, res) => {
    try {
        const movie = await movieService.createMovie(req.body);
        sucessResponseBody.data = response;
        return res.status(201).json(sucessResponseBody);    
    } catch (err) {
        console.log("Error while creating movie", err);
        return res.status(500).json(erroResponseBody);
    }
};

const deleteMovie = async (req, res) => {
    try {
        const result = await movieService.deleteMovie(req.params.id);
        sucessResponseBody.data = result;
        return res.status(200).json(sucessResponseBody);
    } catch (err) {
        console.log("Error while deleting movie", err);
        return res.status(500).json(erroResponseBody);
    }
};


const getMovie = async (req, res) => {
    try {
        const response = await movieService.getMovieById(req.params.id);
        if(response.err){   
            erroResponseBody.err = response.err;
            return res.status(response.code).json(erroResponseBody);
        }
        sucessResponseBody.data = response;

        return res.status(200).json(sucessResponseBody);
    } catch (err) {
        return res.status(500).json(erroResponseBody);
    }
};

module.exports = { createMovie, deleteMovie, getMovie };
