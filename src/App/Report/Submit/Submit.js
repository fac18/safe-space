import React, { useState } from 'react';
import { postResponses, incrementKeys, unspoolArrays } from '../../../utils';
import { TextField } from '@rmwc/textfield';
import { useHistory } from 'react-router-dom';
import { Header } from '../../index';
import { ButtonPrimary } from '../../style';
import { Container, Type5, TypeB1 } from './style';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/typography/dist/mdc.typography.css';

// fn: process data in responses object to prepare it for submission to airtable
const processResponses = (responses, questions) => {
  // for (let question in responses) {
  //   // use hasOwnProperty to avoid considering inherited properties (objects are messy)
  //   if (responses.hasOwnProperty(question)) {
  //     // select for responses to checkbox questions (the only values which are arrays)
  //     if (Array.isArray(responses[question])) {
  //       responses[question].filter(answer => {
  //         // previously we were filtering out empty strings - no longer necessary since other implementation improved
  //         // keeping functionality in case we want to unspool array responses into key-value pairs (if so, remove stringify)
  //         return true;
  //       });
  //     }
  //   }
  // }
  let processed;
  processed = unspoolArrays(incrementKeys(responses), questions);
  console.log(processed);
  return processed;
};

const Submit = ({ questions, responses, choice, userRef }) => {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // just before posting data, include uuid generated userRef
    const finalResponses = {
      userRef,
      userEmail,
      ...processResponses(responses, questions),
    };
    console.log('responses object just before submission:', finalResponses);
    postResponses(`${choice}-responses`, finalResponses).then(res => {
      // navigate to confirmation once response from POST successfully received
      console.log(res);
      history.push('/report/confirm');
    });
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
          onChange={e => {
            console.log('email before update:', userEmail);
            setUserEmail(e.target.value);
          }}
          value={userEmail}
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
