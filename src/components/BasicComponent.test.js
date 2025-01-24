import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicComponent from './BasicComponent';

describe('BasicComponent', () => {
  it('renders the component with correct text', () => {
    render(<BasicComponent />);
    
    // Check if the heading exists
    expect(screen.getByText('This is a Basic Component')).toBeInTheDocument();
    
    // Check if the paragraph exists
    expect(screen.getByText(/This demonstrates a simple React component/i)).toBeInTheDocument();
  });

  it('is accessible', () => {
    const { container } = render(<BasicComponent />);
    
    // Check if heading is using correct heading level
    expect(container.querySelector('h2')).toBeInTheDocument();
  });
});
