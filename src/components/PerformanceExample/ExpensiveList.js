import React, { useState, useMemo, useCallback } from 'react';
import { useTheme } from '../../context/ThemeContext';

// Expensive calculation function
const calculateTotal = (items) => {
  console.log('Calculating total...');
  return items.reduce((sum, item) => sum + item.value, 0);
};

// Memoized ListItem component
const ListItem = React.memo(({ item, onDelete }) => {
  console.log(`Rendering ListItem ${item.id}`);
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px',
      marginBottom: '4px',
      backgroundColor: '#f0f0f0',
      borderRadius: '4px'
    }}>
      <span>Item {item.id}: {item.value}</span>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
});

function ExpensiveList() {
  const [items, setItems] = useState(() => 
    Array.from({ length: 1000 }, (_, index) => ({
      id: index,
      value: Math.floor(Math.random() * 100)
    }))
  );
  const [filter, setFilter] = useState('');
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
      cursor: 'pointer',
      marginRight: '8px'
    },
    input: {
      padding: '8px',
      marginBottom: '16px',
      borderRadius: '4px',
      border: `1px solid ${theme.secondary}`,
      width: '100%'
    },
    stats: {
      backgroundColor: `${theme.secondary}20`,
      padding: '12px',
      borderRadius: '4px',
      marginBottom: '16px'
    }
  };

  // Memoized filtering logic
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => 
      filter ? item.value.toString().includes(filter) : true
    );
  }, [items, filter]);

  // Memoized total calculation
  const total = useMemo(() => {
    return calculateTotal(filteredItems);
  }, [filteredItems]);

  // Memoized delete handler
  const handleDelete = useCallback((id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  // Add new random item
  const handleAdd = () => {
    const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 0;
    setItems(prevItems => [
      ...prevItems,
      { id: newId, value: Math.floor(Math.random() * 100) }
    ]);
  };

  return (
    <div style={styles.container}>
      <h2>Performance Optimization Example</h2>
      
      <div style={styles.stats}>
        <p>Total Items: {filteredItems.length}</p>
        <p>Sum of Values: {total}</p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <button style={styles.button} onClick={handleAdd}>
          Add Item
        </button>
      </div>

      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by value..."
        style={styles.input}
      />

      <div style={{ maxHeight: '400px', overflow: 'auto' }}>
        {filteredItems.slice(0, 100).map(item => (
          <ListItem
            key={item.id}
            item={item}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Performance Optimizations Used:</h3>
        <ul>
          <li>React.memo for ListItem component</li>
          <li>useMemo for expensive calculations</li>
          <li>useCallback for event handlers</li>
          <li>Virtualization (showing only 100 items)</li>
          <li>Optimized initial state with function</li>
        </ul>
      </div>
    </div>
  );
}

export default ExpensiveList;
