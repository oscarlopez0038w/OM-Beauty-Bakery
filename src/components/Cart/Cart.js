// src/components/Cart/Cart.js
import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return <Container className="mt-5"><h2>El carrito está vacío</h2></Container>;
  }

  return (
    <Container className="mt-5">
      <h2>Carrito de Compras</h2>
      <ListGroup>
        {cartItems.map(item => (
          <ListGroup.Item key={item.id}>
            <Row>
              <Col md={8}>
                <h5>{item.name}</h5>
                <p>${item.price}</p>
              </Col>
              <Col md={2} className="text-center">
                <Button variant="secondary" size="sm" onClick={() => decreaseQuantity(item.id)}>-</Button>
                <span className="mx-2">{item.quantity}</span>
                <Button variant="secondary" size="sm" onClick={() => increaseQuantity(item.id)}>+</Button>
              </Col>
              <Col md={2} className="text-right">
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h3 className="mt-3">Total: ${cartTotal.toFixed(2)}</h3>
      <Button variant="primary" className="mt-3" href="/order">Finalizar Compra</Button>
    </Container>
  );
};

export default Cart;