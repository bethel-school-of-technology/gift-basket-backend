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

router.post("/add", async (req, res) => {
  console.log(req.body);

  if (!req.body.name) {
    return res.send({ message: " missing name:" + req.body.name });
  }
  if (!req.body.email) {
    return res.send({ message: " missing email:" + req.body.email });
  }
  if (!req.body.address) {
    return res.send({ message: " missing address:" + req.body.address });
  }
  if (!req.body.total) {
    return res.send({ message: " missing total:" + req.body.total });
  }
  if (!req.body.cartItems) {
    return res.send({ message: " missing cartItems:" + req.body.cartItems });
  }

  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.address ||
    !req.body.total ||
    !req.body.cartItems
  ) {
    //return res.send({ message: req.body });
    return res.send({ message: "Data is required." });
  }
  const order = await Order(req.body).save();
  res.send(order);
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
