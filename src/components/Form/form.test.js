import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';
import questions from '../../model/questions';

test('The Form renders', () => {
  render(<Form questions={questions}></Form>);
});
