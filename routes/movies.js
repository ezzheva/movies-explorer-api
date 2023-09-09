const router = require('express').Router();
const { validateCreateMovies, validateDeleteMovie } = require('../middlewares/validation');
const {
  createMovies,
  getMovies,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', validateCreateMovies, createMovies);
router.delete('/:movieId', validateDeleteMovie, deleteMovie);

module.exports = router;
