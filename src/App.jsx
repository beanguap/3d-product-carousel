import { useState } from 'react';
import Carousel from './assets/components/Carousel/Carousel';
import ProductModal from './assets/components/ProductModal/ProductModal';
import products from './assets/data/products.json';
import '@google/model-viewer';

function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);

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