const Movie = require('../models/movies');
const NotFoundError = require('../errors/NotFoundError');
const BadRequest = require('../errors/BadRequest');
const CurrentError = require('../errors/CurrentError');

/** создаем фильм */
module.exports.createMovies = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  const owner = req.user._id;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner,
  })
    .then((movie) => res.status(201).send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequest('Некорректные данные при создании фильма'));
      }
      return next(err);
    });
};

/** все фильмы */
module.exports.getMovies = (_req, res, next) => {
  Movie.find({})
    .then((movies) => res.send(movies))
    .catch(next);
};

/** удаляем фильм */
module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .orFail(new NotFoundError('Фильм с указанным _id не найден.'))
    .then((movie) => {
      if (!movie.owner.equals(req.user._id)) {
        return next(new CurrentError('Удаление чужого фильма не возможно'));
      }
      return Movie.deleteOne(movie).then(() => res.send(movie));
    })
    .catch((err) => next(err));
};
