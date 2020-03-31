import React from 'react';
import { FlexInputs, InputWrapper, TextArea, TextInput } from './style';

const TextQuestion = ({ index, page, question, response, updateResponses }) => (
  <InputWrapper>
    <TextInput
      name={question.question}
      type={question.type}
      placeholder={question.content[0]}
      id={`${page}.${index}`}
      onChange={updateResponses}
      value={response ? response : ''}
    />
  </InputWrapper>
);

const TextareaQuestion = ({
  index,
  page,
  question,
  response,
  updateResponses,
}) => (
  <InputWrapper>
    <FlexInputs>
      <TextArea
        form='report-form'
        name={question.question}
        placeholder={question.content[0]}
        wrap='soft'
        rows='10'
        cols='70'
        onChange={updateResponses}
        id={`${page}.${index}`}
        value={response ? response : ''}
      />
    </FlexInputs>
  </InputWrapper>
);

const CheckboxQuestion = ({
  index,
  page,
  question,
  other,
  otherVisibility,
  syncRef,
  syncRefOther,
  updateAndReveal,
  changeOther,
  triggerUpdate,
}) => (
  <InputWrapper>
    {question.content.map((answer, j) => {
      return (
        <FlexInputs key={j}>
          <input
            ref={answer === 'Other (please specify)' ? syncRefOther : syncRef}
            name={question.question}
            type={question.type}
            value={answer === 'Other (please specify)' ? other : answer}
            id={`${page}.${index}.${j}`}
            onChange={updateAndReveal}
          />
          <label htmlFor={`${page}.${index}.${j}`}>{answer}</label>
        </FlexInputs>
      );
    })}
    {otherVisibility ? (
      <FlexInputs>
        <input
          name={`${question.question} - other`}
          type='text'
          placeholder='Give more detail here'
          onChange={changeOther}
          onBlur={triggerUpdate}
          id={`${page}.${index}.otherText`}
          value={other}
        />
      </FlexInputs>
    ) : null}
  </InputWrapper>
);

const RadioQuestion = ({
  index,
  page,
  question,
  other,
  otherVisibility,
  syncRef,
  syncRefOther,
  updateAndReveal,
  changeOther,
  triggerUpdate,
}) => (
  <InputWrapper>
    {question.content.map((answer, j) => {
      return (
        <FlexInputs key={j}>
          <input
            ref={answer === 'Other (please specify)' ? syncRefOther : syncRef}
            name={question.question}
            type={question.type}
            value={answer === 'Other (please specify)' ? other : answer}
            id={`${page}.${index}.${j}`}
            onChange={updateAndReveal}
          />
          <label htmlFor={`${page}.${index}.${j}`}>{answer}</label>
        </FlexInputs>
      );
    })}
    {otherVisibility ? (
      <FlexInputs>
        <input
          name={`${question.question} - other`}
          type='text'
          placeholder='Give more detail here'
          onChange={changeOther}
          onBlur={triggerUpdate}
          id={`${page}.${index}.otheText`}
          value={other}
        />
      </FlexInputs>
    ) : null}
  </InputWrapper>
);

const DateQuestion = ({ index, page, question, response, updateResponses }) => (
  <InputWrapper>
    <FlexInputs>
      <input
        name={question.question}
        type={question.type}
        id={`${page}.${index}`}
        onChange={updateResponses}
        value={response ? response : ''}
      />
    </FlexInputs>
  </InputWrapper>
);

export {
  TextQuestion,
  TextareaQuestion,
  CheckboxQuestion,
  RadioQuestion,
  DateQuestion,
};
