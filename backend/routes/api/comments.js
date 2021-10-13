const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Gundam, Comment } = require("../../db/models");
const { Op } = require("sequelize");

const router = express.Router();

router.get("/:id", asyncHandler(async(req, res) => {
    const comments = await Comment.findall({
        where: {
            gundam_id: req.params.id
        }
    })

    res.json(comments)
}))

module.exports = router;
