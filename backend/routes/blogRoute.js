const express = require("express");
const router = express.Router();
const Blogbit = require("../models/blogbit");

router.get("/", async (req, res) => {
  try {
    Blogbit.find({}, function (e, blog) {
      res.json(blog)
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      error: err
    });
  }
})

module.exports = router;