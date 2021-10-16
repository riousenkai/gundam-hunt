const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Gundam, Comment, Upvote } = require("../../db/models");

const router = express.Router();

router.post(
  "/:userId/:gundamId",
  asyncHandler(async (req, res) => {
    const check = await Upvote.findAll({
      where: {
        user_id: req.params.userId,
        gundam_id: req.params.gundamId,
      },
    });

    if (!check.length) {
      await Upvote.create({
        user_id: req.params.userId,
        gundam_id: req.params.gundamId,
      });
    } else {
      await check[0].destroy();
    }

    const upvotes = await Upvote.findAll({
      where: {
        gundam_id: req.params.gundamId,
      },
    });

    const gundam = await Gundam.findByPk(req.params.gundamId);

    await gundam.update({
      upvotes: upvotes.length,
    });

    return res.json(gundam);
  })
);

router.get(
  "/users/:userId",
  asyncHandler(async (req, res) => {
    const upvotes = await Upvote.findAll({
      where: {
        user_id: req.params.userId,
      },
      include: [Gundam],
    });

    const gundams = await Gundam.findAll({
      where: {
        user_id: req.params.userId,
      },
    });

    const initArr = [];

    gundams.map((gundam) => {
      return initArr.push(gundam.id);
    });

    const finalArr = [];

    upvotes.forEach((upvote) => {
      if (!initArr.includes(upvote.Gundam.id)) {
        finalArr.push(upvote.Gundam);
      }
    });

    return res.json(finalArr);
  })
);

router.get(
  "/users/:userId/highest",
  asyncHandler(async (req, res) => {
    const upvotes = await Upvote.findAll({
      where: {
        user_id: req.params.userId,
      },
      include: [
        {
          model: Gundam,
        },
      ],
    });

    const gundams = await Gundam.findAll({
      where: {
        user_id: req.params.userId,
      },
      order: [["upvotes", "DESC"]],
    });

    const initArr = [];

    gundams.map((gundam) => {
      return initArr.push(gundam.id);
    });

    const finalArr = [];

    upvotes.forEach((upvote) => {
      if (!initArr.includes(upvote.Gundam.id)) {
        finalArr.push(upvote.Gundam);
      }
    });

    finalArr.sort((a, b) => (a.upvotes < b.upvotes ? 1 : -1));

    return res.json(finalArr);
  })
);

module.exports = router;

// where: {
//     user_id: {
//       [Op.iLike]: `%${results}%`,
//     },
//   },
