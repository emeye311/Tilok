var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [{
    "id": 1,
    "name": "John Doe"
  },
  {
    "id": 2,
    "name": "Gilad Barhani"
  },
  {
    "id": 3,
    "name": "Lior Mangisto"
  },];
  res.send(users);
});

module.exports = router;
