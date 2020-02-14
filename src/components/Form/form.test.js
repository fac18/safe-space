import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';
import questions from '../../model/questions';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

test('The Form renders', () => {
  const history = createMemoryHistory();
  const { getByTestId, debug } = render(
    <Router history={history}>
      <Form questions={questions} />
    </Router>
  );
  const formTest = getByTestId("test1");
  debug(formTest)
  expect(formTest).toBeInTheDocument()
});
