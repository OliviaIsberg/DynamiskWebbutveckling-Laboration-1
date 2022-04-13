export const createProduct = (product) =>
  fetch('/api/products/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: product.name,
      image: product.image,
      price: product.price,
    }),
  }).then((response) => response.json());

export const readProduct = (id) =>
  fetch('/api/products/' + id).then((response) => response.json());

export const updateProduct = (product) =>
  fetch('/api/products/' + product.id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: product.name,
      image: product.image,
      price: product.price,
    }),
  });

export const deleteProduct = (id) =>
  fetch('/api/products/' + id, {
    method: 'DELETE',
  });
