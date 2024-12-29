import PropTypes from 'prop-types';
import './ProductCard.css';

const ProductCard = ({ product, onCardClick }) => {
  return (
    <div
      className="product-card"
      onClick={() => onCardClick(product.id)}
      tabIndex={0}
      role="button"
      aria-label={`View details about ${product.name}`}
    >
      <div className="card-content">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default ProductCard;