import { useState } from 'react';
import Carousel from './components/Carousel';
import ProductModal from './components/ProductModal';

function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  // In a real scenario, fetch product data from an API or context
  const products = require('./data/products.json');

  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
  };

  const closeModal = () => {
    setSelectedProductId(null);
  };

  const selectedProduct = products.find((p) => p.id === selectedProductId);

  return (
    <div>
      <h1>3D Product Carousel</h1>
      <Carousel onProductSelect={handleProductSelect} />
      <ProductModal product={selectedProduct} onClose={closeModal} />
    </div>
  );
}

export default App;
