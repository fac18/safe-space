import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Report } from '../pages';
import App from '../App/App';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import mockResponse from '../model/questions';

afterEach(cleanup);

const history = createMemoryHistory();

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockResponse),
  }).catch(console.error)
);

it('mocks a returns of expected data', () => {
  // act(() => {
  const { getByText, debug } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  // });
  // expect(global.fetch).toHaveBeenCalledTimes(1);
  // expect the first call to be to get questions
  expect(global.fetch.mock.calls[0][0]).toBe(
    '../../.netlify/functions/get-questions/get-questions.js'
  );
  // and the second to be to get-users

  expect(global.fetch.mock.calls[1][0]).toBe(
    '../../.netlify/functions/get-users/get-users.js'
  );
  debug();
});
