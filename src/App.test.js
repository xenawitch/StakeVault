// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StakeVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/StakeVault/i);
    expect(titleElement).toBeInTheDocument();
});
