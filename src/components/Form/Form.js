import React from 'react';
import { useLocation } from 'react-router-dom';

const Form = ({ questions }) => {
  // get page question from URL path
  const page = parseInt(useLocation().pathname.match(/report\/(\d+)$/i)[1]);

  const pageQuestions = questions
    ? questions
        .filter(question => {
          return question.page === page;
        })
        .map((question, i) => (
          <React.Fragment key={i}>
            <p> {question.question}</p>
            {question.content ? (
              question.content.map((answer, i) => {
                return (
                  <React.Fragment key={i}>
                    <input
                      name={question.question}
                      type={question.type}
                      value={answer}
                      id={answer + ' ' + question.questionNumber}
                    />
                    <label htmlFor={answer}>{answer}</label>
                  </React.Fragment>
                );
              })
            ) : (
              <input type={question.type} />
            )}
          </React.Fragment>
        ))
    : null;
  return (
    <form data-testid='test1' key='1'>
      {pageQuestions}
    </form>
  );
};

export default Form;
