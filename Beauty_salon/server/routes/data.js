var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send([{
      id: 1,
      name: "Evgen"
    },
    {
      id: 2,
      name: "Evgen 2"
    },
    {
      id: 3,
      name: "Evgen 3"
    },
  ]);
});

module.exports = router;