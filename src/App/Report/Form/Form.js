import React from 'react';
import { FormContainer, FlexColumn, FlexRow } from '../../style';
import { Header, ButtonNext, ButtonBack } from '../../index';
import { FormQuestion } from './index';
import { useParams, useHistory, Link } from 'react-router-dom';

// fn: filter full questions object to determine which to display on page being rendered
const filterQuestions = (questions, page, responses) => {
  return questions.filter((question, i) => {
    if (question.page === page) {
      if (question.split) {
        return question.condition.includes(responses[question.split]);
      } else {
        return true;
      }
    } else {
      return false;
    }
  });
};

// fn: find indices (in questions array) of first and last questions to appear on given page
// NB. the indices are returned even if the questions will not be displayed, to allow for proper routing
const findIndices = (questions, page) => {
  let firstIndex = Infinity;
  let lastIndex = 0;
  questions.forEach((question, i) => {
    if (question.page === page) {
      if (i < firstIndex) firstIndex = i;
      if (i > lastIndex) lastIndex = i;
    }
  });
  return [firstIndex, lastIndex];
};

// fn: return appropriate destination on page navigation
const findNextPage = (questions, page, responses) => {
  const [, lastIndex] = findIndices(questions, page);
  // if the next page's questions are split by a question on this page
  // but an answer has not been supplied to the splitter question
  if (
    questions[lastIndex + 1] &&
    questions[lastIndex + 1].split &&
    !responses[questions[lastIndex + 1].split]
  ) {
    // then recur the function with revised page and index values
    const nextPage = page + 1;
    const [, newLastIndex] = findIndices(questions, nextPage);
    return findNextPage(questions, nextPage, newLastIndex);
  } else {
    // else navigate to next page/section divider/submission page as appropriate
    return lastIndex === questions.length - 1
      ? `/report/submit` // send to review/submission page upon completion
      : questions[lastIndex].section !== questions[lastIndex + 1].section
      ? `/report/section/${questions[lastIndex + 1].section}`
      : `/report/${page + 1}`;
  }
};

const findPrevPage = (questions, page, responses) => {
  const [firstIndex] = findIndices(questions, page);
  // as above, but instead test whether the last page's questions were split by an earlier question
  if (
    questions[firstIndex - 1] &&
    questions[firstIndex - 1].split &&
    responses[questions[firstIndex - 1].split]
  ) {
    const prevPage = page - 1;
    const [newFirstIndex] = findIndices(questions, prevPage);
    return findNextPage(questions, prevPage, newFirstIndex);
  } else {
    return firstIndex === 0
      ? `/report/section/${questions[0].section}`
      : questions[firstIndex].section !== questions[firstIndex - 1].section
      ? `/report/section/${questions[firstIndex].section}`
      : `/report/${page - 1}`;
  }
};

const Form = ({ questions, responses, updateResponses }) => {
  // get page from React Router state, and history for programmatic routing
  const page = parseInt(useParams().index, 10);
  const history = useHistory();

  console.log({ responses });

  // get questions to be displayed on this page
  const pageQuestions = filterQuestions(questions, page, responses);

  // add condition to check if page empty and redirect via history (should only occur going backwards)
  if (pageQuestions.length === 0) {
    history.push(findPrevPage(questions, page));
  }

  return (
    <>
      <Header />
      <FormContainer>
        <FlexColumn>
          <form id='report-form'>
            {(() =>
              pageQuestions.map((question, i) => (
                <FormQuestion
                  key={`${page}.${i}`}
                  i={i}
                  question={question}
                  responses={responses}
                  updateResponses={updateResponses}
                  page={page}
                ></FormQuestion>
              )))()}
          </form>
          <FlexRow>
            <ButtonBack
              tag={Link}
              to={findPrevPage(questions, page, responses)}
              // onClick={triggerChange}
            >
              Back
            </ButtonBack>
            <ButtonNext
              tag={Link}
              to={findNextPage(questions, page, responses)}
              // onClick={triggerChange}
            >
              Next
            </ButtonNext>
          </FlexRow>
        </FlexColumn>
      </FormContainer>
    </>
  );
};

export default Form;
