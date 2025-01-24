import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StateExample from './StateExample';

describe('StateExample', () => {
  it('renders initial count of 0', () => {
    render(<StateExample />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('increments count when increment button is clicked', () => {
    render(<StateExample />);
    
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  it('decrements count when decrement button is clicked', () => {
    render(<StateExample />);
    
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    
    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });

  it('handles multiple clicks correctly', () => {
    render(<StateExample />);
    
    const incrementButton = screen.getByText('Increment');
    const decrementButton = screen.getByText('Decrement');
    
    // Click increment three times
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    
    expect(screen.getByText('Count: 3')).toBeInTheDocument();
    
    // Click decrement once
    fireEvent.click(decrementButton);
    
    expect(screen.getByText('Count: 2')).toBeInTheDocument();
  });
});
