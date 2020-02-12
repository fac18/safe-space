import React from 'react';

const Form = ({ questions }) => {
  console.log({ questions });
  const questionArray = questions.questions.map(question => {
    return (
      <>
        <p> {question.question}</p>
        <input type={question.type} name='question' />;
      </>
    );
  });
  return <form>{questionArray}</form>;
};

export default Form;
