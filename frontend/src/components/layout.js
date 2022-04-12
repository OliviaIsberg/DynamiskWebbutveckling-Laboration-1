import * as React from 'react';
import Typography from '@mui/material/Typography';
import ProductCard from './productCard';
import Products from './mocked';

function Layout() {
  return (
    <div style={{ minHeight: '100vh', background: '#bcf7f2' }}>
      <div style={{ background: '#45f7e8', padding: '1rem' }}>
        <Typography sx={{ textAlign: 'center', fontSize: '18px' }}>
          Produkter
        </Typography>
      </div>

      {Products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default Layout;
