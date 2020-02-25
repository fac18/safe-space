import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Confirm from './Confirm';

test('The Confirm renders', () => {
  const history = createMemoryHistory();
  history.push('/report/confirm');
  const { getByText } = render(
    <Router history={history}>
      <Confirm></Confirm>
    </Router>
  );
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
