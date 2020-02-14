import React from 'react';

const Form = ({ questions, responses, setResponses }) => {
  const questionArray = questions.map(question => {
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
  });
  return <form>{questionArray}</form>;
};

export default Form;
