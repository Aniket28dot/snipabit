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

router.get("/blog/:search", async (req, res) => {
  const { search } = req.params
  try {
    Blogbit.find({category: search}, function (req, blog) {
      console.log(res.json(blog));
    })
  } catch (e) {
    res.status(500).send({
      success: false,
      error: e
    });
  }
})

module.exports = router;