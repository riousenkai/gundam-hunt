const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth");
const { User, Gundam } = require("../../db/models");
const { Op } = require("sequelize");

const router = express.Router();

const searchError = () => {
  let error = {
    title: "Error in request!",
    status: 404,
  };
  return error;
};

router.post(
  "/gundams",
  asyncHandler(async (req, res) => {
    const { results } = req.body;

    const user = await User.findByPk(1)

    const gundams = await Gundam.findAll({
      where: {
        name: {
          [Op.iLike]: `%${results}%`,
        },
      },
      limit: 5,
    });

    await setTokenCookie(res, user);
    res.json({ gundams });
  })
);

router.post(
  "/users",
  asyncHandler(async (req, res) => {
    const { search } = req.body;

    const users = await User.findAll({
      where: {
        username: {
          [Op.iLike]: `%${search}%`,
        },
      },
      limit: 5,
    });

    await setTokenCookie(res, users);

    return res.json({ users });
  })
);

module.exports = router;
