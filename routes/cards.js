var express = require("express");
var router = express.Router();

var cards = require("../lib/cards");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json(cards.getDeck(true));
});

module.exports = router;
