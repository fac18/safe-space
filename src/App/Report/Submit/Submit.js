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
  return unspoolArrays(incrementKeys(responses), questions);
};

const Submit = ({ questions, responses, choice, userRef }) => {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // just before posting data, include uuid generated userRef
    const finalResponses = {
      userRef,
      userEmail,
      ...processResponses(responses, questions),
    };
    postResponses(`${choice}-responses`, finalResponses).then((res) => {
      // navigate to confirmation once response from POST successfully received
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
          If you want the MU's Safe Space team to take any action based on your report, our policy dictates that we need to confirm this with you, the person making the report. In order to do this, please leave your e-mail address below:
        </TypeB1>
        <TypeB1 use='subtitle1'>
          Otherwise, just submit your report to finish.
        </TypeB1>

        <TextField
          use='body1'
          label='email'
          pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
          onChange={(e) => {
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
