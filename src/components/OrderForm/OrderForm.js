// src/components/OrderForm/OrderForm.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const OrderForm = () => {
  const { cartItems, cartTotal, removeAllItems } = useCart();
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const navigate = useNavigate(); // Hook para redirigir al usuario

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hola, me gustaría hacer un pedido. \n\nNombre: ${formData.name} \nEmail: ${formData.email} \nDirección: ${formData.address} \n\nDetalles del pedido: \n${cartItems.map(item => `${item.name} x ${item.quantity} - $${item.price * item.quantity}`).join('\n')} \n\nTotal: $${cartTotal.toFixed(2)}`;
    
    // Encode the message to be URL-safe
    const encodedMessage = encodeURIComponent(message);
    
    // Replace with your WhatsApp number
    const phoneNumber = '78869864';
    
    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');

    // Clear the cart and the form
    removeAllItems();
    setFormData({ name: '', email: '', address: '' });

    // Redirect to the home page
    navigate('/');
  };

  return (
    <Container>
      <h2>Formulario de Pedido</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit">Enviar Pedido</Button>
      </Form>
    </Container>
  );
};

export default OrderForm;