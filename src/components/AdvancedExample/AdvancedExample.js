import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import PortalExample from './PortalExample';
import RefExample from './RefExample';
import withAuth from './withAuth';
import useLocalStorage from '../../hooks/useLocalStorage';
import useDebounce from '../../hooks/useDebounce';

// Protected component using HOC
const ProtectedContent = withAuth(({ secretData }) => (
  <div>
    <h3>Protected Content</h3>
    <p>{secretData}</p>
  </div>
));

function AdvancedExample() {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: theme.background,
      color: theme.text,
      borderRadius: '8px'
    },
    section: {
      marginBottom: '20px',
      padding: '20px',
      backgroundColor: `${theme.secondary}10`,
      borderRadius: '8px'
    },
    input: {
      padding: '8px',
      marginBottom: '8px',
      borderRadius: '4px',
      border: `1px solid ${theme.secondary}`,
      width: '100%'
    }
  };

  return (
    <div style={styles.container}>
      <h2>Advanced React Concepts</h2>

      {/* Custom Hooks Example */}
      <div style={styles.section}>
        <h3>Custom Hooks Example</h3>
        <p>Type something (it persists in localStorage):</p>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type to search..."
          style={styles.input}
        />
        <p>Debounced value (updates after 500ms): {debouncedSearchTerm}</p>
      </div>

      {/* Portal Example */}
      <div style={styles.section}>
        <PortalExample />
      </div>

      {/* Ref Example */}
      <div style={styles.section}>
        <RefExample />
      </div>

      {/* HOC Example */}
      <div style={styles.section}>
        <h3>Higher-Order Component Example</h3>
        <ProtectedContent secretData="This is sensitive information protected by the withAuth HOC" />
      </div>

      <div style={styles.section}>
        <h3>Advanced Concepts Demonstrated:</h3>
        <ul>
          <li>Custom Hooks (useLocalStorage, useDebounce)</li>
          <li>Portals for Modal Dialogs</li>
          <li>Refs for DOM Access and Values</li>
          <li>Higher-Order Components (HOC)</li>
          <li>Compound Components Pattern</li>
          <li>Render Props Pattern</li>
        </ul>
      </div>
    </div>
  );
}

export default AdvancedExample;
