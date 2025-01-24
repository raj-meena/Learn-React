import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useTheme } from '../../context/ThemeContext';

// API function
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostList() {
  const { theme } = useTheme();
  const { 
    data: posts,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 60000, // Consider data fresh for 1 minute
    cacheTime: 300000 // Keep data in cache for 5 minutes
  });

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: theme.background,
      color: theme.text,
      borderRadius: '8px'
    },
    post: {
      padding: '15px',
      marginBottom: '10px',
      backgroundColor: `${theme.secondary}20`,
      borderRadius: '4px'
    },
    button: {
      backgroundColor: theme.primary,
      color: '#ffffff',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '10px'
    },
    errorContainer: {
      padding: '15px',
      backgroundColor: '#ff000020',
      borderRadius: '4px',
      marginBottom: '10px'
    }
  };

  if (isLoading) {
    return (
      <div style={styles.container}>
        <h2>Posts</h2>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div style={styles.container}>
        <h2>Posts</h2>
        <div style={styles.errorContainer}>
          <p>Error loading posts: {error.message}</p>
          <button style={styles.button} onClick={refetch}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Posts</h2>
      <button style={styles.button} onClick={refetch}>
        Refresh Posts
      </button>

      <div style={{ marginTop: '20px' }}>
        {posts.slice(0, 5).map(post => (
          <div key={post.id} style={styles.post}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>React Query Features Demonstrated:</h3>
        <ul>
          <li>Automatic caching</li>
          <li>Loading states</li>
          <li>Error handling</li>
          <li>Refetch functionality</li>
          <li>Stale time configuration</li>
        </ul>
      </div>
    </div>
  );
}

export default PostList;
