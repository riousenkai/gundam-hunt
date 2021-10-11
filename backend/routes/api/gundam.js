const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie } = require("../../utils/auth");
const { User, Gundam, Comment, Upvote } = require("../../db/models");
const user = require("../../db/models/user");

const router = express.Router();

const postError = () => {
  let error = {
    title: "Error in request!",
    status: 404,
  };
  return error;
};

router.get('/', asyncHandler(async(req, res) => {
    const gundam = await Gundam.findAll({
        include: [User, Comment, Upvote],
    })

    return res.json({ gundam })
}))

module.exports = router;
