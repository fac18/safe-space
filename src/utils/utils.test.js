import React from 'react';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Report } from '../App/index';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import mockResponse from '../model/questions';
import { stringify } from './index';

describe('stringify makes arrays in an object into comma separated strings', () => {
  const obj = {
    yes: ['H', 'E', 'L', 'L', 'O'],
    no: [0, 1, 2],
  };
  let stringifiedObj = stringify(obj);
  expect(stringifiedObj.yes).toBe('H, E, L, L, O');
  expect(stringifiedObj.no).toBe('0, 1, 2');
});

afterEach(cleanup);

const history = createMemoryHistory();

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockResponse),
  }).catch(console.error)
);

it('mocks a returns of expected data', async () => {
  // act(() => {
  const { getByText, debug } = render(
    <Router history={history}>
      <Report />
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
    '../../.netlify/functions/get-dividers/get-dividers.js'
  );
  await wait();
  // Why use async await in a test? :
  // https://kentcdodds.com/blog/write-fewer-longer-tests
});
