import { useState, useRef } from 'react';
import ProductCard from './ProductCard';
import products from '../../data/products.json';
import './Carousel.css';

const Carousel = ({ onProductSelect }) => {
  const carouselRef = useRef(null);

  // Optional: current index or other logic if you want arrow/dot navigation
  // For swipe, we can rely on scroll or use a library like react-swipeable

  return (
    <div className="carousel-container" ref={carouselRef}>
      <div className="carousel-track">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onCardClick={onProductSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
