const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const gundamRouter = require('./gundam.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/gundam', gundamRouter)

module.exports = router;
