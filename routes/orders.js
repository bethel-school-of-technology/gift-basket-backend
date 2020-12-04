var express = require("express");
var router = express.Router();
var Order = require("../models/Order");

/* GET home page. */
router.get("/", async function (req, res) {
  try {
    const orders = await Order.find();

    res.status(200).json({
      data: { orders },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
});

router.get("/:id", async function (req, res) {
  try {
    let id = req.params.id;
    const order = await Order.findById(id);
    res.status(200).json({
      data: { order },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
});

router.post("/add", async function (req, res) {
  try {
    const newOrder = await Order.create(req.body);

    res.status(201).json({
      data: { order: newOrder },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
});

router.put("/update/:id", async function (req, res) {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      data: { order },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
});

router.delete("/delete/:id", async function (req, res) {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
});

module.exports = router;
