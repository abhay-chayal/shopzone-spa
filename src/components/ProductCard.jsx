import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.thumbnail} alt={product.title} width="150" />
      <h4>{product.title}</h4>
      <p>₹{product.price}</p>

      <Link to={`/product/${product.id}`}>
        View Details
      </Link>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "12px",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default ProductCard;