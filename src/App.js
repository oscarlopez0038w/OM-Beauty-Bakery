import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import OrderForm from './components/OrderForm/OrderForm';
import About from './components/About';
import Contact from './components/Contact';
import { fetchProducts } from './asyncMock';
import './App.css';
import { CartProvider } from './context/CartContext';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails products={products} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<OrderForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;