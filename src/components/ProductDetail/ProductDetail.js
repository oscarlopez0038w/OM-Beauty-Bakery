import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <Card style={{ width: '18rem' }} className="mb-3">
      <Card.Img variant="top" src={product.image} alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
          <br />
          ${product.price}
        </Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;