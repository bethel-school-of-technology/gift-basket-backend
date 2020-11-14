var express = require('express');
var router = express.Router();

/* GET baskets listing. */
router.get('/', function(req, res, next) {
     res.status(200).json({message:'successfully fetched baskets page'});
   });

module.exports = router;