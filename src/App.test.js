import { render, screen } from '@testing-library/react';
import App from './App';
import Landing from './components/pages/Landing'
import About from './components/pages/About'

test('renders tagline', () => {
  render(<Landing />);
  const tagline = screen.getByText(/technology is the light that can cut through the darkness/i);
  expect(tagline).toBeInTheDocument();
});

test("displays a card with picture and bio", () => {
  render(<About />)
  const card = screen.getByText(/About me/i)
  expect(card).toBeInTheDocument()
})
