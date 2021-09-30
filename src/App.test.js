import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tagline', () => {
  render(<App />);
  const tagline = screen.getByText(/technology is the light that can cut through the darkness/i);
  expect(tagline).toBeInTheDocument();
});
