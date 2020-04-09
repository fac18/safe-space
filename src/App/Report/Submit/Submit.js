import React from 'react';
import { postResponses, stringify } from '../../../utils';
import { TextField } from '@rmwc/textfield';
import { useHistory } from 'react-router-dom';
import { Header } from '../../index';
import { ButtonPrimary } from '../../style';
import { Container, Type5, TypeB1 } from './style';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/typography/dist/mdc.typography.css';

const Submit = ({ responses, updateResponses, choice, userRef }) => {
  const history = useHistory();

  // fn: process data in responses object (e.g. strip out empty strings produced by implementation of 'Other' fields)
  const processResponses = responses => {
    for (let question in responses) {
      // use hasOwnProperty to avoid considering inherited properties (objects are messy)
      if (responses.hasOwnProperty(question)) {
        if (Array.isArray(responses[question])) {
          responses[question].filter(answer => {
            return !(answer === '');
          });
        }
      }
    }
    return responses;
  };

  const handleSubmit = event => {
    event.preventDefault();
    const finalResponses = {
      ...processResponses(responses),
      userRef,
    };
    postResponses(`${choice}-responses`, stringify(finalResponses)).then(
      res => {
        // navigate to confirmation once response from POST successfully received
        history.push('/report/confirm');
      }
    );
  };

  return (
    <>
      <Header />
      <Container>
        <Type5 use='headline5' tag='h5'>
          One more thing...
        </Type5>
        <TypeB1 use='subtitle1'>
          If you wish one of the MU employees to get in touch with you regarding
          this report, please leave your e-mail address below:
        </TypeB1>
        <TypeB1 use='subtitle1'>
          Otherwise, just submit your report to finish.
        </TypeB1>

        <TextField
          use='body1'
          label='email'
          pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
          onChange={updateResponses}
          name='userEmail'
        ></TextField>
        <ButtonPrimary onClick={handleSubmit} raised>
          Submit this report
        </ButtonPrimary>
      </Container>
    </>
  );
};

export default Submit;
