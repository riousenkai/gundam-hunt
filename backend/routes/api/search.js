const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Gundam } = require("../../db/models");
const { Op } = require("sequelize");


const router = express.Router();

router.get('/gundams', asyncHandler(async(req, res) => {
    const { search } = req.body

    const gundams = await Gundam.findAll({
        where: {
            name: {
                [Op.iLike]: `%${search}%`,
            }
        }
    })

    return res.json({ gundams })
}))

router.get('/users', asyncHandler(async(req, res) => {
    const { search } = req.body

    const users = await User.findAll({
        where: {
            name: {
                [Op.iLike]: `%${search}%`,
            }
        }
    })

    return res.json({ users })
}))

module.exports = router;
