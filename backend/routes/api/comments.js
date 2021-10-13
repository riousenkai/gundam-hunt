const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Gundam, Comment } = require("../../db/models");
const { Op } = require("sequelize");

const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const comments = await Comment.findAll({
      where: {
        gundam_id: req.params.id,
      },
      include: [User],
    });

    return res.json(comments);
  })
);

router.put(
  "/:id/:commentId",
  asyncHandler(async (req, res) => {
    const comment = await Comment.findByPk(req.params.commentId);

    await comment.update(req.body);

    const comments = await Comment.findAll({
      where: {
        gundam_id: req.params.id,
      },
      include: [User],
    });

    return res.json(comments);
  })
);

router.delete(
  "/:id/:commentId",
  asyncHandler(async (req, res) => {
    const comment = await Comment.findByPk(req.params.commentId);

    await comment.destroy(req.body);

    const comments = await Comment.findAll({
      where: {
        gundam_id: req.params.id,
      },
      include: [User],
    });
    return res.json(comments);
  })
);



module.exports = router;
