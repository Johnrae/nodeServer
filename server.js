
var express = require('express');

var app = express();

app.set('view engine', 'jade');

app.use(express.static(process.cwd() + '/public' ));

app.get('/', function(req, res) {
  res.render('index');
});

var products = [
  {id:1, name: "iPad"},
  {id:2, name: "TV"},
  {id:3, name: "Pool Table"}
]

app.get('/products/:id', function(req, res) {

  var id = Number(req.params.id);

  var product = products.filter(function(prod) {
    return prod.id === id;
  })[0];

  if(product) {
    res.render('product', product);
  } else {
    res.status(404).render('404');
  }

});

app.listen(8025);

console.log('app is running');

