import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: theme.background,
      color: theme.text,
      borderRadius: '8px'
    },
    button: {
      backgroundColor: theme.primary,
      color: '#ffffff',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <h2>Product Detail</h2>
      <p>Viewing product with ID: {productId}</p>
      <p>This demonstrates URL parameters in React Router</p>
      <button 
        style={styles.button}
        onClick={() => navigate('/products')}
      >
        Back to Products
      </button>
    </div>
  );
}

export default ProductDetail;
