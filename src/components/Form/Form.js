import React from 'react';

const Form = ({ questions }) => {
  console.log({ questions });
  const questionArray = questions.questions.map(question => {
    return (
      <>
        <p> {question.question}</p>
        {question.content
          ? question.content.map(answer => {
              return (
                <>
                  <input type={question.type} value={answer} id={answer} />
                  <label for={answer}>{answer}</label>
                </>
              );
            })
          : null}
      </>
    );
  });
  return <form>{questionArray}</form>;
};

export default Form;
