const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const { auth } = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');
const { createUser, login } = require('../controllers/users');
const { validateUserBody, validateAuthentication } = require('../middlewares/validation');

router.post('/signup', validateUserBody, createUser);
router.post('/signin', validateAuthentication, login);

router.use(auth);

router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use('*', (_req, _res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
