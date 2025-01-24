import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import PostList from './PostList';
import { ThemeProvider } from '../../context/ThemeContext';

// Mock data
const posts = [
  { id: 1, title: 'Test Post 1', body: 'This is test post 1' },
  { id: 2, title: 'Test Post 2', body: 'This is test post 2' }
];

// Setup MSW server
const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(ctx.json(posts));
  })
);

// Setup and teardown MSW
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Test wrapper component
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  });

  return ({ children }) => (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
};

describe('PostList', () => {
  it('shows loading state initially', () => {
    render(<PostList />, { wrapper: createWrapper() });
    expect(screen.getByText(/loading posts/i)).toBeInTheDocument();
  });

  it('renders posts after successful fetch', async () => {
    render(<PostList />, { wrapper: createWrapper() });

    // Wait for posts to load
    await waitFor(() => {
      expect(screen.getByText('Test Post 1')).toBeInTheDocument();
      expect(screen.getByText('Test Post 2')).toBeInTheDocument();
    });
  });

  it('shows error message on fetch failure', async () => {
    // Override the default handler to return an error
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<PostList />, { wrapper: createWrapper() });

    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText(/error loading posts/i)).toBeInTheDocument();
    });
  });
});
