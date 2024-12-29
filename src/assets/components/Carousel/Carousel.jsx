import { useRef } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import products from '../../data/products.json';
import './Carousel.css';

const Carousel = ({ onProductSelect }) => {
  const carouselRef = useRef(null);

  return (
    <div className="carousel-container" ref={carouselRef}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onCardClick={onProductSelect}
        />
      ))}
    </div>
  );
};

Carousel.propTypes = {
  onProductSelect: PropTypes.func.isRequired,
};

export default Carousel;