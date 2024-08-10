// src/components/Header/Header.js
import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { cartCount } = useCart();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">OM Beauty & Bakery</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/products">Productos</Nav.Link>
          <Nav.Link as={Link} to="/about">Acerca de</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/cart">
            <Badge pill bg="info">{cartCount}</Badge> Carrito
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;