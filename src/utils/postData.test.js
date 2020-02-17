import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';
import Report from '../pages/Report';
import App from '../App/App';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

afterEach(cleanup);

const history = createMemoryHistory();

const mockResponse = {
  mockQuestions: ['All of the questions', 'and some more information'],
};

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockResponse),
  }).catch(console.error)
);

it('mocks a returns of expected data', () => {
  const { getByPlaceholderText, getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  render(
    <Router history={history}>
      <Search />
    </Router>
  );

  const input = getByPlaceholderText('Search');
  fireEvent.change(input, { target: { value: 'Collection name' } });

  const searchButton = getByText('SEARCH');
  fireEvent.click(searchButton);

  expect(global.fetch).toHaveBeenCalledTimes(1);
});
