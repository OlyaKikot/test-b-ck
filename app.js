const express = require('express');
const handlebars = require('express-handlebars');
const products = require('./products.json');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine(
    'hbs',
    handlebars({
      extname: 'hbs',
    }),
  );
  

app.get('/',(rec, res)=>{
  res.render('home', {pageTitle:'главная'});
});

app.get('/about',(rec, res)=>{
    res.render('about', {cssFileName: 'about', pageTitle: 'о нас'});
});

app.get('/products',(rec, res)=>{
  res.render('products', {products, cssFileName: 'products', pageTitle: 'наши продукты'});
});

app.get('/product/:productId',(req, res)=>{
  const product = products.find(p => p.id === req.params.productId);
 res.render('product', {product});
});

  app.listen(4444, () => {
    console.log('${4444}');

  });
