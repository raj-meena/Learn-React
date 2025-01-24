import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import ProductDetail from './ProductDetail';
import Profile from './Profile';
import { useTheme } from '../../context/ThemeContext';

function RouterExample() {
  const { theme } = useTheme();

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: theme.background,
      color: theme.text,
      borderRadius: '8px'
    },
    nav: {
      marginBottom: '20px'
    },
    link: {
      color: theme.primary,
      textDecoration: 'none',
      marginRight: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <h2>Router Example</h2>
      <BrowserRouter>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/products" style={styles.link}>Products</Link>
          <Link to="/profile" style={styles.link}>Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterExample;
