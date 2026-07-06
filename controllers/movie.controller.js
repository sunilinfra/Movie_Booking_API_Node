const Movie = require("../models/movie.model");
const movieService = require("../services/movie.service");




const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        return res.status(201).json({
            success: true,
            message: "Movie created successfully",
            data: movie,
            error: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Not able to create movie",
            error: err.message,
            data: {}
        });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const result = await Movie.deleteOne({ _id: req.params.id });
        return res.status(200).json({
            success: true,
            message: "Movie deleted successfully",
            data: result,
            error: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Not able to delete movie",
            error: err.message,
            data: {}
        });
    }
};

const erroResponseBody = {
    err: {},
    data: {},
    message: "default",
    success: false
}
const sucessResponseBody = {
    success: true,
    message: "Sucessfully proceed the requiest",
    data: {},
    error: {}
}

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
