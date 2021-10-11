const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const gundamRouter = require('./gundam.js')
const searchRouter = require('./search.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/gundam', gundamRouter);
router.use('/search', searchRouter)

module.exports = router;
