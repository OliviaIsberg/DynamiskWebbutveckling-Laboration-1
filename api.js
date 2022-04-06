const express = require('express');
const app = express();
app.use(express.json());
var fs = require('fs');
const port = 3000;

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

app.get('/api/products', (req, res) => {
  res.json(data.products);
});

app.post('/api/products', (req, res) => {
  const productIds = data.products.map((product) => product.id);
  const productId = Math.max(...productIds) + 1;
  const product = { id: productId, ...req.body };
  data.products.push(product);
});

app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.products.findIndex((product) => product.id === id);
  const product = { id: 0, ...req.body };
  product.id = data.products[index].id;
  data.products[index] = product;
});

app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.products.findIndex((product) => product.id === id);
  data.products.splice(index, 1);
});

app.listen(port, () => {
  console.log('Running on port ' + port);
});
