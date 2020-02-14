import React from 'react';
import { useLocation } from 'react-router-dom';

const Form = ({ questions }) => {
  const path = useLocation().pathname;

  // page question from URL path
  const page = parseInt(path.match(/report\/(\d+)$/i)[1]);

  console.log({ page });

  const pageQuestions = questions
    ? questions
      .filter(question => {
        return question.page === page;
      })
      .map(question => {
        return (
          <>
            <p> {question.question}</p>
            {question.content ? (
              question.content.map(answer => {
                return (
                  <>
                    <input
                      type={question.type}
                      value={answer}
                      id={answer + ' ' + question.questionNumber}
                    />
                    <label htmlFor={answer}>{answer}</label>
                  </>
                );
              })
            ) : (
              <input type={question.type} />
            )}
          </>
        );
      })
    : null;
  return (
    <form>
      {pageQuestions}
      <input type={question.type} />
    </form>
  );
};

export default Form;
