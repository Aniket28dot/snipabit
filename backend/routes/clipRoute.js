const express = require("express");
const router = express.Router();
const Clipbit = require("../models/clipbit");

router.get("/clip", async (req, res) => {
  try {
    Clipbit.find({}, function (e, blog) {
      res.json(blog)
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      error: err
    });
  }
})


router.get("/clip/:search", async (req, res) => {
    const { search } = req.params
    try {
      Clipbit.find({tag: search}, function (req, clip) {
        res.json(clip);
      })
    } catch (e) {
      res.status(500).send({
        success: false,
        error: e
      });
    }
  })

module.exports = router;