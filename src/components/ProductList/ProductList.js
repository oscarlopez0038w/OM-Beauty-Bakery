import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { fetchProducts } from '../../asyncMock';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };

    getProducts();
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} className="product-image" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>Agregar al Carrito</Button>
                <Button variant="secondary" as={Link} to={`/products/${product.id}`} className="mt-2">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;