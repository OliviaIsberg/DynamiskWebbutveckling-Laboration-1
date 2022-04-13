import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ProductCard from './productCard';
import { useEffect, useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

function Layout() {
  const [products, setProducts] = useState([]);

  const getProducts = () =>
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));

  useEffect(getProducts, []);

  return (
    <div style={{ minHeight: '100vh', background: '#bcf7f2' }}>
      <div style={{ background: '#45f7e8', padding: '1.5rem' }}>
        <Typography sx={{ textAlign: 'center', fontSize: '26px' }}>
          Produkter
        </Typography>
      </div>

      {products.map((product, index) => (
        <ProductCard key={index} product={product} getProducts={getProducts} />
      ))}
      <Button size="large" startIcon={<AddCircleOutlineRoundedIcon />}>
        Lägg till produkt
      </Button>
    </div>
  );
}

export default Layout;
