import PropTypes from 'prop-types';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        
        <div className="modal-body">
          <div className="modal-product-view">
            {/* For an AR/3D approach, embed your 3D viewer here */}
            <img src={product.image} alt={product.name} className="modal-product-image"/>
          </div>
          <div className="modal-product-info">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
            <button className="try-it-on-btn">Try It On</button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProductModal;