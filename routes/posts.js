const router = require("express").Router();
const verify = require("../services/verifyToken");

// todo: this code might not be needed and can be deleted
router.get("/", verify, (req, res) => {
  res.send(req.user);
});

module.exports = router;
