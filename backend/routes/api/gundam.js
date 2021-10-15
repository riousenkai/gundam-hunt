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
    const gundam = await Gundam.findAll({
      order: [["createdAt", "DESC"]],
    })

    return res.json({ gundam })
}))

router.get('/popular', asyncHandler(async(req, res) => {
  const gundam = await Gundam.findAll({
    order: [["upvotes", "DESC"], ["createdAt", "DESC"]],
  })

  return res.json({ gundam })
}))

router.get('/newest', asyncHandler(async(req, res) => {
  const gundam = await Gundam.findAll({
    order: [["createdAt", "DESC"]],
  })

  return res.json({ gundam })
}))

router.get('/popular', asyncHandler(async(req, res) => {
  const gundam = await Gundam.findAll({
    order: [["Upvotes", "DESC"]],
  })

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

router.delete('/:id', asyncHandler(async(req, res) => {
  const gundam = await Gundam.findByPk(req.params.id)

  await gundam.destroy()

  const gundams = await Gundam.findAll()

  return res.json(gundams)
}))

router.put("/:id", asyncHandler(async(req, res) => {

  const gundam = await Gundam.findByPk(req.params.id)

  await gundam.update(req.body)

  return res.json(gundam)
}))

router.get("/user/:id", asyncHandler(async(req, res) => {
  const gundams = await Gundam.findAll({
    where: {
      user_id: req.params.id
    },
    order: [["createdAt", "DESC"]]
  })

  return res.json(gundams)
}))

module.exports = router;

// include: [User, Comment, Upvote],
