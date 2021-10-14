const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const gundamRouter = require("./gundam.js");
const searchRouter = require("./search.js");
const commentRouter = require("./comments.js")
const upvoteRouter = require("./upvotes.js")

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/gundam", gundamRouter);
router.use("/search", searchRouter);
router.use("/comments", commentRouter)
router.use("/upvotes", upvoteRouter)

module.exports = router;
