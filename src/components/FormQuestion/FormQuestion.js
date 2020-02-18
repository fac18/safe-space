import React, { useReducer } from 'react';

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};

const FormQuestion = ({ page, questions, responses, setResponses }) => {
  const initialValue = responses;
  console.log({ initialValue });
  const [state, dispatch] = useReducer(reducer, initialValue);
  const onChange = event => {
    console.log({ responses });
    const val =
      event.target.type === 'checkbox'
        ? event.target.value
        : event.target.value;
    dispatch({ field: event.target.name, value: val });
  };
  let arr = [];
  questions.map(single => arr.push(single.question));
  arr = state;
  console.log({ state });

  return;
  questions
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

  questions
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
                        value={answer}
                        id={answer + ' ' + question.questionNumber}
                        onChange={onChange}
                      />
                      <label htmlFor={answer}>{answer}</label>
                    </React.Fragment>
                  );
                })
              ) : (
                <input type={question.type} />
              )}
            </React.Fragment>
          );
        })
    : null;
};

export default FormQuestion;
