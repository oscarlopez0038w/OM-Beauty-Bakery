import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa el componente Link

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>O&M Store</h5>
            <p>Tu tienda en línea para moda y delicias.</p>
          </Col>
          <Col md={4}>
            <h5>Enlaces Útiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/products" className="text-light">Productos</Link></li>
              <li><Link to="/about" className="text-light">Acerca</Link></li>
              <li><Link to="/contact" className="text-light">Contacto</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li>Email: contacto@omstore.com</li>
              <li>WhatsApp: +505 7821 5071</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12} className="text-center">
            <p>&copy; {new Date().getFullYear()} OM Beauty & Bakery. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;