import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTheme } from '../../context/ThemeContext';

// Modal component that uses portal
function Modal({ isOpen, onClose, children }) {
  const { theme } = useTheme();

  if (!isOpen) return null;

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    modal: {
      backgroundColor: theme.background,
      color: theme.text,
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '500px',
      width: '90%',
      position: 'relative'
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      color: theme.text
    }
  };

  return ReactDOM.createPortal(
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        <button style={styles.closeButton} onClick={onClose}>×</button>
        {children}
      </div>
    </div>,
    document.body
  );
}

function PortalExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <h2>Portal Example</h2>
      <p>Portals allow rendering content outside the parent component's DOM hierarchy.</p>
      
      <button 
        style={styles.button}
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Modal Content</h3>
        <p>This modal is rendered using a Portal, outside the main React tree.</p>
        <p>Benefits of Portals:</p>
        <ul>
          <li>Avoid z-index issues</li>
          <li>Escape parent CSS constraints</li>
          <li>Ideal for modals, tooltips, etc.</li>
        </ul>
      </Modal>
    </div>
  );
}

export default PortalExample;
