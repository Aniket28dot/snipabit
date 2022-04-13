const express = require("express");
const router = express.Router();
const Bookbit = require("../models/bookbit");

router.get("/book", async (req, res) => {
  try {
    Bookbit.find({}, function (e, blog) {
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