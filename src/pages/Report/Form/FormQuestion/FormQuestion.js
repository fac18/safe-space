import React from 'react';

const FormQuestion = ({ page, questions, funcOnChange }) => {
  return questions
    ? questions
        .filter(question => {
          return question.page === page;
        })
        .map((question, i) => {
          return (
            <React.Fragment key={i}>
              <p>{question.question}</p>
              {question.content ? (
                question.content.map((answer, i) => {
                  return (
                    <React.Fragment key={i}>
                      <input
                        name={question.question}
                        type={question.type}
                        defaultValue={answer}
                        id={answer + ' ' + question.questionNumber}
                        onChange={funcOnChange}
                      />
                      <label htmlFor={answer}>{answer}</label>
                    </React.Fragment>
                  );
                })
              ) : (
                <input
                  name={question.question}
                  type={question.type}
                  onChange={funcOnChange}
                  defaultValue={''}
                />
              )}
            </React.Fragment>
          );
        })
    : null;
};

export default FormQuestion;