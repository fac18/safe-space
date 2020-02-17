import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders the home page', () => {
  const { getByText } = render(
  <MemoryRouter>
    <App />
  </MemoryRouter>);
  const linkElement = getByText(/48% of musicians have experienced sexual harassment at work/i);
  expect(linkElement).toBeInTheDocument();
});