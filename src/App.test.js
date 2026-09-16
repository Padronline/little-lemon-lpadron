import { render, screen } from '@testing-library/react';
import App from './App';

test('renders little lemon logo', () => {
  render(<App />);
  const logoElement = screen.getByText(/little lemon/i);
  expect(logoElement).toBeInTheDocument();
});
