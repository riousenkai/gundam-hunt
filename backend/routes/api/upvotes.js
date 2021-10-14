const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Gundam, Comment, Upvote } = require("../../db/models");
const { Op } = require("sequelize");
const { set } = require("js-cookie");

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

router.get('/users/:userId', asyncHandler(async (req, res) => {
    const upvotes = await Upvote.findAll({
        where: {
            user_id: req.params.userId
        },
        include: [Gundam]
    })

    const gundams = await Gundam.findAll({
        where: {
            user_id: req.params.userId
        }
    })

    const initSet = new Set()

    upvotes.map((upvote) => {
        return initSet.add(upvote.Gundam)
    })

    const finalSet = [];

    gundams.forEach(gundam => {
        if(!initSet.has(gundam)) {
            finalSet.push(gundam)
        }
    })

    res.json(finalSet)
}))

module.exports = router;

// where: {
//     user_id: {
//       [Op.iLike]: `%${results}%`,
//     },
//   },
