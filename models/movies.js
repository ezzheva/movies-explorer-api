const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  /**  страна создания фильма */
  country: {
    type: String,
    required: true,
  },
  /** режиссёр фильма */
  director: {
    type: String,
    required: true,
  },
  /** длительность фильма */
  duration: {
    type: Number,
    required: true,
  },
  /** год выпуска фильма */
  year: {
    type: String,
    required: true,
  },
  /** описание фильма */
  description: {
    type: String,
    required: true,
  },
  /** ссылка на постер к фильму */
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Неккоректный URL',
    },
  },
  /** ссылка на трейлер фильма */
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Неккоректный URL',
    },
  },
  /** миниатюрное изображение постера к фильму */
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Неккоректный URL',
    },
  },
  /** id фильма, который содержится в ответе сервиса MoviesExplorer */
  movieId: {
    type: Number,
    required: true,
  },
  /** название фильма на русском языке */
  nameRU: {
    type: String,
    required: true,
  },
  /** название фильма на английском языке */
  nameEN: {
    type: String,
    required: true,
  },
  /** _id пользователя, который сохранил фильм */
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
});

module.exports = mongoose.model('movie', movieSchema);
