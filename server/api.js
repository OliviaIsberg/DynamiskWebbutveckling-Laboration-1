const path = require('path');
const express = require('express');
var fs = require('fs');

const port = 3000;

const app = express();
app.use(express.json());

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

function saveData() {
  fs.writeFileSync('data.json', JSON.stringify(data));
}

app.get('/api/products', (req, res) => {
  res.json(data.products);
});

app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = data.products.find((product) => product.id === id);
  if (product === undefined) {
    res.status(404);
    res.json({ error: 'Product not found' });
    return;
  }

  res.json(product);
});

app.post('/api/products', (req, res) => {
  const productIds = data.products.map((product) => product.id);
  const productId = Math.max(...productIds) + 1;
  const product = { id: 0, ...req.body };
  product.id = productId;
  data.products.push(product);
  saveData();
  res.json(product);
});

app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.products.findIndex((product) => product.id === id);
  if (index === -1) {
    res.status(404);
    res.send();
    return;
  }

  const product = { id: 0, ...req.body };
  product.id = data.products[index].id;
  data.products[index] = product;
  saveData();
  res.end();
});

app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.products.findIndex((product) => product.id === id);
  if (index === -1) {
    res.status(404);
    res.send();
    return;
  }

  data.products.splice(index, 1);
  saveData();
  res.end();
});

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(port, () => {
  console.log('Running on port ' + port);
});
