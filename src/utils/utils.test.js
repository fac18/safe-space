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
history.push('/report/1');

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockResponse),
  }).catch(console.error)
);

it('mocks a returns of expected data', () => {
  const { getByPlaceholderText, getByText } = render(
    act(
      <Router history={history}>
        <App />
      </Router>
    )
  );
  render(
    <Router history={history}>
      <Report questions={mockResponse} />
    </Router>
  );

  const questionTitle = getByText('When did the incident take place?');
  expect(questionTitle).toBeInTheDocument();

  expect(global.fetch).toHaveBeenCalledTimes(1);
});
