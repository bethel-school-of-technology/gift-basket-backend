var express = require("express");
var router = express.Router();
var Product = require("../models/products")


/* GET home page. */
router.get('/', async function(req, res,){
          try {
            const products = await Product.find();

            res.status(200).json({
              data: { products }
            });
          } catch (err) {
            res.status(404).json({
              status: 'fail',
              message: err
            });
          }
        });


router.get("/:id", async function (req, res) {
  try {
    let id = req.params.id;
    const products = await Product.findById(id);
    res.status(200).json({
      data: { products },
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
    const newProduct = await Product.create(req.body);

    res.status(201).json({
      data: { order: newProduct },
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
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      data: { product },
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
    await Product.findByIdAndDelete(req.params.id);
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
