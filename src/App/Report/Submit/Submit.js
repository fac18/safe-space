import React from 'react';
import { postResponses, stringify } from '../../../utils';
import { TextField } from '@rmwc/textfield';
import { useHistory } from 'react-router-dom';
import { Header } from '../../index';
import { ButtonPrimary } from '../../style';
import { Container, Type5, TypeB1 } from './style';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/typography/dist/mdc.typography.css';
import uuid from 'uuid/v4';

const Submit = ({ responses, updateResponses }) => {
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

  // NEED TO devise a way to submit multiple responses to Airtable, rather than just concatenate into one string
  // OR have them arrive in separate columns in the responses tables
  const handleSubmit = event => {
    event.preventDefault();
    const finalResponses = {
      ...processResponses(responses),
      userRef: uuid(),
    };
    postResponses('first-responses', stringify(finalResponses)).then(res => {
      // navigate to confirmation once response from POST successfully received
      history.push('/report/confirm');
    });
  };

  return (
    <>
      <Header />
      <Container>
        <Type5 use='headline5' tag='h5'>
          Thank you for reporting
        </Type5>
        <TypeB1 use='subtitle1'>
          Please confirm that you give permission to the MU to use this report
          to bring about change in the music industry.
        </TypeB1>

        <TypeB1 use='subtitle1'>
          This is entirely optional, but if you wish to be contacted by the MU
          in regard to this report, please provide your email below:
        </TypeB1>

        <TextField
          use='body1'
          fullwidth
          label='email'
          pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
          onChange={updateResponses}
          name='userEmail'
        ></TextField>
        <ButtonPrimary onClick={handleSubmit} raised>
          Submit
        </ButtonPrimary>
      </Container>
    </>
  );
};

export default Submit;

// show unique user reference and tell user to keep it somewhere safe
// give form field for user to input email if they want to
// make button to enable pdf download
// make final submit button that posts user and responses to Airtable
