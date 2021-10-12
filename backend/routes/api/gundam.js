const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie } = require("../../utils/auth");
const { User, Gundam, Comment, Upvote } = require("../../db/models");

const router = express.Router();

const postError = () => {
  let error = {
    title: "Error in request!",
    status: 404,
  };
  return error;
};

router.get('/', asyncHandler(async(req, res) => {
    const gundam = await Gundam.findAll()

    return res.json({ gundam })
}))

router.get('/:id', asyncHandler(async(req, res) => {
  const gundam = await Gundam.findByPk(req.params.id)
  return res.json(gundam)
}))

router.post("/", asyncHandler(async(req, res) => {
  const newGundam = await Gundam.create(req.body)

  const user = await User.findByPk(1)

  setTokenCookie(res, user)

  return res.json(newGundam)
}))


module.exports = router;

// include: [User, Comment, Upvote],
