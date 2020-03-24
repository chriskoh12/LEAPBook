var express = require('express');
var router = express.Router();
var books = require('../modules/books');
var taxes = require('../modules/taxes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books/team', (request, response, next) => {
  const result = {
    "team": 'GeC',
    "membersNames":[
      'Chris Koh',
      'Gabe Freitas',
      'Evan Plevinsky'
    ]
  };

  response.setHeader('content-type', 'application/json');
  response.end(JSON.stringify(result));
})

router.get('/books/all/:city', (request, response, next) => {
  const city = request.params.city.toLowerCase();
  var taxRate;

  taxRate = taxes.find_tax(city);
  if(taxRate === -1){
    console.log("invalid city");
    response.sendStatus(400);
  }

  const result = books.calculate_prices(taxRate);
  response.setHeader('content-type', 'application/json');
  response.end(JSON.stringify(result));
});


module.exports = router;
