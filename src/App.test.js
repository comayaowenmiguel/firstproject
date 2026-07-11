import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Homies Cafe homepage', () => {
  render(<App />);
  const headingElement = screen.getByText(/Good coffee/i);
  expect(headingElement).toBeInTheDocument();
});
