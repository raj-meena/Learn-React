import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

function Products() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
  ];

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: theme.background,
      color: theme.text,
      borderRadius: '8px'
    },
    link: {
      color: theme.primary,
      textDecoration: 'none',
      marginRight: '10px'
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
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`} style={styles.link}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
      <button 
        style={styles.button}
        onClick={() => navigate('/')}
      >
        Go Back Home
      </button>
    </div>
  );
}

export default Products;
