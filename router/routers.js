const router = require("express").Router();
const productSchema = require("../model/porductSchema");

router.get("/", (req, res) => {
  productSchema.findOne({}, function (err, docs) {
    if (!err) {
      res.send(docs);
    } else {
      throw err;
    }
  });
});

module.exports = router;
