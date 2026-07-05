const MovieController = require('../controllers/movie.controller');

const routes = (app) => {
    // routes funciton takes express appp boject takes a parameter
    app.post('/mba/api/v1/movies', MovieController.createMovie);

}
module.exports = routes;