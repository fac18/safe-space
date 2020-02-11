import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('The Footer renders', () => {
  render(<Footer></Footer>);
});
test('renders about link', () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders about link', () => {
//   const { getByText } = render(<Footer></Footer>);
//   const about = getByText(/about/i);
//   fireEvent.click(about);
//
// });
