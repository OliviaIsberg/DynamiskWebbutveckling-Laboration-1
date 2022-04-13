import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ProductCard from './productCard';
import { useEffect, useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import {
  createProduct,
  readProduct,
  updateProduct,
  deleteProduct,
} from '../api';

function Layout() {
  const [products, setProducts] = useState([]);
  const [addingNewProduct, setAddingNewProduct] = useState(false);

  const saveNewProduct = (product) =>
    createProduct(product).then((newProduct) => {
      setAddingNewProduct(false);
      const newProducts = [...products, newProduct];
      setProducts(newProducts);
    });

  const loadProduct = (id) =>
    readProduct(id).then((product) => {
      const productIndex = products.findIndex((p) => p.id === product.id);
      const newProducts = [...products];
      newProducts.splice(productIndex, 1, product);

      setProducts(newProducts);
    });

  const saveExistingProduct = (product) => {
    updateProduct(product).then((response) => {
      const productIndex = products.findIndex((p) => p.id === product.id);
      const newProducts = [...products];
      newProducts.splice(productIndex, 1, product);

      setProducts(newProducts);
    });
  };

  const deleteExistingProduct = (id) =>
    deleteProduct(id).then((response) => {
      setProducts(products.filter((p) => p.id !== id));
    });

  const addNewProduct = () => setAddingNewProduct(true);

  const deleteNewProduct = (id) => {
    setAddingNewProduct(false);
  };

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#bcf7f2' }}>
      <div style={{ background: '#45f7e8', padding: '1.5rem' }}>
        <Typography sx={{ textAlign: 'center', fontSize: '26px' }}>
          Produkter
        </Typography>
      </div>

      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          updateProduct={loadProduct}
          saveProduct={saveExistingProduct}
          deleteProduct={deleteExistingProduct}
        />
      ))}
      {!addingNewProduct ? (
        <Button
          onClick={addNewProduct}
          size="large"
          startIcon={<AddCircleOutlineRoundedIcon />}
        >
          Lägg till produkt
        </Button>
      ) : (
        <ProductCard
          expanded={true}
          product={{ name: '', image: '', price: '' }}
          canUpdate={false}
          saveProduct={saveNewProduct}
          deleteProduct={deleteNewProduct}
        />
      )}
    </div>
  );
}

export default Layout;
