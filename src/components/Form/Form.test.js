import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';
import questions from '../../model/questions';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

test('Page 2 of report form renders with the correct questions', async () => {
  const history = createMemoryHistory();
  history.push('/report/2')

  const { findByText, debug } = render(
    <Router history={history}>
      <Form questions={questions} />
    </Router>
  );
  const pg2q1 = await findByText(/Did the incident take place in the UK/i);
  const pg2q2 = await findByText(/What kind of location did the incident take place in/i);
  const pg2q3 = await findByText(/What is the name and\/or address of the location/i);

  debug(pg2q1)
  debug(pg2q2)
  debug(pg2q3)

  expect(pg2q1).toBeInTheDocument()
  expect(pg2q2).toBeInTheDocument()
  expect(pg2q3).toBeInTheDocument()
});

