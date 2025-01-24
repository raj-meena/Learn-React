import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import PostList from './PostList';
import ErrorTrigger from './ErrorTrigger';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false
    }
  }
});

function QueryExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <PostList />
        <ErrorTrigger />
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default QueryExample;
