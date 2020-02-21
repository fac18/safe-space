import React from 'react';
import { render } from '@testing-library/react';
import FormQuestion from './FormQuestion';
import hardQuestions from '../../../../model/questions';
import hardResponses from '../../../../model/responses';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

test('Page 2 of report form renders with the correct questions', async () => {
  const history = createMemoryHistory();
  history.push('/report/2');

  const { findByText, debug } = render(
    <Router history={history}>
      <FormQuestion
        page={2}
        questions={hardQuestions}
        responses={hardResponses}
      />
    </Router>
  );
  const pg2q1 = await findByText(/Did the incident take place in the UK?/i);
  const pg2q2 = await findByText(
    /What kind of location did the incident take place in?/i
  );
  const pg2q3 = await findByText(/Where exactly did the incident take place?/i);

  // debug();

  expect(pg2q1).toBeInTheDocument();
  expect(pg2q2).toBeInTheDocument();
  expect(pg2q3).toBeInTheDocument();
});
