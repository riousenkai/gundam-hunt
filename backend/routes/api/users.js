const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();

const postError = () => {
  let error = {
    title: "Error in request!",
    status: 404,
  };
  return error;
};

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Sign up
router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

// Get all users
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const users = await User.findAll();
    return res.json({ users });
  })
);

// Get one user
router.get(
  "/profile/:userId",
  asyncHandler(async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    return res.json({ user });
  })
);

// Edit user
router.put(
  "/profile/:userId",
  asyncHandler(async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    const { description, image_url } = req.body;

    if (user) {
      await user.update({
        description,
        image_url,
      });

      await setTokenCookie(res, user);

      return res.json({ user });
    } else {
      return postError;
    }
  })
);

module.exports = router;
