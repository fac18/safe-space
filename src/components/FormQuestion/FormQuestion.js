import React from 'react';

const FormQuestion = ({ page, questions, setResponses }) => {
  return questions
    ? questions
        .filter(question => {
          return question.page === page;
        })
        .map(question => {
          return (
            <>
              <p>{question.question}</p>
              {question.content ? (
                question.content.map(answer => {
                  return (
                    <>
                      <input
                        name={question.question}
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
};

export default FormQuestion;
