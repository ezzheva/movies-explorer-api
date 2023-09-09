const router = require('express').Router();
const { validateUpdateUser } = require('../middlewares/validation');
const { getUserMe, updateUser } = require('../controllers/users');

router.get('/me', getUserMe);
router.patch('/me', validateUpdateUser, updateUser);

module.exports = router;
