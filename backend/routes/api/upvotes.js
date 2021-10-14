const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Gundam, Comment, Upvote } = require("../../db/models");
const { Op } = require("sequelize");

const router = express.Router();

router.post("/:userId/:gundamId", asyncHandler(async (req, res) => {

    const check = Upvote.findOne({
        where: {
            user_id: req.params.userId,
            gundam_id: req.params.gundamId
        }
    })

    if (!check) {
            await Upvote.create({
            user_id: req.params.userId,
            gundam_id: req.params.gundamId
        })
    } else {
       await check.destroy()
    }

    const upvotes = await Upvote.findAll({
        where: {
            gundam_id: req.params.gundamId
        }
    })

    const gundam = await Gundam.findByPk(req.params.gundamId)

    await gundam.update({
        upvotes: upvotes.length
    })

    return res.json(gundam)
}))


module.exports = router;
