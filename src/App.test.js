import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Math Masters h1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Math Masters/i);
  expect(linkElement).toBeTruthy();
});

test('renders homepage text', () => {
  render(<App />);
  const linkElement = screen.getByText(/and allows the student/i);
  expect(linkElement).toBeTruthy();
});
