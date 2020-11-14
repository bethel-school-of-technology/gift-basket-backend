var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
     res.status(200).json({message:'successfully fetched products'});
   });

module.exports = router;