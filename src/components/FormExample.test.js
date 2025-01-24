import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormExample from './FormExample';

describe('FormExample', () => {
  it('renders form fields correctly', () => {
    render(<FormExample />);
    
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty fields', async () => {
    render(<FormExample />);
    
    // Submit the form without filling any fields
    fireEvent.click(screen.getByText(/submit/i));
    
    // Check for error messages
    expect(await screen.findByText(/username is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/password is required/i)).toBeInTheDocument();
  });

  it('shows error for invalid email format', async () => {
    render(<FormExample />);
    
    // Fill in invalid email
    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, 'invalid-email');
    
    // Submit form
    fireEvent.click(screen.getByText(/submit/i));
    
    // Check for email format error
    expect(await screen.findByText(/email is invalid/i)).toBeInTheDocument();
  });

  it('shows success message on valid form submission', async () => {
    render(<FormExample />);
    
    // Fill in valid form data
    await userEvent.type(screen.getByLabelText(/username/i), 'testuser');
    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'password123');
    
    // Submit form
    fireEvent.click(screen.getByText(/submit/i));
    
    // Check for success message
    expect(await screen.findByText(/form submitted successfully/i)).toBeInTheDocument();
  });

  it('clears form after successful submission', async () => {
    render(<FormExample />);
    
    // Fill in valid form data
    const usernameInput = screen.getByLabelText(/username/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    
    await userEvent.type(usernameInput, 'testuser');
    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'password123');
    
    // Submit form
    fireEvent.click(screen.getByText(/submit/i));
    
    // Check that fields are cleared
    await waitFor(() => {
      expect(usernameInput).toHaveValue('');
      expect(emailInput).toHaveValue('');
      expect(passwordInput).toHaveValue('');
    });
  });
});
