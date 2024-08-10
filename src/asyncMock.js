import products from './data/products.json';

export const fetchProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000); // Simula un retraso de 1 segundo
  });
};

// Simulación de la carga del número de artículos en el carrito
export const fetchCartCount = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(0); // Número fijo de artículos en el carrito para la demostración
    }, 1000); // Simula un retraso de 1 segundo
  });
};